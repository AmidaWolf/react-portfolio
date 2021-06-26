import React from 'react';
import {HeroSection} from "../../сomponents/HeroSection/HeroSection";
import {AboutSection} from "../../сomponents/AboutSection/AboutSection";
import {SkillsSection} from "../../сomponents/SkillsSection/SkillsSection";
import {ProjectsSection} from "../../сomponents/ProjectsSection/ProjectsSection";
import {ContactBanner} from "../../сomponents/ContactBanner/ContactBanner";
import {Footer} from "../../сomponents/Footer/Footer";

export const HomePage = () => {
    return (
        <>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactBanner/>
            <Footer/>
        </>
    );
}
