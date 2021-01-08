import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = ({ doorOpen }) => {
  return (
    <StyledNav>
      <nav className={doorOpen ? "navVisible" : ""}>
        <h1>
          <span>Big</span>Basket
        </h1>
        <ul>
          <li>
            <Link to="/">Browse</Link>
          </li>
          <li>
            <Link to="/">LogIn</Link>
          </li>
          <li>
            {" "}
            <Link to="/">SignUp</Link>
          </li>
        </ul>
      </nav>
    </StyledNav>
  );
};

const StyledNav = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 8%;
  z-index: 4;
  overflow: hidden;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(5px);
    transform: translateY(-100%);
    transition: all ease-out 1s;
  }
  .navVisible {
    transform: translate(0);
  }
  h1 {
    span {
      color: #de271c;
    }
    padding: 1rem clamp(1rem, 4vw, 2rem);
    font-size: clamp(1.25rem, 5vw, 2rem);
    color: black;
  }
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      padding: 0 clamp(1rem, 4vw, 2rem);
      a {
        text-decoration-color: #77bc40;

        color: black;
        font-size: clamp(0.8rem, 3vw, 1.25rem);
        font-weight: 400;
      }
    }
  }
`;
export default Nav;
