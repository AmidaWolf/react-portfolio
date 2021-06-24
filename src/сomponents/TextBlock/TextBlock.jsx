import React from 'react';
import styled from 'styled-components';


const TextBlockStyle = styled.div`
  max-width: 500px;
  margin: 2rem auto 0 auto;
  font-size: 1.8rem;
  line-height: 1.5em;
  width: 100%;
  p a{
    border-bottom: 2px solid var(--gray-1);
  }
  
  p a:hover{
    color: var(--white);
    border-bottom: 2px solid var(--white);
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const TextBlock = ({children = 'text'}) => {
    return (
        <TextBlockStyle>
            <p>{children}</p>
        </TextBlockStyle>
    );
}
