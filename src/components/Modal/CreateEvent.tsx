import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../Shared/Modal";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { GoogleCalendarWrapper } from "../../styles/datePicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "../Shared/Dropdown";
import { DateRange, OptionType } from "../../types";
import { getReccuringOptions } from "../../utils";

const containerStyle = {
  border: "none",
  marginLeft: "-5px",
  flex: 1,
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onCreate?: (title: string, date: string) => void;
  eventDateRange: DateRange | null;
}

const CreateEventModal = ({
  isOpen = true,
  onClose,
  onCreate,
  eventDateRange,
}: Props) => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState<Date>(new Date());
  const [isReccuring, setIsReccuring] = useState(true);

  const handleEventTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventTitle(e.target.value);
  };

  const handleEventDateChange = (date: Date) => {
    setEventDate(date);
  };

  const handleCreate = () => {
    /*onCreate(eventTitle, eventDate);
    setEventTitle("");
    setEventDate("");
    onClose();*/
  };

  const reccuringOptions = getReccuringOptions(
    format(eventDateRange?.start || eventDate, "EEEE")
  );

  return (
    <Modal isOpen={isOpen} handleClose={onClose}>
      <Container>
        <Input
          type="text"
          placeholder="Add title"
          value={eventTitle}
          onChange={handleEventTitleChange}
          className="create-event-modal-input"
        />
        <GoogleCalendarWrapper>
          <DatePicker
            customInput={<DateInput />}
            value={format(eventDate, "EEEE, MMMM dd")}
            showYearDropdown
            dropdownMode="select"
            onChange={handleEventDateChange}
          />
        </GoogleCalendarWrapper>
        <Dropdown
          containerStyle={containerStyle}
          shortLabel={false}
          shouldDisplayArrow={false}
          options={reccuringOptions}
          selected={
            reccuringOptions.find(
              (it) => it.value === isReccuring
            ) as OptionType
          }
          handleSelect={(val: any) => setIsReccuring(val)}
        />
      </Container>

      <Footer>
        <Button onClick={onClose}>Cancel</Button>
        <Button primary>Create</Button>
      </Footer>
    </Modal>
  );
};

export default CreateEventModal;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

const Input = styled.input`
  font-size: 22px;
  color: #3c4043;
  height: 28px;
  border: none;
  outline: none;
  border-bottom: 1px solid #dadce0;
  transition: border-bottom 0.3s ease-in-out;

  &:focus {
    animation: fillBorder 0.3s ease-in-out forwards;
    border-bottom: 2px solid rgb(25, 103, 210);
  }
`;

const DateInput = styled.input`
  margin-top: 12px;
  font-size: 14px;
  padding: 10px 5px 5px 5px;
  border: none;
  outline: none;
  width: 100%;
  color: rgb(60, 64, 67);
  transition: border-bottom 0.3s ease-in-out;
  margin-left: -3px;
  &:focus {
    animation: fillBorder 0.3s ease-in-out forwards;
    border-bottom: 2px solid rgb(25, 103, 210);
  }
  &:hover {
    background: rgb(241, 243, 244);
  }

  @keyframes fillBorder {
    from {
      border-bottom-width: 0;
    }
    to {
      border-bottom-width: 2px;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  border-top: 1px solid #dadce0;
  padding: 20px;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 10px 20px;
  border-radius: 4px;
  color: ${(props) => (props.primary ? "white" : "#5f6368")};
  margin-left: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.875rem;
  background: ${(props) => (props.primary ? "#1a73e8" : "transparent")};
  &:hover {
    box-shadow: ${(props) =>
      props.primary && "0px 8px 16px rgba(0, 0, 0, 0.16)"};
  }
`;
