import React from 'react';
import styled from 'styled-components';
import {Button} from '../Button/Button';


const ButtonsGroupStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;
  gap: 2rem;
  
  p {
    font-size: 2rem;
  }
    
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    
    p {
      margin-top: 1em;
    }
      
    .button-wrapper,
       a {
         margin-top: 1em;
         width: 100%;
         text-align: center;
       }
  }
`;

export const ButtonsGroup = ({
                                 firstBtnText = 'test1',
                                 firstBtnLink = '/',
                                 firstBtnOutline = false,
                                 firstDwnldText = false,
                                 text,
                                 secondBtnText = 'test2',
                                 secondBtnLink = '/',
                                 secondBtnOutline = false,
                                 secondDwnldText = false,
                             }) => {
    return (
        <ButtonsGroupStyle className={'buttons-wrapper'}>
            <Button
                btnLink={firstBtnLink}
                btnText={firstBtnText}
                outline={firstBtnOutline}
                downloadText={firstDwnldText}
            />
            {
                text ? <p>{text}</p> : null
            }
            <Button
                btnLink={secondBtnLink}
                btnText={secondBtnText}
                outline={secondBtnOutline}
                downloadText={secondDwnldText}
            />
        </ButtonsGroupStyle>
    );
}
