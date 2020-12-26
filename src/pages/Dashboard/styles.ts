import styled, { css } from 'styled-components';
import { shade, lighten } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.colors.text};
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700;

  display: flex;
  filter: drop-shadow(
    -5px 5px 10px ${(props) => (props.theme.title === 'light' ? shade(0.5, props.theme.colors.background) : lighten(0.5, props.theme.colors.background))}
  );

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    color: ${(props) => props.theme.colors.inputText};
    border: 2px solid #fff;
    border-right: 0;

    &::placeholder {
      color: #a8a8b3;
    }

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}
  }

  button {
    width: 210px;
    height: 70px;
    border: 0;
    border-radius: 0 5px 5px 0;
    background: #04d361;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: ${(props) => props.theme.colors.primary};
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    filter: drop-shadow(
      -5px 5px 10px ${(props) => shade(0.5, props.theme.colors.background)}
    );

    transition: transform 0.2s;

    &: hover {
      transform: translateX(15px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
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
