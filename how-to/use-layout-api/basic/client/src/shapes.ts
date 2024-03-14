import type OpenFin from "@openfin/core";

/**
 * Type of the parameter passed into the layoutManagerOverride function.
 * Extended by implementor's class.
 */
export type LayoutManagerConstructor = OpenFin.LayoutManagerConstructor<OpenFin.LayoutSnapshot>;
/**
 * Type of the LayoutManager instance created by the override.
 */
export type LayoutManager = OpenFin.LayoutManager<OpenFin.LayoutSnapshot>;

/**
 * Layout Shape that is used to index one or more layouts used in a platform window.
 */
export interface LayoutManagerItem {
    /**
     * Name of layout item.
     */
    layoutName: string;
    /**
     * Layout settings, and content options.
     */
    layout: OpenFin.LayoutOptions;
    /**
     * Layout element to bind the layout creation to.
     */
    container?: HTMLElement;
}
