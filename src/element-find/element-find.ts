import { SourceElementModel } from "../render/render.model";

export class ElementFind {

    public contextElement: SourceElementModel;

    constructor(contextElement: SourceElementModel = document as unknown as SourceElementModel) {
        this.contextElement = contextElement;
    }

    public getSingle(query: ElementCollection | string): SourceElementModel {
        return this.getElementSingle(query);
    }
    public getMultiple(query: ElementCollection): Array<SourceElementModel> {
        return this.getElementMultiple(query);
    }

    private getElementSingle(query: ElementCollection | string): SourceElementModel {
        if (query === ElementCollection.AddPageLabel) {
            return this.contextElement.querySelector(".viewport__content-section .modal-body .panel-group").parentNode.parentNode.querySelector(".control-label")
        }

        const queryMapped = elementCollectionQueryMatcher[query as ElementCollection] ?? query;
        return this.contextElement.querySelector(queryMapped as string) as SourceElementModel;
    }
    private getElementMultiple(query: ElementCollection | string): Array<SourceElementModel> {
        const queryMapped = elementCollectionQueryMatcher[query as ElementCollection] ?? query;
        return Array.from(this.contextElement.querySelectorAll(queryMapped as string)) as Array<SourceElementModel>;
    }
}

export enum ElementCollection {
    Root,
    Modal,
    ModalBody,
    Form,
    PanelGroup,
    AddPageLabel,
    Panels,
    Buttons,
    ButtonsAddAll,

    // Modal dialog
    ModalDialogOKButton
}

export const elementCollectionQueryMatcher: Record<ElementCollection, string> = {
    [ElementCollection.Root]: "iframe[src='iframe/app/#/postproject']",
    [ElementCollection.Modal]: ".viewport__content-section",
    [ElementCollection.ModalBody]: ".viewport__content-section .modal-body",
    [ElementCollection.Form]: ".viewport__content-section .modal-body form[role='form']",
    [ElementCollection.PanelGroup]: ".viewport__content-section .modal-body .panel-group",
    [ElementCollection.AddPageLabel]: ".viewport__content-section .modal-body .panel-group",
    [ElementCollection.Panels]: ".viewport__content-section .modal-body .panel-group > .panel-default",
    [ElementCollection.Buttons]: ".viewport__content-section .modal-body .panel-group > .panel-default a[role='button']",
    [ElementCollection.ButtonsAddAll]: ".viewport__content-section .modal-body .panel-group > .panel-default a[role='button'] a.pull-right",
    [ElementCollection.ModalDialogOKButton]: "body.modal-open .modal-dialog .modal-content .modal-footer button.btn-primary",
}
