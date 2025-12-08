import styled from "styled-components";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const ContainerMain = styled.div`
    width: 100%;
    min-height: 100vh; 
    overflow-y: auto; 
   background-color: ${({ theme }) => theme.colors.background};    
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 88%;
  display: flex;
  justify-content: center;
  margin-left: 9%;
  gap: 2rem;
  margin-top: 5%;
`;

export const StyledSearch = styled.input`
  width: 100%;
  padding: 12px 16px 12px 45px; /* espaço pro ícone */
  border-radius: 30px;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.inputBackground};  
  color: #fff;

  &::placeholder {
    color: #ddd;
    font-size: 18px;
  }
`;

export const SearchIcon = styled(SearchOutlinedIcon)`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  font-size: 20px;
  color: #fff;
`;

export const StyledHomeCards = styled.div`
    width: 88%;
     margin-top: 10%;
    margin-left: 9%; 
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.inputBackground};     
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: flex-start ;
    padding: 16px; 
`;

