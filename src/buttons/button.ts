export class Button {
    public element: HTMLButtonElement;

    constructor(params: ButtonParams, callback: Function, args: unknown) {
        let innerHTML = `<span class="${params.icon !== ButtonIcons.none ? 'glyphicon' : ''} ${params.icon !== ButtonIcons.none ? params.icon : ''}">
</span>
<span>
    <span class="ng-scope">${params.text ?? 'Текст'}</span>
</span>`
        const button = document.createElement("button");
        if (params.id) {
            button.id = params.id
        }
        params.classes.forEach(element => {
            button.classList.add(element)
        });
        button.innerHTML = innerHTML;
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