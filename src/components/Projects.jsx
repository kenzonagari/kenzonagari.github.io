import './Projects.css'
import { useState } from 'react';
import githubUrl from '../assets/github_icon.svg'
import websiteUrl from '../assets/website_icon.svg'

const descTextArr = [
    {
        title: "GudFud",
        desc: "Motivated by my desire to gain a bit of weight, I built a nutritional tracker app which takes in users' recipes or list of ingredients as input, and returns their corresponding caloric amount and nutritional contents. The project allowed me to deepen my understanding of PostgresQL and relational database, and it also gave me the opportunity to combine CRUD database and data from an external API.",
        stack: "PERN stack • Prisma • React-Router • Tailwind • Chart.js • JWT • Udici",
        url: {
            website: "https://gudfud.herokuapp.com/",
            github: "https://github.com/kenzonagari/SEIF10-Project4"
        }
    },
    {
        title: "HealthcarePal",
        desc: "As part of course assignment in building a full-stack MERN app, I had the opportunity to work with a healthcare professional in designing and building a one-stop healthcare Multi-Page App for both patients and healthcare professionals. With improving the efficiency of healthcare administration in mind, we envisioned the app to cover functionalities such as appointment booking, appointment record-keeping and prescription management.",
        stack: "MERN stack • Mongoose • React-Router • Bootstrap • FullCalendar.js",
        url: {
            website: "https://healthcarepal.cyclic.app/",
            github: "https://github.com/kenzonagari/SEIF10-Project3"
        }
    },
    {
        title: "NYT Film Review Bank",
        desc: "I built a React-based Single-Page App using data fetched from the New York Times Film Review API, which provides a library of archived film reviews since 1910s. The NYT API is also supplemented with the TMDB API for additional infos such as movie posters and average user scores. This provides a more user-friendly information on top of the reviews themselves.",
        stack: "React • React-Router • react-loading • react-circular-progressbar",
        url: {
            website: "https://nyt-film-library.vercel.app/",
            github: "https://github.com/kenzonagari/NYTFilmLibrary"
        }
    },
    {
        title: "OOP Minesweeper",
        desc: "I chose a simple Minesweeper build as an opportunity to explore Object-Oriented Programming (OOP) paradigm in JavaScript. The code is centered on one class template 'Minesweeper'.",
        stack: "HTML • CSS • JavaScript • jQuery",
        url: {
            website: "https://minesweeper-clone.vercel.app/",
            github: "https://github.com/kenzonagari/minesweeper"
        }
    },
    {
        title: "Wordle Clone",
        desc: "I recreated Wordle with a focus on learning advanced CSS, animation, and @keyframes, with an additional use of setTimeout to time certain animated sequences.",
        stack: "HTML • CSS • JavaScript • jQuery",
        url: {
            website: "https://wordle-recreation.vercel.app/",
            github: "https://github.com/kenzonagari/wordle"
        }
    },
    {
        title: "Tetris.js",
        desc: "I built a JavaScript-based Tetris game, with a novel approach to clockwise and counterclockwise piece rotation algorithm. I also implemented dynamic levels and scoring system that was inspired by the classic Tetris (NES version).",
        stack: "HTML Canvas • CSS • JavaScript • jQuery",
        url: {
            website: "https://tetris-js-kenzo.vercel.app/",
            github: "https://github.com/kenzonagari/tetris-project"
        }
    }
]

export default function Projects () {
    const [descText, setDescText] = useState(0);
    const [classFadeUp, setClassFadeUp] = useState('fast-fade-up');

    let cardElements = [];

    const handleChangeDesc = (num) => () => {
        setDescText(num);
        setClassFadeUp('fast-fade-up');
        const timeout = setTimeout(()=>{
            setClassFadeUp('');
        }, 1000);
    }

    for(let i = 1 ; i <= 6 ; i++){
        cardElements.push(
            <a href={descTextArr[i-1].url.website} className={`card project-img box-${i}`} key={i} onMouseEnter={handleChangeDesc(i-1)} target="_blank" />
        )
    }

    return (
        <div className="project-page section-margin-padding" id="projects">
            <h1><span className='lift-up'>recent</span> <span className='lift-down'>projects</span></h1>
            <div className="project-cards">
                {cardElements}
            </div>
            <div className={`project-text ${classFadeUp}`}>
                <h2>{descTextArr[descText].title}</h2>
                <div>
                    <p className="desc-text">{descTextArr[descText].desc} <br /><br /></p>
                    <p className="desc-text serif">{descTextArr[descText].stack}</p>
                    <div className='icons'>
                        <a href={descTextArr[descText].url.github} target="_blank">
                            <img src={githubUrl} alt="github" width={40}/>
                        </a>
                        <a href={descTextArr[descText].url.website} target="_blank">
                            <img src={websiteUrl} alt="website" width={40} style={{paddingLeft: "20px"}}/>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}