import styled from "styled-components";

const Nav = () => {
  return <NavContainer>navbar</NavContainer>;
};

const NavContainer = styled.nav`
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-dark-1);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }

  .active {
    border-bottom: 2px solid var(--clr-primary);
    padding-bottom: 0.5rem;
    font-weight: bold;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
        list-style: none;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1.1rem;
        text-transform: uppercase;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary);
        }
      }
    }
  }

  .social img {
    width: 2rem;
    cursor: pointer;
    margin: 0.5rem;
  }

  @media (max-width: 600px) {
    .social {
      display: none;
    }
  }
`;

export default Nav;
