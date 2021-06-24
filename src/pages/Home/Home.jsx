import React from 'react';
import {HeroSection} from "../../сomponents/HeroSection/HeroSection";
import {AboutSection} from "../../сomponents/AboutSection/AboutSection";
import {SkillsSection} from "../../сomponents/SkillsSection/SkillsSection";

export const HomePage = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
        </>
    );
}
