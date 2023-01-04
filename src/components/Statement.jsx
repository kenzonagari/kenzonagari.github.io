import './Statement.css';
import { useRef, useEffect, useState } from 'react';

export default function Statement () {
    
    const myRef = useRef();
    const [isVisible, setIsVisible] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            setIsVisible(entry.isIntersecting);
        });
        observer.observe(myRef.current);
    }, [])

    return (
        <div className="brand-statement section-margin-padding" id="about">
            {/* <video playsInline autoPlay muted loop>
                <source src="/bg_texture_loop.mp4" type="video/mp4" />
            </video> */}
            <p className=" desc-text serif-title"><span style={{color: "rgb(58, 149, 203)"}}>Hi</span> <span style={{color: "rgb(162, 185, 45)"}}>there</span> !</p>
            <p className={`desc-text ${isVisible ? 'fade-up' : 'no-fade'}`} ref={myRef}>
                I'm Kenzo, an aspiring full-stack developer with experience in digital marketing and content creation. 
                <br/><br/>
                Driven to create works that bring artistic and creative fulfilment to both myself and others,
                I hope to combine my skills in software engineering and multimedia production to build applications and websites that add beauty and functionality to brands.
                <br/><br/>
                <a href="https://www.instagram.com/kenzo_nagari/" target="_blank" className='link-blue'>I also love making music and performing them, among other things</a>. If what I do resonates with you, <a href="mailto:kenzonagari@gmail.com" target="_blank" className='link-green'>let's chat!</a> 
            </p>
        </div>
    )
}