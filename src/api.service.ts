import { injectable } from 'inversify';

@injectable()
export class ApiService {
    private name: string;

    constructor() {
        this.name = 'I am api service';
    }

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }
}
