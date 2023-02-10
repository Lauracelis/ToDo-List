import React, { useState, useEffect } from "react";
import Form from "./components/Form"
import Section from "./components/Section";
import List from "./components/List"
import  './App.css'
import todo from "../api/api";

const appTitle = "To Do List"

const list = [
  {title: "test #1", completed: false, id: 1},
  {title: "test #2", id: 2},
  {title: "test #3", id: 3}
]
function App() {
  const [todoList, setTodoList] = useState(list);

  useEffect(() =>{
    async function fetchData(){
      const {data}= await todo.get("/todo");
      setTodoList(data)
    }

    fetchData();
  }, []);

  const addTodo =async(item) => {
    const {data}=await todo.post("/todo", item);
    setTodoList((oldlist) => [...oldlist, item]);
  }

  const removeTodo = async(id) => {
    await todo.delete(`/todo/${id}`);
    setTodoList ((oldlist) => oldlist.filter((item) => {
      return item.id !== id
    }));
  };

  return (
    <div className="ui container center aligned fluid" id="container-section" >
      <Section>
        <h1>{appTitle}</h1>
      </Section>

      <Section>
        <Form addTodo={addTodo}/>
      </Section>

      <Section>
        <List list={todoList} removeTodoListProp={removeTodo}/>
      </Section>
    </div>
  )
}
export default App;
