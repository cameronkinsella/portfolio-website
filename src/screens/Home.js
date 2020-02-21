import React, { useRef } from 'react';
import '../App.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { SocialIcon } from '../components/SocialIcon';


function Home() {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

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
          <SocialIcon icon={'resume'}/>
        </div>
        <div onClick={executeScroll}>
          <FontAwesomeIcon icon={faChevronDown} className={'chevron'}/>
        </div>
      </header>
      <main className={'App-body'}>
      <div className={'header'} ref={myRef}>
        <ScrollAnimation animateIn='fadeInDown' animateOut='fadeOut'>
          projects
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
        Cool projects here
      </ScrollAnimation>
      </main>

    </div>

  );
}

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

export default Home