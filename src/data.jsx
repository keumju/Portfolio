import festival from '../public/assets/대한민국밤산책.mp4'
import site from '../public/assets/web.png'
import figma from '../public/assets/figma.png'
import git from '../public/assets/git2.png'

export const headerNav = [{
        title: "ABOUT",
        url: "#ABOUT"
    },{
        title: "PROJECT",
        url: "#PROJECT"
    },
    // {
    //     title: "TOY",
    //     url: "#TOY"
    // },
    {
        title: "CLONE",
        url: "#CLONE"
    }
];

export const projectDatas = [{
    class: 'Festival',
    siteName: 'FESTIVAL SITE',
    teamName: '대한민국 밤산책',
    text: '경복궁 별빛야행 축제를 소개하고 홍보하는 웹 사이트 입니다. 게시판 페이지와 마이페이지 제작을 담당하였으며, React, MySQL을 사용하여 제작하였습니다.',
    date: '2024.01.01 ~ 2024.02.01',
    bgImg: 'assets/festival.avif',
    video: festival,
    btn1: 'go site',
    btn1Img: site,
    btn1Link: 'https://keumju.github.io/bandifesta/',
    btn2: 'figma',
    btn2Img: figma,
    btn2Link: 'https://www.figma.com/design/4hKjaZEbRsl1pGeaUSQKjY/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD-%EB%B0%A4%EC%82%B0%EC%B1%85?node-id=0-1&m=dev&t=WdWtFrFXJUalo6Vu-1',
    btn3: 'github',
    btn3Img: git,
    btn3Link: 'https://github.com/keumju/bandifesta.git'
}, {
    class: 'Gcova',
    siteName: 'GCOVA SITE RENEWAL',
    teamName: '지코바 사이트 리뉴얼 (개인)',
    text: '지코바 치킨 브랜드의 홈페이지를 리뉴얼한 웹 사이트입니다. 개인프로젝트로 진행하였으며, HTML, CSS, JavaScript를 사용하여 제작하였습니다.',
    date: '2024.01.01 ~ 2024.02.01',
    bgImg: 'assets/gcova.jpg',
    video: 'assets/festival.avif',
    btn1: 'go site',
    btn1Img: site,
    btn1Link: 'https://keumju.github.io/gcova_renewal/',
    btn2: 'figma',
    btn2Img: figma,
    btn2Link: 'https://www.figma.com/design/FvEC1kUoUrefm3llM6to8z/%EC%A7%80%EC%BD%94%EB%B0%94?node-id=0-1&m=dev&t=CuAFDPH6ffkEidxB-1',
    btn3: 'github',
    btn3Img: git,
    btn3Link: 'https://github.com/keumju/gcova_renewal.git'
}, {
    class: 'Front',
    siteName: 'FRONTEND DICTIONARY',
    teamName: '프론트엔드사전 (개인)',
    text: '프론트엔드에서 사용되는 단어들을 쉽게 찾을 수 있도록 제작한 사전입니다. 개인프로젝트로 진행하였으며, React를 사용하였습니다. CRUD 모두 가능하도록 제작하였습니다.',
    date: '2024.01.01 ~ 2024.02.01',
    bgImg: 'assets/frontend.jpg',
    video: 'assets/festival.avif',
    btn1: 'go site',
    btn1Img: site,
    btn1Link: 'https://keumju.github.io/frontend_dictionary/',
    // btn2: 'figma',
    // btn2Img: figma,
    // btn2Link: '',
    btn3: 'github',
    btn3Img: git,
    btn3Link: 'https://github.com/keumju/frontend_dictionary.git'
}, {
    class: 'Math',
    siteName: 'CATCH MATH MONSTERS',
    teamName: "Team M&m's",
    text: '현재 진행중인 프로젝트입니다. 더 좋은 결과를 위해 꾸준히 업로드 중입니다.',
    date: '2024.07 ~ (진행중)',
    bgImg: 'assets/book.jpg',
    video: 'assets/festival.avif',
    btn1: 'go site',
    btn1Img: site,
    btn1Link: '',
    btn2: 'figma',
    btn2Img: figma,
    btn2Link: 'https://www.figma.com/design/aJgJdCZVHVoLsfcQaU3ow3/%EC%BA%90%EC%B9%98!-%EC%88%98%ED%95%99-%EB%AA%AC%EC%8A%A4%ED%84%B0?node-id=0-1&m=dev&t=1sCZ9sbTsP5ATVWV-1',
    btn3: 'github',
    btn3Img: git,
    btn3Link: ''
}, {
    class: 'Port',
    siteName: 'Portfolio',
    teamName: "포트폴리오",
    text: 'gsap, Lenis를 사용하여 동적인 효과를 적용한 사이트 입니다.',
    date: '2024년도',
    bgImg: 'assets/port.jpg',
    btn1: 'go site',
    btn1Img: site,
    btn1Link: '',
    btn2: 'figma',
    btn2Img: figma,
    btn2Link: 'https://www.figma.com/design/aJgJdCZVHVoLsfcQaU3ow3/%EC%BA%90%EC%B9%98!-%EC%88%98%ED%95%99-%EB%AA%AC%EC%8A%A4%ED%84%B0?node-id=0-1&m=dev&t=1sCZ9sbTsP5ATVWV-1',
    btn3: 'github',
    btn3Img: git,
    btn3Link: ''
}];


