import React, { useState } from "react";

const Form = ({ addTodo }) => {
    // Se importa el useState porque permite tener variables que cambien de estado, tomaría el estado inicial de inputValue y lo actualizaria por la función de setInputValue.
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") return;
     
    addTodo({ title: inputValue, completed: false });
    setInputValue("");
  };

  return (
    <form className="ui form" onSubmit={handleFormSubmit} >
      <div className="ui grid center aligned">
        <div className="row">
          <div className="column five wide" id="inputt">
            <input 
              value={inputValue}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter something to do..."
            />
          </div>
          <div className="column one wide">
            <button type="submit" className="ui button circular icon" style={{background:"#95b8f6", color:"#E9FFF9"}}>
              <i className="white plus icon"></i>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Form;
