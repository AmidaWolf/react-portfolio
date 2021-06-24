import React from 'react';
import styled from 'styled-components';


const SectionTitleStyles = styled.div`
text-align: center;

  p {
    font-family: 'RobotoMono Regular',serif;
    font-size: 2rem;
  }
  
  h2 {
    font-family: 'Montserrat Bold',serif;
    font-size: 6rem;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    p {
      font-size: 1.2rem;
    }
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export const SectionTitle = ({
                                 subtitleText,
                                 titleText = 'title'
                             }) => {
    return (
        <SectionTitleStyles className="section-title">
            {
                subtitleText ? <p>{subtitleText}</p> : null
            }
            <h2>{titleText}</h2>
        </SectionTitleStyles>
    );
}
