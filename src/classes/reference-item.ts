import { timeout } from "../decorators";

export default abstract class ReferenceItem {
    //title: string;
    //year: number;

    /**
     * printItem
     */
    @timeout(1000)
    public printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Static Department: ${ReferenceItem.department}`);
    }

    abstract printCitation(): void;

    /**
     *
     */
    // constructor(newTitle: string, newYear: number) {
    //   console.log(`Creating new ReferenceItem...`);
    //   this.title = newTitle;
    //   this.year = newYear;  
    // }

    static department: string = 'Static Department';

    private _publisher: string;

    public get publisher(): string {
        return this._publisher.toUpperCase();
    }

    public set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }


    /**
     *
     */
    constructor(public title: string, protected year: number) { }
}