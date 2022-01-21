// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
// eslint-disable-next-line func-style
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`)
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// eslint-disable-next-line func-style
function completeTask(taskIndex) {
  taskIndex.complete = true;
}

// Print the state of a task to the console in a nice readable way
// eslint-disable-next-line func-style
function logTaskState(taskIndex) {
  console.log(`${taskIndex.title} has${taskIndex.complete ? " " : " not "}been completed`);
}

// DRIVER CODE BELOW
// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1
// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// console.log("1 - ", taskTitles, taskComplete);
// logTaskState(0); // Clean Cat Litter has been completed
// completeTask(0);
// console.log("2 - ", taskTitles, taskComplete);
// logTaskState(0); // Clean Cat Litter has been completed
// console.log("3 - ", taskTitles, taskComplete);


const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
task2.logState(); // Do Laundry has not been completed
task2.markCompleted();
task2.logState(); // Do Laundry has been completed
