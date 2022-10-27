export interface RenderDataModel {
    beforeElem: HTMLElement;
    afterElem?: HTMLElement;
    querySelector?: string;
    class: string[];
    id?: string;
    styles: {key: string; value: string | number}[];
}

export type SourceElementModel = HTMLElement;