import { useRef, useState } from "react";
import styled from "styled-components";
import { OptionType, ViewOption } from "../../types";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useOutsideDropdownClick } from "../../hooks/useOutsideDropdownClick";

interface DropdownProps {
  selected: OptionType;
  options: Array<OptionType>;
  handleSelect: (value: ViewOption) => void;
  shouldDisplayArrow?: boolean;
  shortLabel?: boolean;
  containerStyle?: object;
  dropdownStyle?: object;
  itemStyle?: object;
}

const Dropdown = ({
  selected,
  options,
  handleSelect,
  shouldDisplayArrow = true,
  shortLabel = true,
  containerStyle,
  dropdownStyle,
  itemStyle,
}: DropdownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const wrapperRef = useRef(null);
  useOutsideDropdownClick(wrapperRef, setDropdownOpen);

  return (
    <Container
      style={containerStyle}
      ref={wrapperRef}
      onClick={() => setDropdownOpen((prev) => !prev)}
    >
      <Row>
        <Label>{selected.label || "Select"}</Label>
        {shouldDisplayArrow && <RiArrowDropDownLine size={25} />}
      </Row>
      {dropdownOpen && (
        <DropdownContainer style={dropdownStyle}>
          {options.length ? (
            <>
              {options.map((option) => {
                return (
                  <Item
                    style={itemStyle}
                    onClick={() => handleSelect(option.value as any)}
                    key={option.label}
                  >
                    <div>{option.label}</div>
                    {shortLabel && (
                      <div style={{ fontSize: "11px" }}>{option.label[0]}</div>
                    )}
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
  top: 40px;
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
  padding-left: 4px;
`;

const Label = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: rgb(60, 64, 67);
`;
