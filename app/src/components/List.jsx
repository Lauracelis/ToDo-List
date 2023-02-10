import React from "react";
import Todo from "./Todo";
import axios from "axios";

const List = ({ list,  removeTodoListProp, editTodoListProp }) => {
  const renderedList = list.map((item) => (
    <Todo
      title={item.title}
      completed={item.completed}
      removeTodoListProp={(e) => {
        // Eliminar el elemento de la base de datos
        axios.delete(`http://localhost:3030/todos/${item._id}`).then(() => {
          // Actualizar el estado en el front-end
          removeTodoListProp(item.title);
        });
      }}
      key={item.title}
    />
  ));
  return <div className="ui grid center aligned">{renderedList}</div>;
};
export default List;
