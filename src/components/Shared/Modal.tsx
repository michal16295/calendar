import styled from "styled-components";
import { useRef, useEffect } from "react";
import { useOutsideDropdownClick } from "../../hooks/useOutsideDropdownClick";

interface ModalProps {
  isOpen: boolean;
  children: any;
  style?: object;
  handleClose: () => void;
}
const Modal = ({ isOpen, children, style, handleClose }: ModalProps) => {
  const containerRef = useRef(null);

  useOutsideDropdownClick(containerRef, handleClose);

  return (
    <>
      <ModalOverlay
        ref={containerRef}
        style={{ ...style, display: isOpen ? "flex" : "none" }}
      >
        {children}
      </ModalOverlay>
      {isOpen && <Background />}
    </>
  );
};

export default Modal;

const ModalOverlay = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 3px 8px 16px rgba(0, 0, 0, 0.16);
  -webkit-box-shadow: 3px 8px 19px 1px rgba(0, 0, 0, 0.67);
  -moz-box-shadow: 3px 8px 19px 1px rgba(0, 0, 0, 0.67);
  display: flex;
  flex-direction: column;
  min-width: 448px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  min-height: 250px;
  box-sizing: border-box;
  justify-content: space-between;
  flex: 1 1 auto;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  background: rgba(0, 0, 0, 0);
`;
