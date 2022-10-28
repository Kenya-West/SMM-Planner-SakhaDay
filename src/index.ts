import * as App from "./app.module";
import { startScheduling } from "./scheduler/scheduler";

const app = new App.App();

startScheduling(app);