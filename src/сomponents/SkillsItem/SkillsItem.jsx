import React from 'react';
import styled from 'styled-components';
import {SiReact} from 'react-icons/all';

import {TextBlock} from '../TextBlock/TextBlock';


const SkillsItemStyle = styled.div`
text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold',serif;
  }
  .para {
    margin-top: 2rem;
  }
`;

export const SkillsItem = ({
                               icon = <SiReact/>,
                               title = 'React',
                               desc = 'This is React description',
                           }) => {
    return (
        <SkillsItemStyle className={'skills-items-wrapper'}>
            <div className={'servicesItem__icon'}>{icon}</div>
            <div className={'servicesItem__title'}>{title}</div>
            <TextBlock>{desc}</TextBlock>
        </SkillsItemStyle>
    );
}
