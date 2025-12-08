import styled from "styled-components";
import { theme } from "../../types/theme";


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 40px;
  gap: 40px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.background};
  //background-color: #0D0D0D;
`;

export const InfoSection = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
   background: ${({ theme }) => theme.colors.secondary};
`;

export const MovieTitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const MovieYear = styled.span`
  font-size: 20px;
  //color: #888;
  text-align: center;
`;

export const MovieDescription = styled.p`
  font-size: 18px;
  line-height: 1.4;
  max-width: 600px;
  text-align: center;
`;

export const ImageSection = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const MovieImage = styled.img`
  width: 100%;
  max-width: 400px;     
  height: 100%;
  object-fit: contain;  
`;

