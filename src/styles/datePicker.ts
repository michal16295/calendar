import styled from "styled-components";

export const GoogleCalendarWrapper = styled.div`
  display: inline-block;
  text-align: left;
  position: relative;
  width: max-content;

  .react-datepicker__header {
    padding: 10px;
    background-color: white;
    border: none;
  }

  .react-datepicker__navigation {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 16px;
  }

  .react-datepicker__navigation--previous {
  }

  .react-datepicker__navigation--next {
  }

  .react-datepicker__month-and-year {
    font-size: 16px;
    font-weight: bold;
  }

  .react-datepicker__day {
    font-size: 12px;
    text-align: center;
    border-radius: 50%;
    margin: 5px;
    cursor: pointer;
  }

  .react-datepicker__day--today {
    background-color: #f4f4f4;
  }

  .react-datepicker__day--selected {
    background-color: #4285f4;
    color: white;
  }

  .react-datepicker__day--disabled {
    color: #c1c1c1;
    cursor: default;
  }

  .react-datepicker__day-name {
    margin: 5px;
    font-size: 12px;
  }

  .react-datepicker__year-select {
    display: none;
  }
`;
