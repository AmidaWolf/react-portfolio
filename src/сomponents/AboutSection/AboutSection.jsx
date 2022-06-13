import React from 'react';
import styled from 'styled-components';

import {TextBlock} from '../TextBlock/TextBlock';
import {SectionTitle} from '../SectionTitle/SectionTitle';
import {ButtonsGroup} from '../ButtonsGroup/ButtonsGroup';


const AboutSectionStyles = styled.section`
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .aboutSection__text {
    margin-bottom: 2rem;
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

export const AboutSection = () => {
    return (
        <AboutSectionStyles className={'section'}>
            <div className={'container'}>
                <SectionTitle
                    subtitleText={'Let me introduce myself'}
                    titleText={'About Me'}
                />
                <div className={'aboutSection__text'}>
                    <TextBlock>
                        I moved to Front-end development from another professional field
                        (Architecture and Construction engineer, management).
                        Continuing to work on the main specialty,
                        I was doing small orders as a freelancer.
                    </TextBlock>
                    <TextBlock>
                        A year later, I passed a full course advanced JS and advanced React. After that,
                        I continued to self-study and worked as a freelance web developer
                        within a team of backend developer, designer and team leader.
                    </TextBlock>
                    <TextBlock>
                        In 2022, I upgraded my skills at RS School (Typescript + React + Redux).
                        And now I'm looking for full-time job, in high priority, remote or partly remote job.
                    </TextBlock>
                </div>
                <ButtonsGroup
                    firstBtnText={'Works'}
                    firstBtnLink={'/projects'}
                    secondBtnText={'Read more'}
                    secondBtnLink={'/about'}
                    secondBtnOutline
                />
            </div>
        </AboutSectionStyles>
    );
}
