import state from "./state";
export function getTasks(state) {
  return state.tasks;
}

export function getTask(state) {
  return state.task;
}
