import React from 'react';
import styled from 'styled-components';

import {TextBlock} from '../TextBlock/TextBlock';
import {SectionTitle} from '../SectionTitle/SectionTitle';
import {Button} from "../Button/Button";
import CV from "../../assets/CV.pdf";
import avatar from "../../assets/images/avatar.jpg";


const AboutExtSectionStyles = styled.section`
    display: grid;
    grid-template-areas: 
    'title img'
    'text img'
    'btn img' 
    ;
    grid-gap: 2rem;
  
  .section-title {
    grid-area: title;
  }
  
  .about-section__text {
    margin-bottom: 2rem;
    grid-area: text;
  }
  
  .button-wrapper {
    grid-area: btn;
    justify-self: center;
  }
  
  .about-section__img {
    grid-area: img;
    align-self: center;
    max-height: 500px;
  }
  
  .about-section__img img {
    filter: grayscale(100%) brightness(65%);
    min-height: 400px;
  }
  
  .about-section__text div {
    max-width: 100%;
  }
  
  @media only screen and (max-width: 768px) {
      grid-template-areas: 
        'title'
        'img'
        'text'
        'btn' 
      ;
  .about-section__img {
      max-height: 400px;
    }
    .about-section__img img {
      min-height: auto;
      max-height: 400px;
    }
   .about-section__buttons {
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

export const AboutExtSection = () => {
    return (
        <AboutExtSectionStyles className={'about-ext-wrapper section'}>
            <SectionTitle
                subtitleText={'Hi, I am Yauhen Varapayeu'}
                titleText={'A React Web developer'}
            />
            <div className={'about-section__text'}>
                <TextBlock>
                    I moved to Front-end development from another professional field
                    (Architecture and Construction engineer, management),
                    so I got all my knowledge to start from scratch independently.
                    I got my basic knowledge of HTML/CSS at
                    the <a href={'https://htmlacademy.ru/profile/amidawolf'}
                           target={'_blank'}
                           rel={'noreferrer'}> HTML Academy</a>.
                    Continuing to work on the main specialty,
                    I was doing small orders as a freelancer.
                </TextBlock>
                <TextBlock>
                    A year later, I found out about the <a href={'http://rollingscopes.com/'}
                                                           target={'_blank'}
                                                           rel={'noreferrer'}>RS-School</a> and
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
            <Button btnLink={CV} btnText={'Download CV'} downloadText={'VarapayeuReactCV'}/>
            <div className={'about-section__img'}>
                <img src={avatar} alt="Yauhen Varapayeu"/>
            </div>
        </AboutExtSectionStyles>
    );
}
