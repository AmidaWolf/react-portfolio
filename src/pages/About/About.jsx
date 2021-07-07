import React from 'react';
import styled from 'styled-components';

import {Footer} from "../../сomponents/Footer/Footer";
import {AboutExtSection} from "../../сomponents/AboutExtSection/AboutExtSection";
import {SectionTitle} from "../../сomponents/SectionTitle/SectionTitle";
import {InfoItem} from "../../сomponents/InfoItem/InfoItem";
import {experiences} from '../../data/experiences/experiences';
import {Timeline, TimelineItem} from 'vertical-timeline-component-for-react';


const AboutPageStyles = styled.div`
padding: 10rem 0 10rem 0;  
  .section-title p {
    font-size: 2.2rem;
  }
  .section-title h2 {
    font-size: 3.6rem;
  }
  .text-block {
    margin: 0;
  }
  .info__title {
    margin-bottom: 4rem;
    padding-top: 4rem;
    font-size: 3rem;
    text-transform: uppercase;
  }
  .entry:last-child .body{
    margin-bottom: 0;
  }
  
  .body-container {
    padding: 2rem;
    background-color: var(--deep-dark);
    top: -12px;
  }
  .title::before {
    z-index: 1;
  }
  .timeline__title {
    font-size: 2.5rem;
    padding-bottom: 2rem;
  }
  .timeline__subtitle {
    font-size: 2rem;
    padding-bottom: 2rem;
  }
  .timeline__text {
    font-size: 1.8rem;
  }
  
  .timeline-item-date {
    background: none;
  }
  
   @media only screen and (max-width: 768px) {
        padding: 10rem 0;
        .section-title p {
          font-size: 1.8rem;
        }
        .section-title h2 {
          font-size: 2.8rem;
        }
        .info__title {
          font-size: 3rem;
        }
        
        .about-ext {
          padding-bottom: 0;
        }
        .timeline__title {
        font-size: 2rem;
        padding-bottom: 1rem;
      }
      .timeline__subtitle {
        font-size: 1.8rem;
        padding-bottom: 1rem;
      }
      .timeline__text {
        font-size: 1.4rem;
      }
      .timeline-item-date {
        width: 110%;
        font-size: 1.4rem;
      }
  }
`;

export const AboutPage = () => {
    return (
        <>
            <AboutPageStyles className={'container'}>
                <AboutExtSection/>
                <section className={'skills-experience section'}>
                    <SectionTitle
                        subtitleText={'Something about my'}
                        titleText={'Professional background'}
                    />
                    <div className={"skills"}>
                        <h3 className={"info__title"}>Skills:</h3>
                        <InfoItem
                            title={"Frontend"}
                            items={['HTML5', 'CSS3', 'JavaScript', 'REACT with hooks', 'REDUX', 'Webpack/Gulp']}
                        />
                        <InfoItem
                            title={"OS and tools"}
                            items={['Windows', 'Ubuntu/Mint', 'WebStorm', 'Git/Github/Gitlab', 'Figma', 'Photoshop']}
                        />
                        <InfoItem
                            title={"Languages"}
                            items={['English - A2', 'Russian - native', 'Belarusian - native',]}
                        />
                    </div>
                    <div className={"experience"}>
                        <h3 className={"info__title"}>Experiences:</h3>
                        <div className={'timeline-wrapper'}>
                            <Timeline lineColor={'var(--deep-dark)'}>
                                {experiences.map((item, index) => (
                                    <TimelineItem
                                        key={'00'+index+1}
                                        dateText={item.date}
                                        dateInnerStyle={{
                                            background: 'var(--deep-dark)',
                                            color: 'var(--gray-1)'
                                        }}
                                    >
                                        <h3 className={'timeline__title'}>{item.cardTitle}</h3>
                                        <p className={'timeline__subtitle'}>{item.cardSubtitle}</p>
                                        <p className={'timeline__text'}>{item.cardText}</p>
                                    </TimelineItem>
                                ))}
                            </Timeline>
                        </div>
                    </div>
                </section>
            </AboutPageStyles>
            <Footer/>
        </>

    );
}
