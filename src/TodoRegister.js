import { TodoList } from "./component/TodoList";

export const TodoListRoutes = [
  { path: "", exact: true, children: <TodoList /> }
];
