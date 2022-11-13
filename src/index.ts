import { App } from "./app.module";
import { startScheduling } from "./scheduler/scheduler";

const app = new App();

startScheduling(app);