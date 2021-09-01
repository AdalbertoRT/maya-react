import styled from "styled-components";

export const MenuComponent = styled.nav`
  display: flex;
  justify-content: flex-start;
  height: auto;
  width: 100%;
  & ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;
    height: ${(props) => props.height || 0} + "px";
    overflow: hidden;
    width: 100%;
    & li {
      padding: 5px;
      width: 100%;
      border-bottom: 1px solid #aaa;
      & a {
        color: #003561;
        text-decoration: none;
        outline: none;
        font-weight: bold;
      }
      & a:hover {
        color: #003561;
      }
      & a::after {
        content: "";
        display: block;
        width: 0px;
        height: 2px;
        background: #4fd398;
        transition: width 0.2s linear;
        font-size: 1rem;
      }
      & a:hover::after {
        width: 100%;
      }
      & a.display {
        color: #000;
      }
      & a.display::after {
        width: 100%;
      }
    }
  }
`;
