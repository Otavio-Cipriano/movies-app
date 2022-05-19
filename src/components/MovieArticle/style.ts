import styled from "styled-components";


type Group = { group: number };


export const Car = styled.div<Group>`
  position: relative;
  overflow: hidden;

  .list-container {
    overflow-x: scroll;
    padding: 0 3rem;
  }
  .list {
    display: flex;
    padding: 1rem 0;
    position: relative;
    z-index: 0;
    transform: ${(props) =>
      props.group ? `translateX(calc(-${100 * props.group}%))` : ""};
  }

  .btn {
    position: absolute;
    top: 50%;
    z-index: 999;
    color: green;
    font-size: 2.5rem;
    background: blue;
    border-radius: 50%;
  }

  .btn-left {
    left: 0;
  }

  .btn-right {
    right: 0;
  }
`;
