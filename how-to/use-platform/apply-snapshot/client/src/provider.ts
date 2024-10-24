document.addEventListener("DOMContentLoaded", async () => {
    await fin.Platform.init();
    const platform = fin.Platform.getCurrentSync();

    const launchOneBtn: HTMLButtonElement = document.querySelector("#launch-one") as HTMLButtonElement;
    const launchTenBtn: HTMLButtonElement = document.querySelector("#launch-ten") as HTMLButtonElement;
    const launchTwentyBtn: HTMLButtonElement = document.querySelector("#launch-twenty") as HTMLButtonElement;
    const baseUrl = window.location.origin;
    if (launchOneBtn || launchTenBtn || launchTwentyBtn) {
        launchOneBtn.addEventListener("click", async () => {
            const snapshot = await fetch(`${baseUrl}/snapshots/snapshot-one.json`);
            const snapshotJson = await snapshot.json();
            await platform.applySnapshot(snapshotJson);
        });
        launchTenBtn.addEventListener("click", async () => {
            const snapshot = await fetch(`${baseUrl}/snapshots/snapshot-ten.json`);
            const snapshotJson = await snapshot.json();
            await platform.applySnapshot(snapshotJson);
        });
        launchTwentyBtn.addEventListener("click", async () => {
            const snapshot = await fetch(`${baseUrl}/snapshots/snapshot-twenty.json`);
            const snapshotJson = await snapshot.json();
            await platform.applySnapshot(snapshotJson);
        });
    }
});
