import styled from "styled-components";
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Div1 = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Div2 = styled.div`
  background: #ffffff;
  border-radius: 5px;
  padding: 30px 20px;
`;

export const Input = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;
  padding-left: 10px;
  width: 342px;
  height: 40px;
`;

export const Button = styled.button`
  width: 130px;
  height: 40px;
  background: #8052ec;
  border-radius: 5px;
  border: none;
  color: white;
  margin-left: 50px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.4;
  }
`;

export const Div3 = styled.div`
  background: ${(props) => (props.isFinished ? "#E8FF8B" : "#e4e4e4")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin: 20px 0px;
  margin-right: 30px;
  padding: 0px 20px;
  box-shadow: 1px 4px 10px rgb(0 0 0 / 20%);
  border-radius: 5px;
  width: 500px;
  height: 50px;
`;

export const Trash = styled(FcEmptyTrash)`
  cursor: pointer;
`;

export const Check = styled(FcCheckmark)`
  cursor: pointer;
`;
