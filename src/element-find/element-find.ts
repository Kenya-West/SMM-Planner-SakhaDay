import { SourceElementModel } from "../render/render.model";

export class ElementFind {

    public contextElement: SourceElementModel;

    constructor(contextElement: SourceElementModel = document as unknown as SourceElementModel) {
        this.contextElement = contextElement;
    }

    public getSingle(query: ElementCollectionModel): SourceElementModel {
        return this.getElementSingle(query);
    }
    public getMultiple(query: ElementCollectionModel): SourceElementModel[] {
        return this.getElementMultiple(query);
    }

    private getElementSingle(query: ElementCollectionModel): SourceElementModel {
        if (query.id === ElementCollection.AddPageLabel) {
            return this.contextElement.querySelector(".viewport__content-section .modal-body .panel-group").parentNode.parentNode.querySelector(".control-label")
        }

        return this.contextElement.querySelector(query.selector) as SourceElementModel;
    }
    private getElementMultiple(query: ElementCollectionModel): SourceElementModel[] {
        return Array.from(this.contextElement.querySelectorAll(query.selector));
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

interface ElementCollectionModel {
    id: ElementCollection;
    selector: string;
    preferredMode: "selectSingle" | "selectMultiple";
}

const elementCollectionList: ElementCollectionModel[] =
[
    {
        id: ElementCollection.Root,
        selector: "iframe[src='iframe/app/#/postproject']",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.Modal,
        selector: ".viewport__content-section",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.ModalBody,
        selector: ".viewport__content-section .modal-body",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.Form,
        selector: ".viewport__content-section .modal-body form[role='form']",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.PanelGroup,
        selector: ".viewport__content-section .modal-body .panel-group",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.AddPageLabel,
        selector: ".viewport__content-section .modal-body .panel-group",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.Panels,
        selector: ".viewport__content-section .modal-body .panel-group > .panel-default",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.Buttons,
        selector: ".viewport__content-section .modal-body .panel-group > .panel-default a[role='button']",
        preferredMode: "selectMultiple"
    },
    {
        id: ElementCollection.ButtonsAddAll,
        selector: ".viewport__content-section .modal-body .panel-group > .panel-default a[role='button'] a.pull-right",
        preferredMode: "selectSingle"
    },
    {
        id: ElementCollection.ModalDialogOKButton,
        selector: "body.modal-open .modal-dialog .modal-content .modal-footer button.btn-primary",
        preferredMode: "selectSingle"
    },
]

export class GetElementCollection {
    public static get(id: ElementCollection): ElementCollectionModel {
        return elementCollectionList.find((element) => element.id === id);
    }
}