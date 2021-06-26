import React from 'react';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, A11y} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import {
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
} from 'react-icons/all';

import {SectionTitle} from '../SectionTitle/SectionTitle';
import {projects} from '../../data/projects/projects';
import {ProjectItem} from './ProjectItem/ProjectItem';


const ProjectsSectionStyles = styled.section`
  .projects__allItems {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    max-width: 100%;
  }
  .custom-controls {
    display: flex;
    justify-content: end;
    margin-bottom: -2rem;
  }
  
  .custom-next,
  .custom-prev {
    color: var(--gray-1);
    margin-left: 1rem;
    cursor: pointer;
  }
  
  .custom-next svg,
  .custom-prev svg {
    height: 50px;
    width: 50px;
    background: var(--deep-dark);
    border-radius: 8px;
  }
  
  .custom-next svg:hover,
  .custom-prev svg:hover {
    background-color: var(--gray-2);
  }  
  
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 7rem auto 0;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;

SwiperCore.use([Navigation, A11y]);

export const ProjectsSection = () => {
    return (
        <ProjectsSectionStyles>
            <div className={'container'}>
                <SectionTitle
                    subtitleText={'Some of my recent works'}
                    titleText={'Projects'}
                />
                <div className={'projects__allItems'}>
                    <div className={'custom-controls'}>
                        <div className={'custom-prev'} role={'button'}><MdKeyboardArrowLeft/></div>
                        <div className={'custom-next'} role={'button'}><MdKeyboardArrowRight/></div>
                    </div>

                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev'
                        }}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                            },
                            // when window width is >= 1200px
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                    >

                        {projects.map((project) => {
                            return (
                                <SwiperSlide key={project.id}>
                                    <ProjectItem
                                        title={project.name}
                                        img={project.img}
                                        description={project.description}
                                        deploy={project.deploy}
                                        github={project.github}
                                        tags={project.tags}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>

            </div>
        </ProjectsSectionStyles>
    );
}
