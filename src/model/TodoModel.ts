export class TodoModel {
    public todoText: string = '';
    public done: boolean = false;

    constructor (todoText: string, done: boolean) {
      this.todoText = todoText;
      this.done = done;
      console.log('TodoModel Criado');
    }

}