export const cloneDatas = [{
    class : 'domino',
    img : 'assets/domino.png',
    logo: '',
    tit : '도미노 사이트 클로닝',
    txt : 'HTML, CSS, JavaScript를 사용하여 클로닝 사이트를 제작하였습니다.',
    btn1: 'go site',
    btn1Img: site,
    git : 'https://github.com/keumju/cloning_domino.git',
    btn3: 'github',
    btn3Img: git,
    link : 'https://keumju.github.io/cloning_domino/'
},{
    class : 'socar',
    img : 'assets/socar.png',
    logo: '',
    tit : '쏘카 사이트 클로닝',
    txt : 'React, CSS를 사용하여 클로닝 사이트를 제작하였습니다.',
    btn1: 'go site',
    btn1Img: site,
    git : '',
    btn3: 'github',
    btn3Img: git,
    link : ''
},{
    class : 'gongju',
    img : 'assets/gongju.png',
    logo: '',
    tit : '국립공주박물관 사이트 클로닝',
    txt : 'HTML, CSS, JavaScript를 사용하여 클로닝 사이트를 제작하였습니다.',
    btn1: 'go site',
    btn1Img: site,
    git : 'https://github.com/keumju/cloning_gongju.git',
    btn3: 'github',
    btn3Img: git,
    link : 'https://keumju.github.io/cloning_gongju/'
},{
    class : 'bizcar',
    img : 'assets/bizcar.png',
    logo: '',
    tit : '비즈카 사이트 클로닝',
    txt : 'HTML, CSS, JavaScript를 사용하여 클로닝 사이트를 제작하였습니다.',
    btn1: 'go site',
    btn1Img: site,
    git : 'https://github.com/keumju/cloning_bizcar.git',
    btn3: 'github',
    btn3Img: git,
    link : 'https://keumju.github.io/cloning_bizcar/'
},
// {
//     class : 'ktg',
//     img : '',
//     logo: '',
//     tit : 'KT&G 사이트 클로닝',
//     txt : 'HTML, CSS, JavaScript를 사용하여 클로닝 사이트를 제작하였습니다.',
//     btn1: 'go site',
//     btn1Img: site,
//     git : 'https://github.com/keumju/cloning_kt-g.git',
//     btn3: 'github',
//     btn3Img: git,
//     link : 'https://keumju.github.io/cloning_kt-g/'
// },
]
