export class TodoCollections extends Array {
    constructor() {
        super();
        this.modelFirst = [{ todoText: 'Sporting Goods', done: false },
            { todoText: 'Sporting Goods', done: true },
            { todoText: 'Sporting Goods', done: true },
            { todoText: 'Electronics', done: true },
            { todoText: 'Electronics', done: true },
            { todoText: 'Electronics', done: true }];
        console.log('TodoCollection Criado');
    }
}
