import React from 'react';
import styled from 'styled-components';

import heroImg from '../../assets/images/avatar.jpg';
import heroImg2x from '../../assets/images/avatar2x.jpg';
import heroImgAvif from '../../assets/images/avatar.avif';
import heroImgWebp from '../../assets/images/avatar.webp';
import socialMediaArrow from '../../assets/images/social-media-arrow.svg';
import scrollDownArrow from '../../assets/images/scroll-down-arrow.svg';
import {TextBlock} from '../TextBlock/TextBlock';
import {ButtonsGroup} from '../ButtonsGroup/ButtonsGroup';
import CV from '../../assets/CV.pdf';


const HeroSectionStyles = styled.section`
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 0;
    padding-bottom: 0;
    
  .hero__title {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
      position: relative;
      z-index: 1;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold',serif;
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero__photo {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
    
    img {
      filter: grayscale(100%) brightness(65%);
    }
  }
  .hero__info {
    margin-top: -22rem;
    position: relative;
    z-index: 1;
  }
  .buttons-wrapper {
    max-width: 100%;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-40px) rotate(-90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
      
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    p {
      transform: translateY(-70px) rotate(90deg);
    }
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }
        a:hover {
          color: var(--white)
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
     min-height: 750px;
     padding-top: 7rem;
      
    .hero__title {
      font-size: 1.4rem;
      margin-bottom: -5rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__photo {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export const HeroSection = () => {
    return (
        <HeroSectionStyles>
            <div className={'container'}>
                <h1 className={'hero__title'}>
                    <span>Hello, this is</span>
                    <span className={'hero__name'}>Yauhen Varapayeu</span>
                </h1>
                <div className={'hero__photo'}>
                    <picture>
                        <source type="image/avif" srcSet={heroImgAvif}/>
                        <source type="image/webp" srcSet={heroImgWebp}/>
                        <img src={heroImg} srcSet={heroImg2x} alt='Yauhen Varapayeu'/>
                    </picture>
                </div>
                <div className={'hero__info'}>
                    <TextBlock>
                        I am working as a freelance web developer for 2 years.
                        I love to get new web experience and learn something new!
                    </TextBlock>
                    <ButtonsGroup
                        firstBtnText={'See my works'}
                        firstBtnLink={'/projects'}
                        text={'or'}
                        secondBtnText={'Take my CV'}
                        secondBtnLink={CV}
                        secondBtnOutline
                        secondDwnldText={'VarapayeuReactCV'}
                    />
                </div>
                <div className={'hero__social'}>
                    <div className={'hero__social__indicator'}>
                        <p>Follow</p>
                        <img src={socialMediaArrow} alt={'social media arrow'}/>
                    </div>
                    <div className={'hero__social__text'}>
                        <ul>
                            <li>
                                <a
                                    href={'https://t.me/AmidaWolf'}
                                    target={'_blank'}
                                    rel={'noreferrer'}
                                >
                                    TG
                                </a>
                            </li>
                            <li>
                                <a
                                    href={'https://www.linkedin.com/in/evgeniy-voropaev-aw'}
                                    target={'_blank'}
                                    rel={'noreferrer'}
                                >
                                    LI
                                </a>
                            </li>
                            <li>
                                <a
                                    href={'https://github.com/AmidaWolf'}
                                    target={'_blank'}
                                    rel={'noreferrer'}
                                >
                                    GH
                                </a>
                            </li>
                            <li>
                                <a
                                    href={'https://app.rs.school/cv/47d6664e-aad2-4312-80ec-760719fd196b'}
                                    target={'_blank'}
                                    rel={'noreferrer'}
                                >
                                    RS
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={'hero__scrollDown'}>
                    <p>Scroll</p>
                    <img src={scrollDownArrow} alt={'scroll down arrow'}/>
                </div>
            </div>
        </HeroSectionStyles>
    );
}
