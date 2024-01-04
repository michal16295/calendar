import styled from "styled-components";
import { useState, useEffect } from "react";
import { getHours, getMinutes, isToday } from "date-fns";
import TimeIndicator from "../Shared/TimeIndicator";
interface ColProps {
  time: number;
  date: Date;
  colIndex: number;
  handleDateRange: (date: Date, time: number) => void;
}
const Col = ({ time, date, colIndex, handleDateRange }: ColProps) => {
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
    <Container
      onClick={() => (time === 0 ? null : handleDateRange(date, time))}
    >
      <>{colIndex === 0 && <Label>{time}</Label>}</>
      {shouldDisplayTimeIndicator && (
        <TimeIndicator currentTime={currentTime} />
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
