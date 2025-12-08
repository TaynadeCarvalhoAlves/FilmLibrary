import styled from "styled-components";

export const ContainerSideBar = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 90px;
  padding-top: 80px;
  transition: width 0.3s ease;
  overflow: hidden;
 // box-shadow: 2px 0px 6px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.primary};          
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

export const MenuItem = styled.div`
  color: ${({ theme }) => theme.colors.background};
  font-size: 18px;
  padding: 12px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
   color: ${({ theme }) => theme.colors.danger};
  }
`;

export const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1200;

  width: 40px;
  height: 40px;
  border: none;
 color: ${({ theme }) => theme.colors.danger};
  color: white;
  font-size: 20px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
   color: ${({ theme }) => theme.colors.danger};
  }
`;


export const styleIcon = {
  fontSize: '50px',
  }