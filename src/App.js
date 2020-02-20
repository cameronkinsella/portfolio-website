import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './App.scss';
import { SocialIcon } from './components/SocialIcon';


function App() {
  return (

    <div className={'App'}>

      <header className={'App-header'}>
        <h1 style={{ fontWeight: 200 }}>Cameron Kinsella</h1>
        <p>
          Software developer, <br/>
          UWaterloo Mechatronics Engineering
        </p>

        <div className={'icon'}>
          <FontAwesomeIcon icon={faGithub} size={'2x'} className={'github'}/>
          <SocialIcon icon={'linkedin'}/>
          <SocialIcon icon={'email'}/>
          <SocialIcon icon={'resume'}/>
        </div>
        <FontAwesomeIcon icon={faChevronDown} className={'chevron'}/>
      </header>
      <body className={'App-body'}>
      <ScrollAnimation animateIn='fadeInLeft' animateOut='fadeOutRight'>
        Some Text
      </ScrollAnimation>
      </body>

    </div>

  );
}

export default App;
