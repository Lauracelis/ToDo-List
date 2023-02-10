import React, { useState, useEffect } from "react";
import Form from "./components/Form"
import Section from "./components/Section";
import List from "./components/List"
import  './App.css'
import todos from "../api/api";

const appTitle = "To Do List"

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() =>{
    async function fetchData(){
      const {data}= await todos.get("/todos");
      setTodoList(data)
    }

    fetchData();
  }, []);

  const addTodo =async(item) => {
    const {data}=await todos.post("/todos", item);
    setTodoList((oldlist) => [...oldlist, item]);
  }

  const removeTodo = async (id) => {
    await todos.delete(`/todos/${id}`);
    setTodoList((oldList) => {
      return oldList.filter((item) => item.title !== id);
    });
  };
  const editTodo = async (id, item) => {
    await todos.put(`/todos/${id}`, item);
  }
  return (
    <div className="ui container center aligned fluid" id="container-section" >
      <Section>
        <h1>{appTitle}</h1>
      </Section>

      <Section>
        <Form addTodo={addTodo}/>
      </Section>

      <Section>
        <List editTodoListProp={editTodo} removeTodoListProp={removeTodo} list={todoList} />
      </Section>
    </div>
  )
}
export default App;
