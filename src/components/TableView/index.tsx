import styled from "styled-components";
import { DateRange, ViewOption } from "../../types";
import { getDatesBetween, NUMBER_OF_COL } from "../../utils";
import Col from "./Col";
import DateLabel from "../Shared/DayLabel";
import { startOfWeek, endOfWeek } from "date-fns";
import { useEffect } from "react";

interface TableViewProps {
  dateRange: DateRange;
  selected: ViewOption;
}

const dayViewDateLabelStyle = {
  flex: 0,
  marginLeft: "10px",
  marginBottom: "-35px",
};

const TableView = ({ dateRange, selected }: TableViewProps) => {
  const arrayOfDates = getDatesBetween(dateRange);

  const renderHeader = () => {
    return (
      <Row>
        {arrayOfDates?.map((date, j) => {
          return (
            <DateLabel
              key={j}
              date={date}
              styles={{
                ...(selected === "day" && dayViewDateLabelStyle),
              }}
            />
          );
        })}
      </Row>
    );
  };

  return (
    <Container>
      {renderHeader()}
      {[...Array(NUMBER_OF_COL)].map((_, i) => {
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

export default TableView;
const Container = styled.div`
  padding: 20px 50px;
  z-index: 1;
  position: relative;
`;

const Row = styled.div`
  display: flex;

  width: 100%;
`;
