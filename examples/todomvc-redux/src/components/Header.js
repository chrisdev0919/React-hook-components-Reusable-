import React, { useState, useCallback } from "react";
import { useTodo } from "../todosHooks";

export function Header() {
  const { addTodo } = useTodo();
  const [value, setValue] = useState("");
  const onChange = useCallback(e => setValue(e.target.value), []);
  const onKeyDown = useCallback(
    key => {
      if (key.keyCode === 13) {
        addTodo(value);
        setValue("");
      }
    },
    [value]
  );

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    </header>
  );
}
