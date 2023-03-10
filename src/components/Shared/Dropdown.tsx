import { useRef } from "react";
import styled from "styled-components";
import { OptionType, ViewOption } from "../../types";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useOutsideDropdownClick } from "../../hooks/useOutsideDropdownClick";

interface DropdownProps {
  selected: OptionType;
  options: Array<OptionType>;
  isOpen: boolean;
  handleOpen: (value: boolean) => void;
  handleSelect: (value: ViewOption) => void;
}

const Dropdown = ({
  selected,
  options,
  isOpen,
  handleOpen,
  handleSelect,
}: DropdownProps) => {
  const wrapperRef = useRef(null);
  useOutsideDropdownClick(wrapperRef, handleOpen);

  return (
    <Container onClick={() => handleOpen(!isOpen)}>
      <Row>
        <Label>{selected.label || "Select"}</Label>
        <RiArrowDropDownLine size={25} />
      </Row>
      {isOpen && (
        <DropdownContainer ref={wrapperRef}>
          {options.length ? (
            <>
              {options.map((option) => {
                return (
                  <Item
                    onClick={() => handleSelect(option.value as ViewOption)}
                    key={option.label}
                  >
                    <div>{option.label}</div>
                    <div style={{ fontSize: "11px" }}>{option.label[0]}</div>
                  </Item>
                );
              })}
            </>
          ) : (
            <Item>No options</Item>
          )}
        </DropdownContainer>
      )}
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  position: relative;
  border-radius: 4px;
  font-weight: 400;
  display: flex;
  border: 1px solid #dadce0;
  height: 36px;
  padding: 4px 5px;
  font-size: 16px;
  text-align: center;
  line-height: 36px;
  cursor: pointer;
  text-transform: capitalize;
`;

const DropdownContainer = styled.div`
  position: absolute;
  max-height: 230px;
  border-radius: 4px;
  border: 1px solid #dadce0;
  top: 60px;
  right: -5px;
  min-width: 160px;
  padding: 10px 0;
  z-index: 10;
  background: white;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
`;

const Item = styled.div`
  color: #222;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: lightgray;
  }
  padding: 5px 10px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75px;
  padding-left: 4px;
`;

const Label = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: rgb(60, 64, 67);
`;
