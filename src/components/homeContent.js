import { useRef, useEffect } from "react";
import styled from "styled-components";
//?Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
//?Images
import homeImage from "./../img/home1.jpg";

const HomeContent = ({ doorOpen }) => {
  //?Ref
  const headingRef = useRef(null);
  const homeImageRef = useRef(null);
  //?Effects
  useEffect(() => {
    if (doorOpen) {
      homeImageRef.current.style.transform = "scale(1.5)";
      headingRef.current.style.transform = "scale(1.5)";
    } else {
      homeImageRef.current.style.transform = "scale(1)";
      headingRef.current.style.transform = "scale(1)";
    }
  }, [doorOpen]);
  return (
    <StyledHome>
      <img className="homeImage" ref={homeImageRef} src={homeImage} alt="" />
      <div className="logo">
        <h1 ref={headingRef}>BigBasket</h1>
      </div>
      <FontAwesomeIcon
        className={`icon ${doorOpen ? "iconVisible" : ""}`}
        icon={faChevronDown}
      />
    </StyledHome>
  );
};

const StyledHome = styled.section`
  //*Custom Properties
  --transitionImage: all linear 1s;
  --transitionHeading: all linear 1s;
  --transitionIcon: all ease-in-out 1s;
  //*
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  perspective: 1000px;
  .homeImage {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    transition: var(--transitionImage);
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    h1 {
      font-size: clamp(2.5rem, 7vw, 5rem);
      color: white;
      text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
      transition: var(--transitionHeading);
    }
  }

  .icon {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: clamp(2rem, 5vw, 3rem);
    z-index: 2;
    transition: var(--transitionIcon);
    opacity: 0;
  }
  .iconVisible {
    opacity: 1;
    font-size: clamp(3rem, 7vw, 4rem);
  }
`;

export default HomeContent;
