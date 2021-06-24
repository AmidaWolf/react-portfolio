import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";


const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
    props.outline ? 'transparent' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? 'var(--gray-1)' : 'black')};
  }
  .button:hover {
    background-color: ${(props) => 
    props.outline ? 'var(--gray-1)' : 'var(--gray-2)'};
    color: ${(props) => (props.outline ? 'var(--black)' : 'var(--gray-1)')};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export const Button = ({
                           btnText = 'test',
                           btnLink = 'test',
                           outline = false,
                       }) => {
    return (
        <ButtonStyle outline={outline} className="button-wrapper">
            <Link className="button" to={btnLink}>{btnText}</Link>
        </ButtonStyle>
    );
}
