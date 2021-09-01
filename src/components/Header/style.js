import styled from "styled-components";

export const HeaderComponent = styled.header`
  width: 100vw;
  height: ${(props) => (props.show ? "200px" : "70px")};
  background-color: #fff;
  border-bottom: 1px solid #e1e1e1;
  overflow: hidden;
  transition: height 0.2s ease-in-out;
`;

export const HeaderInt = styled.div`
  grid-column: 1/13;
  display: grid;
  grid-template-rows: 70px 130px;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  & .menuMobileIcon {
    grid-area: 1/1/1/2;
    width: 20px;
    height: 20px;
    & .menuIcon {
      transition: all 0.2s ease-in-out;
    }
  }
  & .logo {
    grid-area: 1/2/1/4;
    width: 70px;
    height: 70px;
  }
  & .menu {
    grid-area: 2/1/2/3;
  }
`;
