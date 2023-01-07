import styled from "styled-components";
import { DateRange } from "../../types";
import { getDatesBetween } from "../../utils";
import Col from "./Col";
import { format, isToday } from "date-fns";

const NUMBER_OF_COL = 24;

interface WeekViewProps {
  dateRange: DateRange;
}

const WeekView = ({ dateRange }: WeekViewProps) => {
  const arrayOfDates = getDatesBetween(dateRange);

  const renderHeader = () => {
    return (
      <Row>
        {arrayOfDates?.map((date, j) => {
          return (
            <HeaderItem key={j}>
              <SubLabel isToday={isToday(date)}>{format(date, "EE")}</SubLabel>
              <Label isToday={isToday(date)}>{format(date, "d")}</Label>
            </HeaderItem>
          );
        })}
      </Row>
    );
  };

  return (
    <Container>
      {renderHeader()}
      {[...Array(NUMBER_OF_COL)].map((item, i) => {
        return (
          <Row key={i}>
            {arrayOfDates?.map((date, j) => {
              return <Col date={date} time={i} key={j} colIndex={j} />;
            })}
          </Row>
        );
      })}
    </Container>
  );
};

export default WeekView;
const Container = styled.div`
  padding: 20px 50px;
  z-index: 1;
  position: relative;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const HeaderItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

const Label = styled.div<{ isToday: boolean }>`
  font-size: 26px;
  color: ${(props) => (props.isToday ? "white" : "#3c4043")};
  background: ${(props) => props.isToday && "#1a73e8"};
  border-radius: 50%;
  height: 40px;
  width: 40px;
  line-height: 40px;

  &:hover {
    background: ${(props) => (props.isToday ? "#0d67de" : "#F0F0F0")};
  }
`;

const SubLabel = styled.div<{ isToday: boolean }>`
  font-size: 11px;
  color: ${(props) => (props.isToday ? "#1a73e8" : "#70757a")};
  text-transform: uppercase;
`;
