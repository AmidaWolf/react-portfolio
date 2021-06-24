import React from 'react';
import styled from 'styled-components';

import {Button} from "../Button/Button";
import {TextBlock} from "../TextBlock/TextBlock";
import {SectionTitle} from "../SectionTitle/SectionTitle";


const AboutSectionStyles = styled.section`
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

export const AboutSection = () => {
    return (
        <AboutSectionStyles>
            <div className={'container'}>
                <SectionTitle
                    subtitleText="Let me introduce myself"
                    titleText="About Me"
                />
                <div className={'aboutSection__text'}>
                    <TextBlock>
                        I moved to Front-end development from another professional field
                        (Architecture and Construction engineer, management),
                        so I got all my knowledge to start from scratch independently.
                        I got my basic knowledge of HTML/CSS at
                        the <a href="https://htmlacademy.ru/profile/amidawolf" target="_blank"
                               rel="noreferrer"> HTML Academy</a>.
                        Continuing to work on the main specialty,
                        I was doing small orders as a freelancer.
                    </TextBlock>
                    <TextBlock>
                        A year later, I found out about the <a href="http://rollingscopes.com/" target="_blank"
                                                               rel="noreferrer">RS-School</a> and
                        passed a full course (advanced JS, advanced React). After that,
                        I continued to self-study and fulfill orders for freelancing.
                        I am constantly looking for new knowledge,
                        strive for development and get great pleasure from it.
                    </TextBlock>
                    <TextBlock>
                        I have a portfolio of educational projects,
                        several commercial sites and my own portfolio site (you are here now).
                        Right now I plan to start working full time on the frontend only.
                        A total reboot of career and life, something like that.
                    </TextBlock>
                </div>

                <div className="aboutSection__buttons">
                    <Button btnText="Works" btnLink="/projects" />
                    <Button btnText="Read More" btnLink="/about" outline />
                </div>
            </div>
        </AboutSectionStyles>
    );
}
