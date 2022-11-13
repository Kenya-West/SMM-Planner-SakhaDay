import { YakutskNewsIcon } from "../assets/icons/yakutsknews.icon";

export class Button {
    public element: HTMLButtonElement;

    constructor(params: ButtonParams, callback: Function, args: unknown) {
        let innerHTML = `<span class="${params.icon !== ButtonIcons.none ? 'glyphicon' : ''} ${params.icon !== ButtonIcons.none ? params.icon : ''}">
</span>
<span>
    <span class="ng-scope">${params.text ?? 'Текст'}</span>
</span>`
        const button = document.createElement("button");
        button.innerHTML = innerHTML;

        if (params.id) {
            button.id = params.id
        }
        params.classes.forEach(element => {
            button.classList.add(element)
        });

        button.addEventListener("click", callback.bind(this, args), false);

        (button as any).sdCallerParams = args;

        this.element = button;
    }
}

export class TypographyButton {
    public element: HTMLElement;

    constructor(params: ButtonParams, callback: Function, args: unknown) {
        let innerHTML = `<i class="typograph-icon"></i>`;
        const button = document.createElement("typograph-input");
        button.innerHTML = innerHTML;

        if (params.id) {
            button.id = params.id
        }
        params.classes.forEach(element => {
            button.classList.add(element)
        });
        button.classList.add("ng-isolate-scope");
        button.setAttribute("text", "project.icon");
        button.style.setProperty("right", "35px");
        button.querySelector("i").style.setProperty("background", `url(${YakutskNewsIcon}) no-repeat`);

        button.addEventListener("click", callback.bind(this, args), false);

        (button as any).sdCallerParams = args;

        this.element = button;
    }
}

export interface ButtonParams {
    icon: ButtonIcons;
    text: string;
    classes: string[];
    id?: string
}

export enum ButtonIcons {
    none = "none",
    glyphiconPicture = "glyphicon-picture"
}