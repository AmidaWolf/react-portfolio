import React from 'react';
import styled from 'styled-components';

import {SectionTitle} from "../SectionTitle/SectionTitle";


const SkillsSectionStyles = styled.section`
padding: 7rem 0;
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }

  .aboutSection__buttons {
    display: flex;
    justify-content: space-between;
    max-width: 500px;
    width: 100%;
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .aboutSection__text div {
    max-width: 100%;
  }
  
  @media only screen and (max-width: 768px) {
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export const SkillsSection = () => {
    return (
        <SkillsSectionStyles>
            <div className={'container'}>
                <SectionTitle
                    titleText="My Skills"
                />
                <div className={'SkillsSection__wrapper'}>

                </div>
            </div>
        </SkillsSectionStyles>
    );
}
