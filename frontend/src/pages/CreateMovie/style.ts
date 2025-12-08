import styled from "styled-components";

export const ContainerMain = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden; 
    background-color: ${({ theme }) => theme.colors.background};           
`;

export const StyledBar = styled.text`
    width: 50%;
    margin-top: 3%;
    margin-left: 33%;
    font-size: 55px;     
    color: ${({ theme }) => theme.colors.primary};   
`;


export const ContainerModal = styled.div`
    width: 50%;
    height: 80%; 
    margin-top: 3%;
    margin-left: 25%;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.secondary};         
`;

export const InputFields = styled.input`
  width: 50%;
  padding: 12px;
  border-radius: 6px;
  font-size: 15px;

  &:focus {
    border-color: #1976d2;
    outline: none;
  }
`;

export const StyledTitle = styled.input`
  width: 80%;
  padding: 12px;
  margin-top: 3%;
  margin-left: 7%;
  border-radius: 12px;
  font-size: 15px;

  &:focus {
    border-color: #D93232;
    outline: none;
  }
`;

export const StyledYear = styled.input`
  width: 20%;
  padding: 12px;
  margin-top: 3%;
  margin-left: 7%;
  border-radius: 12px;
  font-size: 15px;

  &:focus {
   border-color: #D93232;
    outline: none;
  }
`;

export const StyledGenre= styled.input`
  width: 20%;
  padding: 12px;
  margin-top: 3%;
  margin-left: 7%;
  border-radius: 12px;
  font-size: 15px;

  &:focus {
 border-color: #D93232;
    outline: none;
  }
`;

export const StyledDirector = styled.input`
  width: 20%;
  padding: 12px;
  margin-top: 3%;
  margin-left: 7%;
  border-radius: 12px;
  font-size: 15px;

  &:focus {
   border-color: #D93232;
    outline: none;
  }
`;

export const StyledUrl = styled.input`
  width: 80%;
  padding: 12px;
  margin-top: 3%;
  margin-left: 7%;
  border-radius: 12px;
  font-size: 15px;

  &:focus {
   border-color: #D93232;
    outline: none;
  }
`;

export const StyleDescription = styled.input`
  width: 80%;
  height: 150px;
  padding: 12px;
  margin-top: 8%;
  margin-left: 7%;
  border-radius: 12px;
  font-size: 15px;

  &:focus {
     border-color: #D93232;
    outline: none;
  }
`;

export const StyledButtonSave = styled.button`
  width: 20%;
  padding: 12px;
  margin-top: 6%;
  margin-left: 35%;
  border-radius: 12px;
  font-size: 15px;
  background-color: ${({ theme }) => theme.colors.danger};
  color: white;

  &:focus {
     background-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

