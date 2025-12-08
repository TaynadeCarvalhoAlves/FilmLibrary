import { useNavigate } from "react-router-dom";
import { BackButtonContainer } from "./style.ts";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <BackButtonContainer onClick={() => navigate(-1)}>
      ← Voltar
    </BackButtonContainer>
  );
}
