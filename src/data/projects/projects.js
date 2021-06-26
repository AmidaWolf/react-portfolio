import {v4 as uuidv4} from 'uuid';
import monochrome from './MonoChrome App.jpg';
import workAndRelax from './Work Relax.jpg';
import culturePortal from './Culture portal.jpg';
import pik from './ПроектИнтерКлассик.jpg';
import medService from './MedService.jpg';
import portfolio from './portfolio.jpg';

export const projects = [
    {
        id: uuidv4(),
        name: 'Monochrome - social network',
        description: 'This site was created for training purposes using React with hooks and Redux.',
        img: monochrome,
        deploy: 'https://amidawolf.github.io/.react-way-of-samurai/',
        github: 'https://github.com/AmidaWolf/.react-way-of-samurai',
        tags: ['react', 'react hooks', 'redux', 'react-redux', 'formik', 'redux-thunk', 'CSS-modules', 'jest', 'gh-pages']
    },
    {
        id: uuidv4(),
        name: 'Work and Relax',
        description: 'This simple web postcard was commissioned by one of the advertising agencies. ' +
            'Pure JS/HTML/CSS with soundmanager2.',
        img: workAndRelax,
        deploy: 'https://amazing-gates-9178f3.netlify.app/',
        github: 'https://github.com/AmidaWolf/WorkAndRelax',
        tags: ['JS', 'HTML/CSS', 'soundmanager2', 'webpack']
    },
    {
        id: uuidv4(),
        name: 'ProjectInterClassic',
        description: 'Site for an architectural company. Pure JS/HTML/CSS.',
        img: pik,
        deploy: 'https://piklassik.com/',
        github: null,
        tags: ['JS', 'HTML/CSS', 'slick-slider', 'fansybox', 'gulp']
    },
    {
        id: uuidv4(),
        name: 'MedService',
        description: 'My first commercial experience. ' +
            'The easiest site, does not originally suspected a mobile version. Pure HTML/CSS.',
        img: medService,
        deploy: 'https://medservice.by/',
        github: null,
        tags: ['HTML/CSS']
    },
    {
        id: uuidv4(),
        name: 'Culture portal',
        description: 'Culture portal about Belarusian theatre directors. Final task of the RS-school. Group work.',
        img: culturePortal,
        deploy: 'https://wizardly-montalcini-24d393.netlify.com/',
        github: 'https://github.com/zzsshalik/culture-portall',
        tags: ['react', 'redux', 'react-redux', 'bootstrap', 'gatsby', 'contentful', 'netlify', 'scss']
    },
    {
        id: uuidv4(),
        name: 'Portfolio site',
        description: 'Training portfolio site. Constantly updated, constantly improved.',
        img: portfolio,
        deploy: 'https://awportfolio-site.netlify.app/',
        github: 'https://github.com/AmidaWolf/react-portfolio',
        tags: ['react', 'react hooks', 'styled-components', 'swiper', 'uuid', 'jest']
    }
]
