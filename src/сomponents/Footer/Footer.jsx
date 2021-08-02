import React from 'react';
import styled from 'styled-components';

import {TextBlock} from '../TextBlock/TextBlock';
import {FooterCol} from './FooterCol/FooterCol';


const FooterStyles = styled.footer`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer-col1__title {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export const Footer = () => {
    return (
        <FooterStyles>
            <div className={'container'}>
                <div className={'footer-col1'}>
                    <h1 className={'footer-col1__title'}>Yauhen Varapayeu</h1>
                    <TextBlock>
                        A freelance web developer from Mogilev, Belarus.
                        Write to&nbsp;me&nbsp;and&nbsp;I will try to&nbsp;make your dreams come true.
                        On&nbsp;the web, of&nbsp;course&nbsp;:)
                    </TextBlock>
                </div>
                <div className={'footer-col2'}>
                    <FooterCol
                        mainTitle={'Important Links'}
                        links={[
                            {
                                title: 'Home',
                                path: '/',
                                type: 'Link',
                            },
                            {
                                type: 'Link',
                                title: 'About',
                                path: '/about',
                            },
                            {
                                type: 'Link',
                                title: 'Projects',
                                path: '/projects',
                            },
                            {
                                type: 'Link',
                                title: 'Contact',
                                path: '/contact',
                            },
                        ]}
                    />
                </div>
                <div className={'footer__col3'}>
                    <FooterCol
                        mainTitle={'Contact Info'}
                        links={[
                            {
                                title: '+375 44 7008632',
                                path: 'tel:+375 44 7008632',
                            },
                            {
                                title: 'amidawolf@gmail.com',
                                path: 'mailto:amidawolf@gmail.com',
                            }
                        ]}
                    />
                </div>
                <div className={'footer__col4'}>
                    <FooterCol
                        mainTitle={'Social Links'}
                        links={[
                            {
                                title: 'Telegram',
                                path: 'https://t.me/AmidaWolf',
                            },
                            {
                                title: 'LinkedIn',
                                path: 'https://www.linkedin.com/in/evgeniy-voropaev-aw',
                            },
                            {
                                title: 'GitHub',
                                path: 'https://github.com/AmidaWolf',
                            },
                        ]}
                    />
                </div>
            </div>
            <div className={'copyright'}>
                <div className={'container'}>
                    <TextBlock>
                        2021&nbsp;&mdash; Yauhen Varapayeu&nbsp;&copy;&nbsp;|&nbsp;
                        <a target='_blank' rel='noreferrer' href='https://awportfolio-site.netlify.app/'>
                            AmidaWolf
                        </a>
                    </TextBlock>
                </div>

            </div>
        </FooterStyles>
    );
}
