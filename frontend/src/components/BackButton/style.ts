import styled from "styled-components";

export const BackButtonContainer = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;

  padding: 10px 18px;
  font-size: 16px;
  border-radius: 8px;

  background-color: #000000cc;
  color: white;
  border: none;
  cursor: pointer;

  backdrop-filter: blur(4px);
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.4);

  transition: 0.2s ease;

  &:hover {
    transform: scale(1.07);
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.5);
  }
`;
