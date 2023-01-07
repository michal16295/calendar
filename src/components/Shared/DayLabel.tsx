import styled from "styled-components";
import { format, isToday } from "date-fns";

const DayLabel = ({ date, styles }: { date: Date; styles?: object }) => {
  return (
    <HeaderItem style={styles}>
      <SubLabel isToday={isToday(date)}>{format(date, "EE")}</SubLabel>
      <Label isToday={isToday(date)}>{format(date, "d")}</Label>
    </HeaderItem>
  );
};

export default DayLabel;

const HeaderItem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

const Label = styled.div<{ isToday: boolean }>`
  font-size: 26px;
  color: ${(props) => (props.isToday ? "white" : "#3c4043")};
  background: ${(props) => props.isToday && "#1a73e8"};
  border-radius: 50%;
  height: 50px;
  width: 50px;
  line-height: 50px;

  &:hover {
    background: ${(props) => (props.isToday ? "#0d67de" : "#F0F0F0")};
  }
`;

const SubLabel = styled.div<{ isToday: boolean }>`
  font-size: 11px;
  color: ${(props) => (props.isToday ? "#1a73e8" : "#70757a")};
  text-transform: uppercase;
`;
