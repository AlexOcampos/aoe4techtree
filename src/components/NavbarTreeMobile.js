import styled from "styled-components";
import { BiBook, BiInfoCircle } from "react-icons/bi";
import { useItemDetailContext } from "../context/itemdetail_context";

const NavbarTreeMobile = () => {
  const { updateItemNavbarTreeMobile, navbarTreeMobileSelected } =
    useItemDetailContext();

  return (
    <NavbarTreeMobileContainer>
      <div
        className={`item-navbar ${
          navbarTreeMobileSelected === 1 ? "selected" : ""
        }`}
        onClick={() => updateItemNavbarTreeMobile(1)}
      >
        <BiInfoCircle />
      </div>
      <div
        className={`item-navbar ${
          navbarTreeMobileSelected === 2 ? "selected" : ""
        }`}
        onClick={() => updateItemNavbarTreeMobile(2)}
      >
        <BiBook />
      </div>
    </NavbarTreeMobileContainer>
  );
};

const NavbarTreeMobileContainer = styled.nav`
  height: 8vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .item-navbar {
    margin: 0;
    height: 8vh;
    width: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .selected {
    background: linear-gradient(
      90deg,
      rgba(12, 91, 127, 0) 0%,
      #0d77a8 51.04%,
      rgba(12, 91, 127, 0) 100%
    );
  }

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export default NavbarTreeMobile;
