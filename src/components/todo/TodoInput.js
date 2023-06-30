import styled from 'styled-components';
import { Input, Button, Flex, InvisibleLabel } from '..';
import { DATATESTID } from '../../constants';

const CreateButton = styled(Button)`
  width: 21%;
  border-radius: 15px;
`;

const InputBox = styled(Input)`
  width: 75%;
  margin: 0 8px 0 0;
`;

const TodoInput = ({ create }) => (
  <form onSubmit={create}>
    <Flex>
      <InvisibleLabel htmlFor="email">email input</InvisibleLabel>
      <InputBox id="todo-input" data-testid={DATATESTID.ADD_INPUT} placeholder="Enter new todo!" />
      <CreateButton type="submit" data-testid={DATATESTID.ADD_BTN}>
        + 추가
      </CreateButton>
    </Flex>
  </form>
);
export default TodoInput;
