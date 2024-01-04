import styled from "styled-components";
import { DateRange, ViewOption } from "../../types";
import { getDatesBetween, NUMBER_OF_COL } from "../../utils";
import Col from "./Col";
import DateLabel from "../Shared/DayLabel";
import { useEffect, useRef } from "react";

interface TableViewProps {
  dateRange: DateRange;
  selected: ViewOption;
  isModalOpen: Boolean;
  handleEventDateRange: (range: DateRange) => void;
  handleOpenModal: () => void;
}

const dayViewDateLabelStyle = {
  flex: 0,
  marginLeft: "10px",
};

const TableView = ({
  dateRange,
  selected,
  isModalOpen,
  handleEventDateRange,
  handleOpenModal,
}: TableViewProps) => {
  const arrayOfDates = getDatesBetween(dateRange);
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const now = new Date();
    const scrollToElement = containerRef?.current?.querySelector(
      `[data-time="${now.getHours().toString()}"]`
    );
    if (scrollToElement) {
      scrollToElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  const bulidEventDateRange = (date: Date, time: number) => {
    const startDate = new Date(date);
    const endDate = new Date(date);

    startDate.setHours(time - 1);
    endDate.setHours(time);

    handleEventDateRange({ start: startDate, end: endDate });
    handleOpenModal();
  };

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
    <Container ref={containerRef}>
      {renderHeader()}
      {[...Array(NUMBER_OF_COL)].map((_, i) => {
        return (
          <Row key={i} data-time={i.toString()}>
            {arrayOfDates?.map((date, j) => {
              return (
                <Col
                  date={date}
                  time={i}
                  key={j}
                  colIndex={j}
                  handleDateRange={bulidEventDateRange}
                />
              );
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
  max-height: calc(100vh - 100px);
  overflow: auto;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;
