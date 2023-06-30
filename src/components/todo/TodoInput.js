import { Input, Button, Flex } from '..';
import { DATATESTID } from '../../constants';

const TodoInput = ({ create }) => (
  <form onSubmit={create}>
    <Flex>
      <Input
        w="75%"
        mg="0px 8px 0px 0px"
        id="todo-input"
        data-testid={DATATESTID.ADD_INPUT}
        placeholder="Enter new todo!"
      />
      <Button w="21%" borderRadius="15px" data-testid={DATATESTID.ADD_BTN}>
        + 추가
      </Button>
    </Flex>
  </form>
);
export default TodoInput;
