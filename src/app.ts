import { AddPublics } from "./actions/actions.module";
import { AddAllPublicsData } from "./actions/add-publics.model";
import { Button, ButtonIcons } from "./buttons/buttons.module";
import { ElementFind, GetElementCollection } from "./element-find/element-find.module";
import { ElementCollection } from "./element-find/element-find.module";
import { elementShouldNotExistGuard, elementShouldExistGuard, routeGuard } from "./guards/guards.module";
import { RenderAt } from "./render/render.module";
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
        const addButtonAddAll = new Button({
            id: "sd-add-all-public",
            classes: ["btn", "btn-default"],
            icon: ButtonIcons.glyphiconPicture,
            text: "Добавить все паблики"
        },
        AddPublics.prototype.add,
        AddAllPublicsData).element;

        const place = new ElementFind().getSingle(GetElementCollection.get(ElementCollection.AddPageLabel));

        new RenderAt().render(addButtonAddAll, place);
    }
}