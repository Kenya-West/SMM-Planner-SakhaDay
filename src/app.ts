import { AddButtons } from "./app.facade";
import { GetElementCollection } from "./element-find/element-find.module";
import { ElementCollection } from "./element-find/element-find.module";
import { elementShouldNotExistGuard, elementShouldExistGuard, routeGuard } from "./guards/guards.module";
import { Routes } from "./routing/routes";

export class App {
    constructor() {
        console.log("Скрипт инициализирован!");
    }

    @routeGuard(Routes.CreatePost)
    @elementShouldNotExistGuard("#sd-add-all-public")
    @elementShouldExistGuard(GetElementCollection.get(ElementCollection.ModalBody).selector)
    public addButtons() {
        console.log("addButtons запущен!");
        AddButtons();
    }
}