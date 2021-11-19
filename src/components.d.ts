/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AccordionButton {
        "color": string;
        "description": string;
        "label": string;
        "width": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface OdsTableBasic {
        "class": string;
        "headless": boolean;
    }
    interface OdsTableBody {
        "class": string;
        "headless": boolean;
    }
    interface OdsTableData {
        "class": string;
        "headless": boolean;
    }
    interface OdsTableFoot {
        "class": string;
        "headless": boolean;
    }
    interface OdsTableHeader {
        "class": string;
        "headless": boolean;
    }
    interface OdsTableRow {
        "class": string;
        "headless": boolean;
    }
    interface OdsTableThead {
        "class": string;
        "headless": boolean;
    }
    interface PlainButton {
    }
}
declare global {
    interface HTMLAccordionButtonElement extends Components.AccordionButton, HTMLStencilElement {
    }
    var HTMLAccordionButtonElement: {
        prototype: HTMLAccordionButtonElement;
        new (): HTMLAccordionButtonElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLOdsTableBasicElement extends Components.OdsTableBasic, HTMLStencilElement {
    }
    var HTMLOdsTableBasicElement: {
        prototype: HTMLOdsTableBasicElement;
        new (): HTMLOdsTableBasicElement;
    };
    interface HTMLOdsTableBodyElement extends Components.OdsTableBody, HTMLStencilElement {
    }
    var HTMLOdsTableBodyElement: {
        prototype: HTMLOdsTableBodyElement;
        new (): HTMLOdsTableBodyElement;
    };
    interface HTMLOdsTableDataElement extends Components.OdsTableData, HTMLStencilElement {
    }
    var HTMLOdsTableDataElement: {
        prototype: HTMLOdsTableDataElement;
        new (): HTMLOdsTableDataElement;
    };
    interface HTMLOdsTableFootElement extends Components.OdsTableFoot, HTMLStencilElement {
    }
    var HTMLOdsTableFootElement: {
        prototype: HTMLOdsTableFootElement;
        new (): HTMLOdsTableFootElement;
    };
    interface HTMLOdsTableHeaderElement extends Components.OdsTableHeader, HTMLStencilElement {
    }
    var HTMLOdsTableHeaderElement: {
        prototype: HTMLOdsTableHeaderElement;
        new (): HTMLOdsTableHeaderElement;
    };
    interface HTMLOdsTableRowElement extends Components.OdsTableRow, HTMLStencilElement {
    }
    var HTMLOdsTableRowElement: {
        prototype: HTMLOdsTableRowElement;
        new (): HTMLOdsTableRowElement;
    };
    interface HTMLOdsTableTheadElement extends Components.OdsTableThead, HTMLStencilElement {
    }
    var HTMLOdsTableTheadElement: {
        prototype: HTMLOdsTableTheadElement;
        new (): HTMLOdsTableTheadElement;
    };
    interface HTMLPlainButtonElement extends Components.PlainButton, HTMLStencilElement {
    }
    var HTMLPlainButtonElement: {
        prototype: HTMLPlainButtonElement;
        new (): HTMLPlainButtonElement;
    };
    interface HTMLElementTagNameMap {
        "accordion-button": HTMLAccordionButtonElement;
        "my-component": HTMLMyComponentElement;
        "ods-table-basic": HTMLOdsTableBasicElement;
        "ods-table-body": HTMLOdsTableBodyElement;
        "ods-table-data": HTMLOdsTableDataElement;
        "ods-table-foot": HTMLOdsTableFootElement;
        "ods-table-header": HTMLOdsTableHeaderElement;
        "ods-table-row": HTMLOdsTableRowElement;
        "ods-table-thead": HTMLOdsTableTheadElement;
        "plain-button": HTMLPlainButtonElement;
    }
}
declare namespace LocalJSX {
    interface AccordionButton {
        "color"?: string;
        "description"?: string;
        "label"?: string;
        "onClicked"?: (event: CustomEvent<any>) => void;
        "width"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface OdsTableBasic {
        "class"?: string;
        "headless"?: boolean;
    }
    interface OdsTableBody {
        "class"?: string;
        "headless"?: boolean;
    }
    interface OdsTableData {
        "class"?: string;
        "headless"?: boolean;
    }
    interface OdsTableFoot {
        "class"?: string;
        "headless"?: boolean;
    }
    interface OdsTableHeader {
        "class"?: string;
        "headless"?: boolean;
    }
    interface OdsTableRow {
        "class"?: string;
        "headless"?: boolean;
    }
    interface OdsTableThead {
        "class"?: string;
        "headless"?: boolean;
    }
    interface PlainButton {
    }
    interface IntrinsicElements {
        "accordion-button": AccordionButton;
        "my-component": MyComponent;
        "ods-table-basic": OdsTableBasic;
        "ods-table-body": OdsTableBody;
        "ods-table-data": OdsTableData;
        "ods-table-foot": OdsTableFoot;
        "ods-table-header": OdsTableHeader;
        "ods-table-row": OdsTableRow;
        "ods-table-thead": OdsTableThead;
        "plain-button": PlainButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "accordion-button": LocalJSX.AccordionButton & JSXBase.HTMLAttributes<HTMLAccordionButtonElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "ods-table-basic": LocalJSX.OdsTableBasic & JSXBase.HTMLAttributes<HTMLOdsTableBasicElement>;
            "ods-table-body": LocalJSX.OdsTableBody & JSXBase.HTMLAttributes<HTMLOdsTableBodyElement>;
            "ods-table-data": LocalJSX.OdsTableData & JSXBase.HTMLAttributes<HTMLOdsTableDataElement>;
            "ods-table-foot": LocalJSX.OdsTableFoot & JSXBase.HTMLAttributes<HTMLOdsTableFootElement>;
            "ods-table-header": LocalJSX.OdsTableHeader & JSXBase.HTMLAttributes<HTMLOdsTableHeaderElement>;
            "ods-table-row": LocalJSX.OdsTableRow & JSXBase.HTMLAttributes<HTMLOdsTableRowElement>;
            "ods-table-thead": LocalJSX.OdsTableThead & JSXBase.HTMLAttributes<HTMLOdsTableTheadElement>;
            "plain-button": LocalJSX.PlainButton & JSXBase.HTMLAttributes<HTMLPlainButtonElement>;
        }
    }
}
