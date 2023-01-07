import styled from "styled-components";
import {
  getNextWeekRange,
  getPrevWeekRange,
  getNextMonthRange,
  getPrevMonthRange,
  getNextYearRange,
  getPrevYearRange,
  getNextDayRange,
  getPrevDayRange,
} from "../utils";
import { ViewOption, DateRange } from "../types";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { format } from "date-fns";

interface DateSwitcherProps {
  selected: ViewOption;
  dateRange: DateRange;
  handleSetDateRange: (start: Date, end: Date) => void;
}
const DatesSwitcher = ({
  selected,
  dateRange,
  handleSetDateRange,
}: DateSwitcherProps) => {
  const handleNext = () => {
    let callback = getNextWeekRange;
    switch (selected) {
      case "month":
        callback = getNextMonthRange;
        break;
      case "year":
        callback = getNextYearRange;
        break;
      case "day":
        callback = getNextDayRange;
        break;
      default:
        callback = getNextWeekRange;
    }
    const { start, end } = callback(dateRange.start);
    handleSetDateRange(start, end);
  };

  const handlePrev = () => {
    let callback = getPrevWeekRange;
    switch (selected) {
      case "month":
        callback = getPrevMonthRange;
        break;
      case "year":
        callback = getPrevYearRange;
        break;
      case "day":
        callback = getPrevDayRange;
        break;
      default:
        callback = getPrevWeekRange;
    }
    const { start, end } = callback(dateRange.start);
    handleSetDateRange(start, end);
  };

  const getDisplay = () => {
    switch (selected) {
      case "week":
        return (
          <Title>
            {dateRange.start.getMonth() === dateRange.end.getMonth()
              ? format(dateRange.start, "MMMM yyyy")
              : format(dateRange.start, "MMM - ") +
                format(dateRange.end, "MMM yyyy")}
          </Title>
        );
      case "month":
        return <Title>{format(dateRange.start, "MMMM yyyy")}</Title>;
      case "year":
        return <Title>{format(dateRange.start, "yyyy")}</Title>;
      case "day":
        return <Title>{format(dateRange.start, "MMMM d, yyyy")}</Title>;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Icon onClick={handlePrev}>
        <MdOutlineArrowBackIosNew color="rgb(60,64,67)" />
      </Icon>
      <Icon onClick={handleNext}>
        <MdOutlineArrowForwardIos color="rgb(60,64,67)" />
      </Icon>

      {getDisplay()}
    </Container>
  );
};

export default DatesSwitcher;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
  color: rgb(60, 64, 67);
  margin-left: 20px;
  width: 60px;
`;

const Icon = styled.div`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 15px;
  &:hover {
    background: #dddddd;
  }
`;
