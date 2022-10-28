export class Button {
    public element: HTMLButtonElement;

    constructor(params: ButtonParams) {
        let innerHTML = `<button ${params.id ? 'id='+params.id : ''} class="${params.classes.join(' ')}">
    <span class="${params.icon !== ButtonIcons.none ? 'glyphicon' : ''} ${params.icon !== ButtonIcons.none ? params.icon : ''}">
    </span>
    <span>
        <span class="ng-scope">${params.text ?? 'Текст'}</span>
    </span>
</button>`
        const button = document.createElement("button");
        button.innerHTML = innerHTML;
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