import React from 'react';
import styled from 'styled-components';
import {SiGithub, SiHtml5, SiJavascript, SiReact, SiRedux} from "react-icons/all";

import {SectionTitle} from "../SectionTitle/SectionTitle";
import {SkillsItem} from "../SkillsItem/SkillsItem";


const SkillsSectionStyles = styled.section`

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .skillsSection__wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 10rem;
    justify-content: center;
    margin-top: 5rem;
  }
  .skills-items-wrapper {
    max-width: calc(33.3% - 10rem);
  }
  @media only screen and (max-width: 1024px) {
    .skills-items-wrapper {
      max-width: calc(50% - 7rem);
    }
    .skillsSection__wrapper {
      gap: 7rem;
    }
  }
  @media only screen and (max-width: 768px) {
  .skills-items-wrapper {
      max-width: 100%;
    }
    .skillsSection__wrapper {
      flex-direction: column;
      max-width: 300px;
      margin: 5rem auto 0;
      gap: 5rem;
    }
  }
`;

export const SkillsSection = () => {
    return (
        <SkillsSectionStyles>
            <div className={'container'}>
                <SectionTitle
                    titleText={"My Skills"}
                />
                <div className={'skillsSection__wrapper'}>
                    <SkillsItem
                        icon={<SiHtml5/>}
                        title={'HTML5/CSS3'}
                        desc={'HTML5/CSS3 with W3C and ARIA/Web Accessibility standards, ' +
                        'responsive/mobile, BEM and basic LESS/SASS.'}
                    />
                    <SkillsItem
                        icon={<SiJavascript/>}
                        title={'JavaScript'}
                        desc={'JavaScript ES6+ with async/await and etc.'}
                    />
                    <SkillsItem
                        icon={<SiGithub/>}
                        title={'Git/GitHub'}
                        desc={'Basic Git with Github/Gitlab, GitHub Flow and GitFlow strategies '}
                    />
                    <SkillsItem
                        icon={<SiReact/>}
                        title={'React'}
                        desc={'React with hooks, react-dom and react-router-dom.'}
                    />
                    <SkillsItem
                        icon={<SiRedux/>}
                        title={'Redux'}
                        desc={'Redux with react-redux and redux-thunk.'}
                    />
                </div>
            </div>
        </SkillsSectionStyles>
    );
}
