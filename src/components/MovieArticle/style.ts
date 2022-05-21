import styled from "styled-components";

type Group = { group: number };

export const Car = styled.div<Group>`
  position: relative;
  overflow: hidden;

  .list-container {
    padding: 0 2.8rem;
  }
  .list {
    display: flex;
    gap: 0.8rem;
    padding: 0;
    position: relative;
    z-index: 0;
    transform: ${(props) =>
      props.group ? `translateX(calc(-${100 * props.group}%))` : ""};
  }

  .btn {
    position: absolute;
    top: 40%;
    z-index: 999;
    color: white;
    font-size: 4rem;
    
    /* padding: 0.5rem 0.5rem 0rem 0.5rem; */
    /* border-radius: 50%; */
    width:  10%;
    max-width: 70px;
    height: 100%;
    top: 0;
    display: grid;
    place-items: center;
    backdrop-filter: blur(2px);
    svg:hover {
      transform: scale(1.15);
      cursor: pointer;
    }
  }

  .btn-left {
    left: 0;
    background: linear-gradient(to right, rgba(0,0,0,0.7) 60%, transparent);
  }

  .btn-right {
    right: 0;
    background: linear-gradient(to left, rgba(0,0,0,0.7) 60%, transparent);
  }
`;
