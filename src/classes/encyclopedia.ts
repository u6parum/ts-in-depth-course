import ReferenceItem from "./reference-item";
import { positiveInteger } from "../decorators";

export default class Encyclopedia extends ReferenceItem {

    private _copies: number;
    public get copies(): number {
        return this._copies;
    }
    @positiveInteger
    public set copies(v: number) {
        this._copies = v;
    }

    /**
     *
     */
    constructor(title: string, year: number, public edition: number) {
        super(title, year);
    }

    /**
     * printItem
     */
    public printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    public printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}