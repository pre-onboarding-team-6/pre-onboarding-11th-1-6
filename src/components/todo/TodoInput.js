import { Input, Button, Flex } from '..';

const TodoInput = ({ create }) => (
  <form onSubmit={create}>
    <Flex>
      <Input w="75%" mg="0px 8px 0px 0px" id="todo-input" data-testid="new-todo-input" placeholder="Enter new todo!" />
      <Button w="21%" borderRadius="15px" data-testid="new-todo-add-button">
        + 추가
      </Button>
    </Flex>
  </form>
);
export default TodoInput;
