import styled from "styled-components";
import { getMinutes } from "date-fns";

const TimeIndicator = ({ currentTime }: { currentTime: Date }) => {
  return (
    <Row marginTop={getMinutes(currentTime) * 0.666}>
      <Circle />
      <Line />
    </Row>
  );
};

export default TimeIndicator;

const Line = styled.div`
  height: 2px;
  width: 100%;
  background: rgb(234, 67, 53);
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgb(234, 67, 53);
`;

const Row = styled.div<{ marginTop: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  right: 5px;
  top: ${(props) => props.marginTop === 0 && "-5px"};
  margin-top: ${(props) => `${props.marginTop}px`};
`;
