import { createMetricsTable } from "./metrics-table";
import { fin } from "openfin-adapter/src/mock";

export class AppMonitor {
    username: string = "";
    currentAppIdentity: OpenFin.Identity = { uuid: '', name: '' };
    token: number = 0;
    pollInterval: number = 5000;

    constructor(pollInterval) {
        this.currentAppIdentity = fin.me.identity;

        if (pollInterval > 10000) {
            this.pollInterval = pollInterval;
        }
    }

    formatDate(date) {
        let formattedDate = `${date.getFullYear().toString().padStart(4, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
        console.log(formattedDate);
        return formattedDate;
    }

    formatBytes(size, places) {
        const KB = 1024;
        const MB = KB * 1024;
        const GB = MB * 1024;

        if (size > GB) {
            return (size / GB).toFixed(places) + "GB";
        } else if (size > MB) {
            return (size / MB).toFixed(places) + "MB";
        } else if (size > KB) {
            return (size / KB).toFixed(places) + "KB";
        } else if (size === 0) {
            return "0";
        } else {
            return size.toFixed(1) + "B";
        }
    }

    async getAppStats() {
        const {browserProcess, apps} = await fin.System.getAllProcessInfo();
        const currentApp = apps.find(
            (entry) => entry.uuid === fin.me.identity.uuid
        );

        if (currentApp !== undefined && currentApp !== null) {
            const primeNumberCalculator = currentApp.entities.find(
                (entry) => entry.name === "prime_number_calculator"
            );

            const cpu = primeNumberCalculator.cpuUsage;
            const memory = primeNumberCalculator.workingSetSize;
            const browserCpu = browserProcess.cpuUsage;
            const browserWorkingMem = browserProcess.workingSetSize;
            return { cpu, memory, browserCpu, browserWorkingMem };
        }

        return null;
    }

    createMessagePayload(additionalData) {
        return {
            timestamp: new Date(), // 'yyyy/MM/DD HH:mm:ss' This is a format that Elastic will automatically recognise as a Date
            username: this.username,
            uuid: this.currentAppIdentity.uuid,
            ...additionalData,
        };
    }

    async sendRvmDetails() {
        const rvmDetails = await fin.System.getRvmInfo();
        createMetricsTable(this.createMessagePayload(rvmDetails))
    }

    async sendCpuAndMemory() {
        const cpuAndMemoryDetails = await this.getAppStats();
        createMetricsTable(this.createMessagePayload(cpuAndMemoryDetails));
    }

    async startMonitoring() {
        if (this.token === 0) {
            this.username = await fin.System.getEnvironmentVariable("USERNAME") // Use auth identify here dont do this!
            this.sendRvmDetails();
            this.token = window.setInterval(() => {
                this.sendCpuAndMemory();
            }, this.pollInterval);
        }
    }

    stopMonitoring() {
        if (this.token !== 0) {
            clearInterval(this.token);
        }
    }
}
