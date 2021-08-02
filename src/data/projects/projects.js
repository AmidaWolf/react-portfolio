import {v4 as uuidv4} from 'uuid';
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
        description: 'Culture portal about Belarusian theatre directors. Final task of the RS-school. Group work.',
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
    }
]
