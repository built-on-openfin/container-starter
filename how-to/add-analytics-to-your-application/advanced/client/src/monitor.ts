import { fin } from "openfin-adapter/src/mock";
import { send } from "./kibana-poster";

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
            timestamp: (new Date()).toISOString(), // 'yyyy/MM/DD HH:mm:ss' This is a format that Elastic will automatically recognise as a Date
            username: this.username,
            uuid: this.currentAppIdentity.uuid,
            ...additionalData,
        };
    }

    async sendRvmDetails() {
        const rvmDetails = await fin.System.getRvmInfo();
        send(this.createMessagePayload(rvmDetails));
    }

    async sendCpuAndMemory() {
        const cpuAndMemoryDetails = await this.getAppStats();
        send(this.createMessagePayload(cpuAndMemoryDetails));
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
