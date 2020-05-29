import React, { useRef } from 'react';
import '../App.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faCode } from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from '../components/SocialIcon';

import me from '../assets/me.jpg'
import power from '../assets/power.jpg'
import gliding from '../assets/gliding.jpg'
import logo from '../assets/logo-white.png'

function Home() {
  const aboutMe = useRef(null);
  const executeScroll = () => scrollToRef(aboutMe);
  let history = useHistory();

  const goToProjects = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    history.push("/projects");
  };

  return (
    <div className={'App'}>
      <header className={'App-header'}>
        <img src={logo} style={{height: 250, width: 250, marginTop: '-150px', marginBottom: '-30px'}} alt={'logo'}/>
        <h1 style={{ fontWeight: 200 }}>Cameron Kinsella</h1>
        <p>
          Software Developer, <br/>
          UWaterloo Mechatronics Engineering
        </p>
        <div className={'icon'}>
          <a className={'githubBubble'} title={'Github: cameronkinsella'} href={'https://github.com/cameronkinsella'}>
            <FontAwesomeIcon icon={faGithub} size={'2x'} className={'github'}/>
          </a>
          <a title={'Linkedin: cameronkinsella'} href={'https://www.linkedin.com/in/cameronkinsella/'}>
            <SocialIcon icon={'linkedin'}/>
          </a>
          <a title={'Email: ckinsella@uwaterloo.ca'} href={'mailto:ckinsella@uwaterloo.ca'}>
            <SocialIcon icon={'email'}/>
          </a>
          <a title={'Resume'} href={'https://storage.googleapis.com/personal-website-files/CameronKinsellaResume.pdf'}>
            <SocialIcon icon={'resume'}/>
          </a>
        </div>
        <div onClick={executeScroll}>
          <FontAwesomeIcon icon={faChevronDown} className={'chevron1'}/>
        </div>
      </header>
      <div className={'App-body'}>
        <div className={'header1'} ref={aboutMe}>
          <ScrollAnimation animateIn={'fadeIn'} animateOnce={true}>
            About Me
          </ScrollAnimation>
        </div>
        <img className={'portrait'} src={me} alt={''}/>
        <h2 style={{ fontWeight: 200, marginBottom: '5em' }}>Hello there, I'm Cameron</h2>
        <div className={'bodyContent'}
             style={window.mobileCheck() ?
               { backgroundImage: `url(${gliding})`, padding: '2em 1em', margin: '2em 1em' } :
               { backgroundImage: `url(${power})`, margin: '2em' }}>
          <ScrollAnimation animateIn={'fadeIn'}>
            <div className={'bodyBlock'} style={window.mobileCheck() ?
              { margin: '8em 0', fontSize: 'calc(10px + 1vmin)' } :
              { margin: '8em 5%' }}>
              I'm a Mechatronics Engineering student at the
              University of Waterloo with a passion for Software Development.
              I'm also a pilot! Aircraft I've flown include: <br/>
              Schweizer SGS 2-33As, Cessna 152s, and Cessna 172s.
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn={'fadeIn'}>
            <div className={'bodyBlock'} style={window.mobileCheck() ?
              { margin: '8em 0', fontSize: 'calc(10px + 1vmin)' } :
              { margin: '8em 5%' }}>
              My favorite hobby is programming!
              I like to learn by working on projects in my free time.
              Through my personal projects, I've gained experience in a
              variety of languages including:<br/>
              <b>Python, C++, Java, JavaScript (ES6), HTML5, and CSS</b><br/>
              along with several framework, including:<br/>
              <b>PyTorch, OpenCV, React, React Native, and Selenium</b>
            </div>
          </ScrollAnimation>
        </div>
        <div className={'App-body'}>
          <div className={'header2'}>
            <ScrollAnimation animateIn={'fadeIn'} animateOnce={true}>
              Projects
            </ScrollAnimation>
          </div>
          <h2 className={'projectsHeader'}>Check out my projects!</h2>
          <ScrollAnimation animateIn={'bounce'}>
            <FontAwesomeIcon icon={faChevronDown} className={'chevron2'}/>
          </ScrollAnimation>
          <FontAwesomeIcon onClick={goToProjects} icon={faCode} size={'5x'} className={'code'}/>
        </div>
      </div>
    </div>
  );
}

const scrollToRef = (ref) => window.scrollTo({ top: ref.current.offsetTop - 125, behavior: 'smooth' });

export default Home
