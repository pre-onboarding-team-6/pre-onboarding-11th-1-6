import { useState } from 'react';
import styled from 'styled-components';

const InvisibleLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

const TodoItem = ({ id, todo, isCompleted, update, remove }) => {
  const [modifyValue, setModifyValue] = useState(todo);
  const [modifyMode, setModifyMode] = useState(false);

  const handleModifyInputChange = e => setModifyValue(e.target.value);

  const handleToggleModifyMode = () => {
    setModifyMode(prev => !prev);
  };

  const handleToggleTodo = () => update({ id, todo, isCompleted: !isCompleted });

  const handleDeleteClick = () => {
    remove(id);
  };

  const handleSubmitClick = e => {
    e.preventDefault();
    update({ id, todo: modifyValue, isCompleted });
    setModifyMode(false);
  };

  const handleSubmitEnter = e => {
    if (e.key === 'Enter') {
      update({ id, todo: modifyValue, isCompleted });
      setModifyMode(false);
    }
  };

  return (
    <div>
      <InvisibleLabel htmlFor={`todo-${id}`}>{`toggle todo-${id}`}</InvisibleLabel>
      <input type="checkbox" id={`todo-${id}`} checked={isCompleted} onChange={handleToggleTodo} />
      {modifyMode ? (
        <>
          <input
            value={modifyValue}
            onChange={handleModifyInputChange}
            onKeyUp={handleSubmitEnter}
            data-testid="modify-input"
          />
          <div>
            <button data-testid="submit-button" onClick={handleSubmitClick}>
              제출
            </button>
            <button type="button" data-testid="cancel-button" onClick={handleToggleModifyMode}>
              취소
            </button>
          </div>
        </>
      ) : (
        <>
          <span>{todo}</span>
          <div>
            <button type="button" data-testid="modify-button" onClick={handleToggleModifyMode}>
              수정
            </button>
            <button type="button" data-testid="delete-button" onClick={handleDeleteClick}>
              삭제
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
