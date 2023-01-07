import styled from "styled-components";
import Dropdown from "./Dropdown";
import { viewingOptions } from "../utils";
import { useState } from "react";
import { DateRange, ViewOption } from "../types";
import DatesSwitcher from "./DatesSwitcher";
import { format, startOfDay, endOfDay } from "date-fns";

const today = format(new Date(), "d");

const Header = ({
  selected,
  dateRange,
  handleSetDateRange,
  handleSelect,
}: {
  selected: ViewOption;
  dateRange: DateRange;
  handleSetDateRange: (start: Date, end: Date) => void;
  handleSelect: (value: ViewOption) => void;
}) => {
  const [isDropDownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleDropdownOpen = (value: boolean) => {
    setIsDropdownOpen(value);
  };

  const handleTodayClick = () => {
    const today = new Date();
    const start = startOfDay(today);
    const end = endOfDay(today);
    handleSetDateRange(start, end);
  };

  return (
    <Container>
      <Row>
        <Image
          alt="logo"
          src={`https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_${today}_2x.png`}
        />
        <Title>Calendar</Title>
        <Button onClick={handleTodayClick}>Today</Button>
        <DatesSwitcher
          selected={selected}
          handleSetDateRange={handleSetDateRange}
          dateRange={dateRange}
        />
      </Row>

      <Dropdown
        options={viewingOptions}
        selected={{ value: selected, label: selected }}
        isOpen={isDropDownOpen}
        handleOpen={handleDropdownOpen}
        handleSelect={handleSelect}
      />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  padding: 8px 20px;
  border-bottom: 1px solid gray;
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  min-width: min-content;
  box-sizing: border-box;
  align-items: center;
`;

const Title = styled.span`
  color: #3c4043;
  font-size: 22px;
  line-height: 24px;
  vertical-align: middle;
  margin-left: 5px;
  margin-right: 20px;
`;

const Image = styled.img`
  height: 40px;
  width: 40px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  color: rgb(60, 64, 67);
  height: 40px;
  width: fit-content;
  min-width: 68px;
  margin: 0 30px;
  background: transparent;
  border: 1px solid #dadce0;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background: #dddddd;
  }
`;
