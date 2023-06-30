import styled from 'styled-components';
import { Flex } from '../components';

const FlexCenter = styled(Flex)`
  justify-content: center;
  flex-direction: column;
`;

const Status = styled.h1`
  margin-bottom: 16px;
`;

const Error = () => {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const status = params.get('status');
  return (
    <FlexCenter>
      <Status>{status}</Status>
      <div>예기치 못한 에러가 발생했습니다</div>
    </FlexCenter>
  );
};

export default Error;
