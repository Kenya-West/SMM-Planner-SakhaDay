import { App } from "../app.module";

let interval: unknown = null;

export const startScheduling = (app: App) => {
    interval = setInterval(function() {
        app.addButtons();
    }, 5000);
}

export const stopScheduling = () => {
    clearInterval(interval as any);
}
