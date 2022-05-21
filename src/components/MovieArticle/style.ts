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
    padding: 1.5rem 0;
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
    font-size: 3rem;
    background: rgba(0,0,0,0.7);
    /* padding: 0.5rem 0.5rem 0rem 0.5rem; */
    /* border-radius: 50%; */
    width: 55px;
    height: 100%;
    top: 0;
    display: grid;
    place-items: center;
  }

  .btn-left {
    left: 0;
  }

  .btn-right {
    right: 0;
  }
`;
