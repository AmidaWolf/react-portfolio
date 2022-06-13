import {v4 as uuidv4} from 'uuid';
import pma from './pma small.jpg';
import pma2x from './pma small2x.jpg';
import pmaWebp from './pma small.webp';
import pmaAvif from './pma small.avif';
import rslang from './rslang small.jpg';
import rslang2x from './rslang small2x.jpg';
import rslangWebp from './rslang small.webp';
import rslangAvif from './rslang small.avif';
import jjit from './jjit.jpg';
import jjit2x from './jjit small2x.jpg';
import jjitWebp from './jjit small.webp';
import jjitAvif from './jjit small.avif';
import monochrome from './MonoChrome small.jpg';
import monochrome2x from './MonoChrome small2x.jpg';
import monochromeWebp from './MonoChrome small.webp';
import monochromeAvif from './MonoChrome small.avif';
import workAndRelax from './Work Relax small.jpg';
import workAndRelax2x from './Work Relax small2x.jpg';
import workAndRelaxWebp from './Work Relax small.webp';
import workAndRelaxAvif from './Work Relax small.avif';
import culturePortal from './Culture portal small.jpg';
import culturePortal2x from './Culture portal small2x.jpg';
import culturePortalWebp from './Culture portal small.webp';
import culturePortalAvif from './Culture portal small.avif';
import pik from './ПроектИнтерКлассик small.jpg';
import pik2x from './ПроектИнтерКлассик small2x.jpg';
import pikWebp from './ПроектИнтерКлассик small.webp';
import pikAvif from './ПроектИнтерКлассик small.avif';
import medService from './MedService small.jpg';
import medService2x from './MedService small2x.jpg';
import medServiceWebp from './MedService small.webp';
import medServiceAvif from './MedService small.avif';
import portfolio from './portfolio small.jpg';
import portfolio2x from './portfolio small2x.jpg';
import portfolioWebp from './portfolio small.webp';
import portfolioAvif from './portfolio small.avif';

export const projects = [
    {
        id: uuidv4(),
        name: 'PMA - project management app',
        description: 'Basic Trello-clone app with auth. Final task of the RSSchool (React). Group work as a lead developer. ',
        img: pma,
        img2x: pma2x,
        imgWebp: pmaWebp,
        imgAvif: pmaAvif,
        deploy: 'https://pma-team38.netlify.app/',
        github: 'https://github.com/Tianika/project-management-app/tree/develop',
        tags: ['react', 'redux', 'react-redux', 'redux toolkit', 'axios', 'i18next', 'styled components', 'react-hook-form', 'beautiful-dnd', 'netlify']
    },
    {
        id: uuidv4(),
        name: 'RSLang - web app for learning english',
        description: 'Learn 3.600 basic english words with auth, personal dictionary, minigames and statistic. Final task of the RSSchool (JavaScript/Frontend). Group work as a team lead.',
        img: rslang,
        img2x: rslang2x,
        imgWebp: rslangWebp,
        imgAvif: rslangAvif,
        deploy: 'https://rslang-amidawolf.netlify.app/',
        github: 'https://github.com/AmidaWolf/rslang',
        tags: ['JS', 'TypeScript', 'SCSS', 'webpack', 'netlify']
    },
    {
        id: uuidv4(),
        name: 'Work and Relax',
        description: 'This simple web postcard was commissioned by one of the advertising agencies. ' +
            'Pure JS/HTML/CSS with soundmanager2.',
        img: workAndRelax,
        img2x: workAndRelax2x,
        imgWebp: workAndRelaxWebp,
        imgAvif: workAndRelaxAvif,
        deploy: 'https://amazing-gates-9178f3.netlify.app/',
        github: 'https://github.com/AmidaWolf/WorkAndRelax',
        tags: ['JS', 'HTML/CSS', 'soundmanager2', 'webpack']
    },
    {
        id: uuidv4(),
        name: 'ProjectInterClassic',
        description: 'Site for an architectural company. Pure JS/HTML/CSS.',
        img: pik,
        img2x: pik2x,
        imgWebp: pikWebp,
        imgAvif: pikAvif,
        deploy: 'https://piklassik.com/',
        github: null,
        tags: ['JS', 'HTML/CSS', 'slick-slider', 'fansybox', 'gulp']
    },
    {
        id: uuidv4(),
        name: 'JJIT',
        description: 'justjoin.it basic clone with alternative functions and frontend. Pure JS/HTML/CSS. Only local run (read README.md in repo). Group weekend-project with backend-engineer. ',
        img: jjit,
        img2x: jjit2x,
        imgWebp: jjitWebp,
        imgAvif: jjitAvif,
        deploy: null,
        github: 'https://github.com/ArchiKeV/jjit',
        tags: ['JS', 'HTML/CSS']
    },
    {
        id: uuidv4(),
        name: 'MedService',
        description: 'My first commercial experience. ' +
            'The easiest site, does not originally suspected a mobile version. Pure HTML/CSS.',
        img: medService,
        img2x: medService2x,
        imgWebp: medServiceWebp,
        imgAvif: medServiceAvif,
        deploy: 'https://medservice.by/',
        github: null,
        tags: ['HTML/CSS']
    },
    {
        id: uuidv4(),
        name: 'Culture portal',
        description: 'Culture portal about Belarusian theatre directors. Final task of the RSSchool (Javascript/React). Group work.',
        img: culturePortal,
        img2x: culturePortal2x,
        imgWebp: culturePortalWebp,
        imgAvif: culturePortalAvif,
        deploy: 'https://wizardly-montalcini-24d393.netlify.com/',
        github: 'https://github.com/zzsshalik/culture-portall',
        tags: ['react', 'redux', 'react-redux', 'bootstrap', 'gatsby', 'contentful', 'netlify', 'scss']
    },
    {
        id: uuidv4(),
        name: 'Portfolio site',
        description: 'Training portfolio site. Constantly updated, constantly improved.',
        img: portfolio,
        img2x: portfolio2x,
        imgWebp: portfolioWebp,
        imgAvif: portfolioAvif,
        deploy: 'https://awportfolio-site.netlify.app/',
        github: 'https://github.com/AmidaWolf/react-portfolio',
        tags: ['react', 'react hooks', 'styled-components', 'swiper', 'uuid', 'jest']
    },
    {
        id: uuidv4(),
        name: 'Monochrome - social network',
        description: 'This site was created for training purposes using React with hooks and Redux.',
        img: monochrome,
        img2x: monochrome2x,
        imgWebp: monochromeWebp,
        imgAvif: monochromeAvif,
        deploy: 'https://amidawolf.github.io/.react-way-of-samurai/',
        github: 'https://github.com/AmidaWolf/.react-way-of-samurai',
        tags: ['react', 'react hooks', 'redux', 'react-redux', 'formik', 'redux-thunk', 'CSS-modules', 'jest', 'gh-pages']
    },
]
