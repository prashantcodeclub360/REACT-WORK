import AppTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import DeleteTodo from "./components/DeleteTodo";
import Delete_2Todo from "./components/Delete_2";
import './App.css'
function App () {
  return (
    <center class="todo-container">
      <AppName />
      <div class="container-fluid text-center">
        <AppTodo />
      </div>
      <div className="item-container">
      <DeleteTodo />
      <Delete_2Todo />
      </div>
       
    </center>
  )
}
export default App;