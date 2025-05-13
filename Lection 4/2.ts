class Task {
  #id: number;
  #description: string;
  #status: string;
  #priority: number;

  get unsafe(): UnsafeTask {
    return {
      status: this.#status,
      priority: this.#priority,
    };
  }

  taskServant = new TaskServant(this);

  constructor(
    id: number,
    description: string,
    status: string,
    priority: number
  ) {
    this.#id = id;
    this.#description = description;
    this.#status = status;
    this.#priority = priority;
  }
}

interface UnsafeTask {
  status: string;
  priority: number;
}

class TaskServant {
  #task: Task;

  constructor(task: Task) {
    this.#task = task;
  }

  changeStatus(status: string) {
    this.#task.unsafe.status = status;
  }

  changePriority(priority: number) {
    this.#task.unsafe.priority = priority;
  }

  completeTask() {
    this.#task.unsafe.status = 'done';
  }

  static completeTasksWithPriority(tasks: Task[], priority: number) {
    tasks
      .filter((task) => task.unsafe.priority === priority)
      .forEach((task) => task.taskServant.completeTask());
  }
}

const task1 = new Task(1, 'Task 1', 'active', 1);
const task2 = new Task(2, 'Task 2', 'active', 2);

task1.taskServant.changePriority(2);
task2.taskServant.changePriority(1);

TaskServant.completeTasksWithPriority([task1, task2], 1);

console.log(task1);
console.log(task2);

export {};
