import styled from "styled-components";
import { Typography } from "@mui/material";

export const MovieCard = styled.div`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.primary};  
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.text};  
  cursor: pointer;

   &:hover {
    transform: scale(1.05);
  } 
`;

export const MovieImage = styled.div<{ image: string }>`
    height: 300px;
    width: 100%;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
`;


export const MovieContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const MovieTitle = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const MovieYear = styled(Typography)`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
