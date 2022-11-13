import { ElementCollection, ElementFind, GetElementCollection } from "../element-find/element-find"
import { SourceElementModel } from "../render/render.model";

export class AddPublics {
    public add(publics: AddPublicsModel[]) {
        const publicNamesCollection = new Set(); // get unique public name to filter panels below
        publics.forEach((publicName) => publicNamesCollection.add(publicName.publicName));

        const panels = new ElementFind().getMultiple(GetElementCollection.get(ElementCollection.Buttons))
            .filter((panel) =>
                Array.from(publicNamesCollection).includes(panel.innerText.toLowerCase())
            );

        function delay(t: number) {
            return new Promise(resolve => setTimeout(resolve, t));
        }

        async function clickAddAllPublicsButton(panel: SourceElementModel) {
                    (panel.querySelector("a[role='button'] a.pull-right") as HTMLElement).click();
                    return Promise.resolve();
        }
        async function clickModalDialogOKButton() {
                    return new Promise(function() {
                        setTimeout(() => {
                            new ElementFind().getSingle(GetElementCollection.get(ElementCollection.ModalDialogOKButton)).click();
                        }, 150);
                    });
                }

        async function run() {
            for (let item of panels) {
                await clickAddAllPublicsButton(item)
                await delay(50);
                await clickModalDialogOKButton()
                await delay(300);
            }
        }

        run();
    }
}

export interface AddPublicsModel {
    social: "vk" | "fb" | "ig" | "ok" | "tg" | "tw",
    publicName: "yakutsk news" | "sakhaday"
}