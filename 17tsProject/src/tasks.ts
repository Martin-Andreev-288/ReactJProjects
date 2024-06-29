// const btn = document.querySelector('.test-btn'); // btn obache mozhe da e i Element, i null, zatova tr da pravim proverka
/* syzdavame typeScript proekt. Stigame do osnovnoto neshto, koeto stroim, po malko stranen nachin - cykame na nqkoe ot izobrazheniqta na vite ili typescript i ni go otvarq  */
const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');
const taskListElement = document.querySelector<HTMLUListElement>('.list');

type Task = {
    description: string;
    isCompleted: boolean;
};

const tasks: Task[] = [];

taskForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskDescription = formInput?.value;
    if (taskDescription) {
        // add task to list
        // render tasks
        // update local storage

        formInput.value = '';
        return;
    }
    alert('Please enter a task description');
});