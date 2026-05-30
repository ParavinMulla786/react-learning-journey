import ToDoItem from "./ToDoItem";

function TodoItems({ todoItems }) {
  return (
    <>
      {todoItems.map((item) => (
        <ToDoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        />
      ))}
    </>
  );
}

export default TodoItem;