import { v4 } from 'uuid'




export class RandomId {
    static next(): string {
        return v4()
    }
}
