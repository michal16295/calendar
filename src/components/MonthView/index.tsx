import styled from "styled-components";
import { DateRange, ViewOption } from "../../types";
import { getDatesBetween } from "../../utils";
import { format, isToday, startOfWeek, endOfWeek } from "date-fns";
import DayLabel from "../Shared/DayLabel";

const labelStyle = {
  fontSize: "12px",
  height: "30px",
  width: "30px",
  lineHeight: "30px",
};

const MonthView = ({ dateRange }: { dateRange: DateRange }) => {
  const arrayOfDates = getDatesBetween({
    start: startOfWeek(dateRange.start),
    end: endOfWeek(dateRange.end),
  });

  const getShouldDisplayMonth = (cell: Date, index: number): boolean => {
    if (index !== 0) {
      return cell.getMonth() !== arrayOfDates[index - 1].getMonth();
    }
    return false;
  };

  return (
    <Container>
      {arrayOfDates.map((cell, index) => (
        <Col isLast={index === arrayOfDates.length - 1} key={cell.toString()}>
          <DayLabel
            labelStyle={labelStyle}
            shouldDisplayMonth={getShouldDisplayMonth(cell, index)}
            date={cell}
            shouldDisplayDate={index >= 0 && index < 7}
          />
        </Col>
      ))}
    </Container>
  );
};

export default MonthView;
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, auto);
  height: calc(100vh - 65px);
`;

const Col = styled.div<{ isLast?: boolean }>`
  flex: 1 1 0%;
  border-left: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  border-right: ${(props) => props.isLast && "1px solid lightgray"};
  padding: 10px;
`;
