import React from 'react';
import styled from 'styled-components';


const ProjectItemStyles = styled.div`
a {
    border-bottom: 2px solid var(--white);
    overflow-wrap: break-word;
  }
a:hover{
    color: var(--white);
    border-bottom: 2px solid var(--white);
  }

.projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    margin-bottom: 1rem;
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
    margin-bottom: 1rem;
  }
  .projectItem__title {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }
  .projectItem__desc, .projectItem__git {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular',serif;
    margin-bottom: 2rem;
  }
  .projectItem__tags {
    margin-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
  }
  .tags__item {
    margin-right: 1rem;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-family: 'RobotoMono Regular',serif;
    padding: 0.4em;
    border: 1px solid var(--white);
    border-radius: 0.7em;
  }
  .tags__item:hover {
    background-color: var(--gray-2);
  }
  
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

const placeholderImgSrc = 'https://via.placeholder.com/1366x643.png?text=Site+Image+placeholder';
const placeholderImgSrc2x = 'https://via.placeholder.com/1366x643.png?text=Site+Image+placeholder+2x';
const placeholderImgSrcWebp = 'https://via.placeholder.com/1366x643.png?text=Site+Image+placeholder+WebP';
const placeholderImgSrcAvif = 'https://via.placeholder.com/1366x643.png?text=Site+Image+placeholder+Avif';

export const ProjectItem = ({
                                img = placeholderImgSrc,
                                imgAvif = placeholderImgSrcAvif,
                                imgWebp = placeholderImgSrcWebp,
                                img2x = placeholderImgSrc2x,
                                title = 'Project Name.',
                                description = 'Project desription.',
                                deploy = 'Project deploy.',
                                github = 'Project source.',
                                tags = ['Just tag', 'Another tag']
                            }) => {
    return (
        <ProjectItemStyles>
            <div className={'projectItem__img'}>
                <picture>
                    <source type="image/avif" srcSet={imgAvif}/>
                    <source type="image/webp" srcSet={imgWebp}/>
                    <img src={img} srcSet={img2x} alt={title}/>
                </picture>
            </div>
            <div className={'projectItem__info'}>
                <h3 className={'projectItem__title'}>
                    {
                        !deploy || deploy.length === 0 ?
                            <span>{title} with local deploy</span> :
                            <a
                                href={deploy}
                                target={'_blank'}
                                rel={'noreferrer'}
                            >
                                {title}
                            </a>
                    }
                </h3>
                <p className={'projectItem__desc'}>{description}</p>
                <p className={'projectItem__git'}>
                    Source code: {
                    !github || github.length === 0 ?
                        <span>upon request</span> :
                        <a
                            href={github}
                            target={'_blank'}
                            rel={'noreferrer'}
                        >{github}</a>
                }

                </p>
                {
                    tags.length === 1 ?
                        <div className={'projectItem__tags'}>
                            <p className={'tags__item'}>{tags[0]}</p>
                        </div> :
                        <ul className={'projectItem__tags'}>
                            {
                                tags.map((tagItem) => {
                                    return (
                                        <li className={'tags__item'} key={tagItem}>{tagItem}</li>
                                    )
                                })
                            }
                        </ul>
                }
            </div>
        </ProjectItemStyles>
    );
}
