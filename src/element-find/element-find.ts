import { SourceElementModel } from "../render/render.model";

export class ElementFind {
    public getSingle(query: ElementCollection): SourceElementModel {
        return this.getElementSingle(query);
    }
    public getMultiple(query: ElementCollection): Array<SourceElementModel> {
        return this.getElementMultiple(query);
    }

    private getElementSingle(query: ElementCollection): SourceElementModel {
        if (query === ElementCollection.AddPageLabel) {
            return document.querySelector(".viewport__content-section .modal-body .panel-group").parentNode.parentNode.querySelector(".control-label")
        }

        return document.querySelector(elementCollectionQueryMatcher[query]) as SourceElementModel;
    }
    private getElementMultiple(query: ElementCollection): Array<SourceElementModel> {
        return Array.from(document.querySelectorAll(elementCollectionQueryMatcher[query])) as Array<SourceElementModel>;
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
}
