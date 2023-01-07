import styled from "styled-components";
import { useState, useEffect } from "react";
import { getHours, getMinutes, isToday } from "date-fns";
interface ColProps {
  time: number;
  date: Date;
  colIndex: number;
}
const Col = ({ time, date, colIndex }: ColProps) => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const currentHour = getHours(currentTime);
  const shouldDisplayTimeIndicator = isToday(date) && time - 1 === currentHour;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <>{colIndex === 0 && <Label>{time}</Label>}</>
      {shouldDisplayTimeIndicator && (
        <Row marginTop={getMinutes(currentTime) * 0.55}>
          <Circle />
          <Line />
        </Row>
      )}
    </Container>
  );
};

export default Col;

const Container = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  border-top: none;
  border-right: none;
  height: 45px;
  cursor: pointer;
  position: relative;
`;

const Label = styled.div`
  font-size: 11px;
  color: #70757a;
  position: absolute;
  bottom: -1px;
  width: 25px;
  left: -25px;
  border-bottom: 1px solid lightgray;
`;

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
  margin-top: ${(props) => `${props.marginTop}px`};
`;
