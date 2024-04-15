function AddTodo () {
    return ( <div class="row kg-row">
    <div class="col-5">
     <input type="text" name="txt" id="txt" placeholder="Enter Your Todo" /> 
    </div>
    <div class="col-4">
    <input type="date" name="#" id="#" />
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-success kg-buut">Add</button>
    </div>
  </div>
);
}

export default AddTodo;