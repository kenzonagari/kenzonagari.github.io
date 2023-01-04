import './Header.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import linkedInUrl from '../assets/linkedin_icon_white.svg';
import githubUrl from '../assets/github_icon_white.svg'

const descriptors = ["Music Maker", "Film Buff", "Cat Person", "Tetris Addict", "Chess Fan"];

export default function Header () {

    const [descriptor, setDescriptor] = useState(0);
    const [classFadeRight, setClassFadeRight] = useState('fade-right');
    let variable = 0;
    
    useEffect(() => {
        const interval = setInterval(() => {
            variable++;
            if(variable === 5){
                variable = 0;
            }
            setDescriptor(variable);
            setClassFadeRight('fade-right');
            const timeout = setTimeout(()=> {
                setClassFadeRight('fade-left');
            }, 3000);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return(
        <div className="bg-color bg-layer-image">
            <div className='header'>
                <ul className='header-list'>
                    <li style={{cursor: "pointer"}}><Link to='about' spy={true} smooth={true} offset={-50} duration={750}>About</Link></li>
                    <li style={{cursor: "pointer"}}><Link to='projects' spy={true} smooth={true} offset={-75} duration={750}>Projects</Link></li>
                    <li>
                        <a href="https://drive.google.com/file/d/1RpO6rbBwU5E1z6YpkgxO_yJktfckTZqr/view?usp=sharing" target="_blank">
                            Resume
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/kenzo-nagari/" target="_blank">
                            <img src={linkedInUrl} alt="linkedin" className='header-icon'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/kenzonagari/" target="_blank">
                            <img src={githubUrl} alt="github" className='header-icon'/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='landing-page section-margin-padding'>
                <div className="text">
                    <h1>Kenzo Nagari</h1>
                    <h2>Full-Stack Web Developer / <br/> Multimedia Artist / <br/> <span className={classFadeRight}>{descriptors[descriptor]}</span></h2>
                </div>
                <div className="profile-img">
                </div>
            </div>
        </div>
    )
}