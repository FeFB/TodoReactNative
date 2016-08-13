import {TodoModel} from '../model';

export class TodoCollections extends Array<TodoModel> {

    private modelFirst  = [ { todoText: 'Sporting Goods', done: false },
      { todoText: 'Sporting Goods', done: true },
      { todoText: 'Sporting Goods', done: true },
      { todoText: 'Electronics', done: true},
      { todoText: 'Electronics', done: true},
      { todoText: 'Electronics', done: true}];

    constructor () {
      super()
        console.log('TodoCollection Criado') ;

    }


}
