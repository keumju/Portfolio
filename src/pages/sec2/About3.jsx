const About3 = () => {
    let infos = [
        {
            text: '깃허브 바로가기',
            Img: 'assets/git.png',
            link: 'https://github.com/keumju'
        },{   
            text: '노션 블로그 바로가기',
            Img: 'assets/notion.png',
            link: 'https://hickory-rise-dcc.notion.site/STUDY-LOG-e406c0ca86c14023a6df436f1a3cabf7'
        },{
            text: '티스토리 블로그 바로가기',
            Img: 'assets/blog.png',
            link: 'https://juukka.tistory.com/'
        }
    ]

    return (
        <ul className="AboutWrap About3">
            <li className="AboutTit">
                <p>ABOUT</p>
                <span>Study Log</span>
            </li>
            <li className="AboutInfo1">
                <p>끊임없는 노력과 열정으로 성장하고 있습니다.</p>
                <span>
                    <span>2021.01</span> MOS MASTER <br/>
                    <span>2021.09</span>워드프로세서 <br/>
                    <span>2023.04</span>커뮤니케이션전문가 <br/>
                    <span>2023.04</span>TOEIC SPEAKING IM3<br/>
                    <span>2024.04</span>웹디자인기능사 <br/>
                    <span>2024.04</span>정보처리기능사(필기 합격 실기 예정)<br/>
                    <span>2024.05</span>GTQ 1급<br/>
                </span>
            </li>
            <li className="AboutInfo2">
                {infos.map((info, index)=>(
                    <div key={index}>
                        <img src={info.Img} alt="icon"/>
                        <a href={info.link} target='_blank'>
                            <p>{info.text} <img className='snsArrow' src="assets/arrow.png" alt="arrow"/></p>
                        </a>
                    </div>
                ))}
            </li>
        </ul>
    )
}

export default About3;