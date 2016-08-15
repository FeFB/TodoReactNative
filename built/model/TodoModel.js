export class TodoModel {
    constructor(todoText, done) {
        this.todoText = '';
        this.done = false;
        this.todoText = todoText;
        this.done = done;
        console.log('TodoModel Criado');
    }
}
