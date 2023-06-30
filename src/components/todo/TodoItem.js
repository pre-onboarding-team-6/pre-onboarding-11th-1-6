import { useState } from 'react';
import styled from 'styled-components';
import InvisibleLabel from '../layout/InvisibleLabel';
import { Input, Button } from '..';
import { DATATESTID } from '../../constants';

const ListItem = styled.li`
  font-size: 16px;
  height: 50px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

const ListItemTitle = styled.span`
  width: 70%;
  margin-left: 8px;
  text-decoration: ${props => props.isCompleted && 'line-through'};
`;

const ListItemButtonGroups = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 30%;
  align-items: center;
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
    <ListItem>
      <InvisibleLabel htmlFor={`todo-${id}-toggle`}>{`toggle todo-${id}`}</InvisibleLabel>
      <input type="checkbox" id={`todo-${id}-toggle`} checked={isCompleted} onChange={handleToggleTodo} />
      {modifyMode ? (
        <>
          <Input
            id={`todo-${id}`}
            mg="0px 0px 0px 8px"
            value={modifyValue}
            onChange={handleModifyInputChange}
            onKeyUp={handleSubmitEnter}
            data-testid={DATATESTID.MODIFY_INPUT}
            w="70%"
          />
          <ListItemButtonGroups>
            <Button
              w="50px"
              bg="rgb(138, 209, 146)"
              mg="0px 8px 0px 0px"
              borderRadius="15px"
              data-testid={DATATESTID.SUBMIT_BTN}
              onClick={handleSubmitClick}>
              제출
            </Button>
            <Button
              w="50px"
              bg="rgb(255, 97, 97)"
              borderRadius="15px"
              type="button"
              data-testid={DATATESTID.CANCLE_BTN}
              onClick={handleToggleModifyMode}>
              취소
            </Button>
          </ListItemButtonGroups>
        </>
      ) : (
        <>
          <ListItemTitle isCompleted={isCompleted}>{todo}</ListItemTitle>
          <ListItemButtonGroups>
            <Button
              w="50px"
              bg="rgb(138, 209, 146)"
              mg="0px 8px 0px 0px"
              borderRadius="15px"
              type="button"
              data-testid={DATATESTID.MODIFY_BTN}
              onClick={handleToggleModifyMode}>
              수정
            </Button>
            <Button
              w="50px"
              bg="rgb(255, 97, 97)"
              borderRadius="15px"
              type="button"
              data-testid={DATATESTID.DELETE_BTN}
              onClick={handleDeleteClick}>
              삭제
            </Button>
          </ListItemButtonGroups>
        </>
      )}
    </ListItem>
  );
};

export default TodoItem;
