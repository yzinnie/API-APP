import { useEffect, useState } from 'react';
import Header from '../components/Header';

const CheckList = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem('todos')
      ? JSON.parse(localStorage.getItem('todos'))
      : []
  );
  const [task, setTask] = useState('');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };
  return (
    <div className="CheckList">
      <Header />
      <div className="check-form">
        <h3>체크리스트</h3>
        <p>
          산책에 필요한 물건? 나가서 구매할 간식? <br />
          자유롭게 모든 것들을 Check ! 🖤
        </p>

        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => handleKeyPress(e)}
        />
        <button onClick={handleAddTodo}>등록</button>

        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => handleRemoveTodo(index)}>완료</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default CheckList;
