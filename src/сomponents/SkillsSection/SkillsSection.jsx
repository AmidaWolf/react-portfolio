import React from 'react';
import styled from 'styled-components';

import {SectionTitle} from "../SectionTitle/SectionTitle";


const SkillsSectionStyles = styled.section`

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
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
