import { AddAllPublicsData, AddPublics, FixText } from "./actions/actions.module";
import { Button, ButtonIcons, TypographyButton } from "./buttons/buttons.module";
import { ElementFind, GetElementCollection, ElementCollection } from "./element-find/element-find.module";
import { RenderAt } from "./render/render.module";

export function AddButtons() {
    const addButtonAddAll = new Button({
            id: "sd-add-all-public",
            classes: ["btn", "btn-default"],
            icon: ButtonIcons.glyphiconPicture,
            text: "Добавить все паблики"
        },
        AddPublics.prototype.add,
        AddAllPublicsData).element;

    let place = new ElementFind().getSingle(GetElementCollection.get(ElementCollection.AddPageLabel));

    new RenderAt().render(addButtonAddAll, place);

    const addButtonFixText = new TypographyButton({
            id: "sd-fix-text",
            classes: [],
            icon: ButtonIcons.none,
            text: "Исправить текст"
        },
        FixText.prototype.fix,
        null).element;

    place = new ElementFind().getSingle(GetElementCollection.get(ElementCollection.TypographHost));

    new RenderAt().render(addButtonFixText, place);

}