import React from 'react';
import styled from 'styled-components';

import {SectionTitle} from '../SectionTitle/SectionTitle';
import {Button} from '../Button/Button';


const ContactBannerStyles = styled.section`

  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0;
    text-align: center;
  }
  .section-title h2 {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .section-title h2 {
      font-size: 2.8rem;
    }
  }
`;

export const ContactBanner = () => {
    return (
        <ContactBannerStyles className={'section'}>
            <div className={'container'}>
                <div className={'contactBanner__wrapper'}>
                    <SectionTitle
                        subtitleText={'Have a project in mind?'}
                        titleText={'Let me help you'}
                    />
                    <Button btnText={'Contact now'} btnLink={'/contact'}/>
                </div>

            </div>
        </ContactBannerStyles>
    );
}
