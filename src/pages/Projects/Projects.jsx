import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {MdSearch} from "react-icons/all";

import {SectionTitle} from "../../сomponents/SectionTitle/SectionTitle";
import {projects} from '../../data/projects/projects';
import {ProjectItem} from "../../сomponents/ProjectsSection/ProjectItem/ProjectItem";


const ProjectsPageStyles = styled.section`
padding: 10rem 0;
.projects__items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  .notFound {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
    .projects__items {
      grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    }
`;

export const ProjectsPage = () => {
    const [projectsData, setProjectsData] = useState(projects);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        if (searchText === '') return;
        setProjectsData(() =>
            projects.filter((item) => {
                    let nameAndTags = item.name + ' ' + item.tags.toString();
                    return nameAndTags.toLowerCase().match(searchText.toLowerCase());
                }
            )
        );
    }, [searchText]);

    const handleChange = (event) => {
        event.preventDefault();
        setSearchText(event.target.value);
        if (!event.target.value.length > 0) {
            setProjectsData(projects);
        }
    }

    return (
        <ProjectsPageStyles className={'projectsSection'}>
            <div className={'container'}>
                <SectionTitle
                    titleText={'Projects'}
                    subtitleText={'some of my recent works'}
                />
                <div className="projects__searchBar">
                    <form>
                        <input
                            type="text"
                            value={searchText}
                            onChange={handleChange}
                            placeholder="Project name or Tag"
                        />
                        <MdSearch className="searchIcon"/>
                    </form>
                </div>
                <div className="projects__items">
                    {
                        projectsData.length > 0 ?
                            projectsData.map((item) => (
                                <ProjectItem
                                    key={item.id}
                                    title={item.name}
                                    description={item.description}
                                    deploy={item.deploy}
                                    github={item.github}
                                    tags={item.tags}
                                    img={item.img}
                                    img2x={item.img2x}
                                    imgAvif={item.imgAvif}
                                    imgWebp={item.imgWebp}
                                />
                            ))
                            :
                            <p className={'notFound'}>Projects not found</p>
                    }
                </div>
            </div>
        </ProjectsPageStyles>
    );
}
