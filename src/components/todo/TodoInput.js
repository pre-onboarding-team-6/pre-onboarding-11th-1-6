const TodoInput = ({ create }) => (
  <form onSubmit={create}>
    <input data-testid="new-todo-input" placeholder="Enter new todo!" />
    <button data-testid="new-todo-add-button">+ 추가</button>
  </form>
);

export default TodoInput;
