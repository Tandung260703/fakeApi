export class DataResponse<T> {
    private data: T;
    private  status:number;

    constructor(status: number, data: T) {
        this.data = data;
        this.status = status;
        return this;
    }
}