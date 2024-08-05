import html from '../../../public/assets/html.png'
import css from '../../../public/assets/css.png'
import javascript from '../../../public/assets/javascript.png'
import react from '../../../public/assets/react.svg'
import jquery from '../../../public/assets/jquery.png'
import git from '../../../public/assets/git.svg'
import github from '../../../public/assets/github.png'
import nodejs from '../../../public/assets/nodejs.svg'
import mysql from '../../../public/assets/mysql.svg'
import illustrator from '../../../public/assets/illustrator.svg'
import photoshop from '../../../public/assets/photoshop.svg'
import figma from '../../../public/assets/figma.svg'
import blender from '../../../public/assets/blender.png'

function Skils(){
    return(
        <ul className="AboutWrap About4">
            <li className="AboutTit">
                <p>MY</p>
                <span>Skills</span>
            </li>
            <li className="AboutInfo4">
                <ul className='skillWrap'>
                    <li>
                        <h2>프론트엔드</h2>
                        <img src={html}/>
                        <img src={css}/>
                        <img src={javascript}/>
                        <img src={react}/>
                        <img src={jquery}/>
                    </li>
                    <li>
                        <h2>기타 언어</h2>
                        <img src={git}/>
                        <img src={github}/>
                        <img src={nodejs}/>
                        <img src={mysql}/>
                    </li>
                    <li>
                        <h2>디자인</h2>
                        <img src={illustrator}/>
                        <img src={photoshop}/>
                        <img src={figma}/>
                        <img src={blender}/>
                    </li>
                </ul>                 
            </li>
        </ul>
    )
}

export default Skils