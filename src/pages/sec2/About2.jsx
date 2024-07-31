const About2 = () => {
    let infos = [
        {
            text: '1998.04.09 (만 26세)',
            Img: 'assets/birth.svg'
        },{   
            text: '서울특별시 중랑구 봉화산로 3길 234-9',
            Img: 'assets/address.svg',
        },{
            text: '010-6388-7821',
            Img: 'assets/phone.png',
        },{
            text: 'goldweek49@naver.com',
            Img: 'assets/mail.png'
        }
    ]

    return (
        <ul className="AboutWrap">
            <li className="AboutTit">
                <p>THIS IS ME</p>
                <span>KEUMJU</span>
            </li>
            <li className="AboutInfo1">
                <p>오늘의 경험을 통해 내일의 실력을 키우며, 지속적으로 성장 중입니다.</p>
                <span>
                    <span>2017.03 ~ 2021.02</span>경복대학교 호텔관광학과 졸업 <br/>
                    <span>2019.03 ~ 2021.06</span>경복대학교 학과 교육 조교 <br/>
                    <span>2022.12 ~ 2023.12</span>경희사이버대학교 부총장실 비서 <br/>
                    <span>2024.01 ~ 2024.08</span>Motion UI 프론트엔드 웹앱개발자 양성 과정 수료
                </span>
            </li>
            <li className="AboutInfo2">
                {infos.map((info, index)=>(
                    <div key={index}>
                        <img src={info.Img} alt="icon"/>
                        <p>{info.text}</p>
                    </div>
                ))}
            </li>
        </ul>
    )
}

export default About2;