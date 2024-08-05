import site from '../public/assets/web.png'
import figma from '../public/assets/figma.png'
import git from '../public/assets/git2.png'
import proposal from '../public/assets/proposal.png'

export const headerNav = [{
        title: "ABOUT",
        url: "#ABOUT"
    },{
        title: "PROJECT",
        url: "#PROJECT"
    },
    {
        title: "TOY",
        url: "#TOY"
    },
    {
        title: "CLONE",
        url: "#CLONE"
    }
];

export const projectDatas = [{
    class: 'Festival',
    siteName: 'FESTIVAL SITE',
    teamName: '대한민국 밤산책',
    text: '대한민국 밤산책 웹사이트는 경복궁 별빛야행 축제를 소개하고 홍보하기 위해 제작된 웹 사이트 입니다. Three.js를 활용해 경복궁의 아름다움을 3D로 체험할 수 있고, 애니메이션 효과로 사용자의 가독성을 높일 수 있도록 제작하였습니다. 또한, 로그인을 통해 유사한 축제를 검색하고 좋아요 버튼을 이용해 관심 있는 축제를 쉽게 저장할 수 있습니다.',
    date: '2024.05.15 ~ 2024.06.18',
    bgImg: 'assets/festival.avif',
    btn1: 'go site',
    btn1Img: site,
    btn1Link: 'https://keumju.github.io/bandifesta/',
    btn2: 'figma',
    btn2Img: figma,
    btn2Link: 'https://www.figma.com/design/4hKjaZEbRsl1pGeaUSQKjY/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD-%EB%B0%A4%EC%82%B0%EC%B1%85?node-id=0-1&m=dev&t=WdWtFrFXJUalo6Vu-1',
    btn3: 'github',
    btn3Img: git,
    btn3Link: 'https://github.com/keumju/bandifesta.git',
    btn4: 'proposal',
    btn4Img: proposal,
    btn4Link: ''
}, {
    class: 'Math',
    siteName: 'CATCH MATH MONSTERS',
    teamName: "Team M&m's",
    text: '캐치 수학 몬스터 웹사이트는 초등학교 5학년 학생을 대상으로 재미있고 몰입감 있게 수학을 배울 수 있도록 캐릭터와 스토리가 결합된 학습 플랫폼입니다. 각 학습 단계는 수학 개념을 자연스럽게 습득할 수 있도록 설계 되었고, 직관적이고 사용하기 쉬운 인터페이스로 제작하였습니다.',
    date: '2024.07.06 ~ 2024.08.07',
    bgImg: 'assets/book.jpg',
    btn1: 'go site',
    btn1Img: site,
    btn1Link: '',
    btn2: 'figma',
    btn2Img: figma,
    btn2Link: 'https://www.figma.com/design/aJgJdCZVHVoLsfcQaU3ow3/%EC%BA%90%EC%B9%98!-%EC%88%98%ED%95%99-%EB%AA%AC%EC%8A%A4%ED%84%B0?node-id=0-1&m=dev&t=1sCZ9sbTsP5ATVWV-1',
    btn3: 'github',
    btn3Img: git,
    btn3Link: '',
    btn4: 'proposal',
    btn4Img: proposal,
    btn4Link: ''
}, {
    class: 'Gcova',
    siteName: 'GCOVA SITE RENEWAL',
    teamName: '지코바 사이트 리뉴얼',
    text: '지코바 브랜드의 리뉴얼 사이트는 창업을 고민하는 사용자들을 위해 가독성을 우선으로 한 디자인으로 재구성했습니다. 직관적인 인터페이스와 사용자 친호적인 네비게이션을 통해 브랜드 정보를 쉽고 빠르게 접근할 수 있도록 구현하였습니다.',
    date: '2024.03.26 ~ 2024.04.09',
    bgImg: 'assets/gcova.jpg',
    btn1: 'go site',
    btn1Img: site,
    btn1Link: 'https://keumju.github.io/gcova_renewal/',
    btn2: 'figma',
    btn2Img: figma,
    btn2Link: 'https://www.figma.com/design/FvEC1kUoUrefm3llM6to8z/%EC%A7%80%EC%BD%94%EB%B0%94?node-id=0-1&m=dev&t=CuAFDPH6ffkEidxB-1',
    btn3: 'github',
    btn3Img: git,
    btn3Link: 'https://github.com/keumju/gcova_renewal.git',
    btn4: 'proposal',
    btn4Img: proposal,
    btn4Link: ''
}, {
    class: 'Front',
    siteName: 'FRONTEND DICTIONARY',
    teamName: '프론트엔드사전',
    text: '프론트엔드에서 사용되는 단어들을 사전처럼 관리하기 위해 CRUD 기능을 적용하여 단어 관리 시스템을 구현했습니다. 사용자는 단어를 추가, 수정, 삭제, 조회할 수 있으며, 직관적인 인터페이스를 통해 손쉽게 단어 정보를 관리 할 수 있도록 하였습니다.',
    date: '2024.05.06 ~ 2024.05.10',
    bgImg: 'assets/frontend.jpg',
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
    class: 'Port',
    siteName: 'Portfolio',
    teamName: "포트폴리오",
    text: '현재 사이트는 제작된 프로젝트가 돋보일 수 있도록 설계된 사이트입니다. GSAP과 Lenis를 활용하여 동적이고 시각적으로 매력적이게 제작하였습니다.',
    date: '2024.06.18 ~ 2024.07.04',
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

export const toyData = [{
    tit : 'To-do List',
    subTit : '투두리스트',
    bgImg : 'assets/toybg.jpg',
    btn1: 'go site',
    btn1Img: site,
    btn1Link: '',
    btn3: 'github',
    btn3Img: git,
    btn3Link: ''
}]

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
