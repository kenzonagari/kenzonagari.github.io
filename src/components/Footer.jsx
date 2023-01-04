import './Footer.css';
import leewayUrl from '../assets/leeway.jpg';
import somethinElseUrl from '../assets/somethinelse.jpg';
import hubTonesUrl from '../assets/hubtones.jpg';
import linkedInUrl from '../assets/linkedin_icon.svg';
import githubUrl from '../assets/github_icon.svg';

export default function Footer () {
    return (
        <div className="footer-page section-margin-padding">
            <p>The design of this website is influenced by <br/> the following Blue Note album covers I love:</p>
            <div className='album-row'>
                <img src={leewayUrl} alt="leeway" className='album-img'/>
                <img src={somethinElseUrl} alt="somethinelse" className='album-img'/>
                <img src={hubTonesUrl} alt="hubtones" className='album-img'/>
            </div>
            <div className='footer-list'>
                <a href="https://www.linkedin.com/in/kenzo-nagari/" target="_blank">
                    <img src={linkedInUrl} alt="linkedin" width={50} />
                </a>
        
                <a href="https://github.com/kenzonagari/" target="_blank">
                    <img src={githubUrl} alt="github" width={50} />
                </a>
            </div>
        </div>
    )
}