import { ShelfItem } from "../interfaces";

export default class Shelf<T extends ShelfItem> {
    private _items: T[] = [];

    public add(item: T): void {
        this._items.push(item);
    }

    public getFirst(): T | undefined {
        return this._items[0];
    }

    /**
     * find
     */
    public find(title: string): T | undefined {
        for (const element of this._items) {
            if (element.title === title) {
                return element;
            }
        }
        return undefined;
    }

    /**
     * printTitles
     */
    public printTitles(): void {
        for (const element of this._items) {
                console.log(element.title);
        }
    }
}