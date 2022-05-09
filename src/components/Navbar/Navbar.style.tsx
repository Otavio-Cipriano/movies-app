import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  padding: 1rem;
  font-weight: bold;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      margin: 0;
      display: inline;
      padding: 1rem;

      a {
        text-decoration: none;
        color: inherit;

        :hover {
          color: blue;
        }
      }
    }
  }

  .logo {
    display: inline;
    margin-right: auto;
  }
`;
