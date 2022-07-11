import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
export const TodoList = () => {
  // TodoRegister.jsxのStateをuseLocationで受け取る。
  const { state } = useLocation();
  const [todoLists, setTodoLists] = useState([]);

  // 画面変移時に一度だけ、TodoListのStateを更新する。
  // その為UseEffectの第二変数に[]を記載。この様にしないと、無限レンダリングが発生
  useEffect(() => {
    setTodoLists(state.state);
  }, []);
};
