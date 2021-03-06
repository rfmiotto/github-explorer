import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#a8a8b3')};
    }

    svg {
      margin-left: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    filter: drop-shadow(
      -5px 5px 10px ${(props) => shade(0.5, props.theme.colors.background)}
    );
  }

  div {
    margin-left: 24px;

    strong {
      font-size: 36px;
      color: #3d3d43;
    }

    p {
      font-size: 18px;
      color: #737380;
      margin-top: 4px;
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d43;
      }

      span {
        display: block;
        margin-top: 4px;
        font-size: 18px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;
  filter: drop-shadow(
    -5px 5px 10px ${(props) => shade(0.5, props.theme.colors.background)}
  );

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;

    transition: transform 0.2s;

    &: hover {
      transform: translateX(15px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3a3a3a;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
