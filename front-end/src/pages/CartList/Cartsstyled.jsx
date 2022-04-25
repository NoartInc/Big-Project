import styled from "styled-components";

const CartStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CartList = styled.div`
  width: 900px;
  padding: 20px 40px;

  table tr td span {
    margin: 15px;
  }
`;

export { CartStyled, CartList };
