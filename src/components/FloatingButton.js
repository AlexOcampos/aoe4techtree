import styled from "styled-components";

const FloatingButton = ({ title }) => {
  return (
    <FloatingButtonContainer>
      <div className="rotate">
        <a
          href="https://forms.gle/i95wXgNzinJZQKUD6"
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
      </div>
    </FloatingButtonContainer>
  );
};

const FloatingButtonContainer = styled.button`
  background-color: var(--clr-primary-2);
  position: fixed;
  top: 41vh;
  right: 0;
  width: 30px;
  height: 80px;
  border: 0px;
  display: flex;
  border-radius: 10px 0px 0px 10px;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: var(--clr-primary-3);

    transition: background-color 0.75s ease;
  }

  .rotate {
    transform: rotate(-90deg);
  }

  a {
    text-decoration: none;
    color: var(--clr-white);
  }
`;

export default FloatingButton;
