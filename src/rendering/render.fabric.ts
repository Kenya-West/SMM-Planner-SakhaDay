import { RenderDataModel, SourceElementModel } from "./render.model";

export class RenderAt {
    private document: Document;
    constructor() {
        this.document = document;
    }

    /**
     * render
     */
    public render(element: SourceElementModel, data: RenderDataModel) {
        // TODO: Render how, where
    }

    remove(elem: SourceElementModel) {
        if (elem) {
            elem.parentNode.removeChild(elem)
        }
    }
}