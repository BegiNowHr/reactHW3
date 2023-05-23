import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      todoList: [],
    };
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleCreateTodo = () => {
    const { inputValue, todoList } = this.state;
    if (inputValue.trim() === "") {
      return;
    }
  
    const update = todoList.concat(inputValue);
  
    this.setState({
      inputValue: "",
      todoList: update,
    });
  };
  

  render() {
    const { inputValue, todoList } = this.state;

    return (
      <div><div>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
          placeholder="Введите задачу"
        />
        <button onClick={this.handleCreateTodo}>
          Сохранить
        </button>
        </div>
        <div>
          {todoList.map((todo, index) => (
            <div key={index}>
              <h3>{todo}</h3>
            </div>
          ))}
      </div>
      </div>
    );
  }
}

export default App;
