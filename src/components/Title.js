import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { urlStatic } from '../utils/constants'

const Title = ({ margin }) => {
  var marginTop = margin ? margin : '4rem'
  var marginBottom = margin ? margin : '4rem'
  console.log(`marginTop: ${marginTop}`)
  return (
    <TitleContainer
      style={{
        marginTop: marginTop,
        marginBottom: marginBottom,
        backgroundImage: `url("${urlStatic}/title-bg.jpg")`,
      }}
    >
      <div className='container'>
        <Link to='/'>
          <div className='title-line'></div>
          <h1>AoE4 Tech Tree (will disappear on Oct 27, 2022)</h1>
          <div className='title-line'></div>
        </Link>
      </div>
    </TitleContainer>
  )
}

const TitleContainer = styled.nav`
  width: 100vw;
  height: 8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  background-repeat: no-repeat;
  background-size: 100%;

  a {
    text-decoration: none;
    color: white;
  }
  h1 {
    font-size: 2.2rem;
  }

  .title-line {
    height: 16px;
    background: rgb(96, 75, 46);
    background: linear-gradient(
      90deg,
      rgba(96, 75, 46, 1) 0%,
      rgba(208, 159, 30, 1) 50%,
      rgba(96, 75, 46, 1) 100%
    );
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 1.7rem;
    }

    .title-line {
      height: 12px;
    }

    height: 6rem;
  }

  @media (max-width: 880px) {
    h1 {
      font-size: 1.2rem;
    }

    height: 3.7rem;

    .title-line {
      height: 10px;
    }
  }

  @media (max-width: 600px) {
    height: 2.7rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

    h1 {
      font-size: 1.5rem;
      margin: 0;
    }

    .title-line {
      height: 8px;
    }
  }
`

export default Title
