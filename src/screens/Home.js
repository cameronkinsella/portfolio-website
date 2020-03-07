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

function Home() {
  const aboutMe = useRef(null);
  const executeScroll = () => scrollToRef(aboutMe);
  let history = useHistory();

  const goToProjects = () => {
    history.push("/projects");
  };

  return (
    <div className={'App'}>

      <header className={'App-header'}>
        <h1 style={{ fontWeight: 200 }}>Cameron Kinsella</h1>
        <p>
          Software Developer, <br/>
          UWaterloo Mechatronics Engineering
        </p>
        <div className={'icon'}>
          <a title={'Github: cameronkinsella'} href={'https://github.com/cameronkinsella'}>
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
      <body className={'App-body'}>
      <div className={'header1'} ref={aboutMe}>
        <ScrollAnimation animateIn={'fadeInLeft'} animateOnce={true}>
          About Me
        </ScrollAnimation>
      </div>
      <img className={'portrait'} src={me} alt={'me'}/>
      <h2 style={{ fontWeight: 200 }}>Hello there, I'm Cameron</h2>
      <div className={'bodyContent'}>
        <ScrollAnimation animateIn={'fadeIn'}>
          <div className={'bodyBlock'}>
            I'm a Mechatronics Engineering student at the
            University of Waterloo with a passion for Software Development.
            I'm also a pilot! Aircraft I've flown include: <br/>
            Schweizer SGS 2-33As, Cessna 152s, and Cessna 172s.
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn={'fadeIn'}>
          <div className={'bodyBlock'}>
            My favorite hobby is programming!
            I like to learn by working on projects in my free time.
            Through my personal projects, I've gained experience in a
            variety of languages including:<br/>
            <b>Python, C++, Java, Javascript (ES6), HTML5, and CSS</b><br/>
            along with several framework, including:<br/>
            <b>PyTorch, OpenCV, React, React Native, and Selenium</b>
          </div>
        </ScrollAnimation>
      </div>
      <div className={'App-body'}>
        <div className={'header2'}>
          <ScrollAnimation animateIn={'fadeInLeft'} animateOnce={true}>
            Projects
          </ScrollAnimation>
        </div>
        <h2 className={'projectsHeader'}>Check out my projects!</h2>
        <ScrollAnimation animateIn={'bounce'}>
          <FontAwesomeIcon icon={faChevronDown} className={'chevron2'}/>
        </ScrollAnimation>
        <FontAwesomeIcon onClick={goToProjects} icon={faCode} size={'5x'} className={'code'}/>
      </div>
      </body>
    </div>

  );
}

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

export default Home