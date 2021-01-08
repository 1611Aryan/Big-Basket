import styled from "styled-components";
import { useRef } from "react";
import handle from "./../img/handle.png";

const Doors = ({ doorOpen, setDoorOpen }) => {
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const openSeasame = () => {
    if (!doorOpen) {
      leftDoorRef.current.style.transform = "rotateY(-90deg)";
      rightDoorRef.current.style.transform = "rotateY(90deg)";
    } else {
      leftDoorRef.current.style.transform = "rotateY(0deg)";
      rightDoorRef.current.style.transform = "rotateY(0deg)";
    }
    setDoorOpen(!doorOpen);
  };
  return (
    <StyledDoor onClick={openSeasame}>
      <div className="door" ref={leftDoorRef}>
        <img src={handle} alt="" />
      </div>
      <div className="door rightDoor" ref={rightDoorRef}>
        <img src={handle} alt="" />
      </div>
    </StyledDoor>
  );
};

const StyledDoor = styled.div`
  --border: 2px solid white;
  --transitionImage: all linear 1s;
  --transitionDoor: all ease-in-out 1.3s;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .door {
    transform-style: preserve-3d;
    transform-origin: left;
    transition: var(--transitionDoor);
    width: 50%;
    height: 100%;
    border-right: var(--border);
    background: rgba(201, 201, 201, 0.3);
    backdrop-filter: blur(5px);
    z-index: 5;
    img {
      position: absolute;
      top: 50%;
      right: 2rem;
      transform: translateY(-50%);
    }
  }
  .rightDoor {
    transform-origin: right;
    border: none;
    border-left: var(--border);
    img {
      left: 2rem;
    }
  }
`;
export default Doors;
