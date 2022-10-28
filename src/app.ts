import { AddPublics } from "./actions/actions.module";
import { Button, ButtonIcons } from "./buttons/button";
import { ElementFind } from "./element-find/element-find";
import { elementCollection } from "./element-find/element-find.module";
import { elementShouldNotExistGuard, elementShouldExistGuard, routeGuard } from "./guards/guards.module";
import { RenderAt } from "./render/render.fabric";
import { Routes } from "./routing/routes";

export class App {
    constructor() {
        console.log("Скрипт инициализирован!");
    }

    @routeGuard(Routes.CreatePost)
    @elementShouldNotExistGuard("#sd-add-all-public")
    @elementShouldExistGuard(new ElementFind().getSingle(elementCollection.ModalBody))
    public addButtons() {
        console.log("addButtons запущен!");
        const addButtonAddAll = new Button({
            id: "sd-add-all-public",
            classes: ["btn", "btn-default"],
            icon: ButtonIcons.glyphiconPicture,
            text: "Добавить все паблики"
        }).element;

        const place = new ElementFind().getSingle(elementCollection.AddPageLabel);

        new RenderAt().render(addButtonAddAll, place);
    }
}