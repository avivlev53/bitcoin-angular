import { utilService } from "../services/util.service";


export class Move {

    constructor(
        public _id?: string,
        public todId: string = '',
        public to: string = '',
        public at: number = null,
        public amount: number = null) {

    }

    setId?() {
        this._id = utilService.makeId()
    }
}