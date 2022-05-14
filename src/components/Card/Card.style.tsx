import styled from "styled-components";

export const Card = styled.div`
  max-width: 280px;
  padding: 0 0.5rem;
  height: 320px;
  padding: 0.5rem;
  overflow: hidden;
  position: relative;
  z-index: 99999;

  img {
    width: 100%;
    height: 100%;
    /* min-height: 200px; */
    image-rendering: -webkit-optimize-contrast;
    /* filter: brightness(0.6); */
    -ms-interpolation-mode: nearest-neighbor;
  }

  p {
    z-index: 2;
    padding: 0 5px;
    transform: none;
    transition: 0.3s ease;
  }

  &:hover {
    cursor: pointer;

    p {
      margin: 0;
      padding-bottom: 1rem;
      transform: translateY(-100%);
      transition: 0.3s ease;
    }
  }
`;
