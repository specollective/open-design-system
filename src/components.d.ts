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
    interface PlainButton {
    }
    interface IntrinsicElements {
        "accordion-button": AccordionButton;
        "my-component": MyComponent;
        "ods-table-basic": OdsTableBasic;
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
            "plain-button": LocalJSX.PlainButton & JSXBase.HTMLAttributes<HTMLPlainButtonElement>;
        }
    }
}
