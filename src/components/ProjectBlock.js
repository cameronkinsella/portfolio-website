import React, { useState } from 'react'
import {faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function ProjectBlock(props) {
  const [tech] = useState(props.tech);

  const icon = {
    Python: require('../assets/icons/python.svg'),
    'Node.js': faNodeJs,
    JavaScript: faJs,
    HTML5: require('../assets/icons/html5.svg'),
    CSS3: require('../assets/icons/css3.svg'),
    'React.js': faReact,
    PyTorch: require('../assets/icons/pytorch.svg'),
    OpenCV: require('../assets/icons/opencv.svg'),
  };


  return (
    <div className={'projectsBlock'}>
      <div className={'projectsDetailsBlock'}>
        <div className={'projectsDetails'}>
          <h4>Description:</h4>
          <p style={{fontSize: 18}}>
          {props.desc}
          </p>
        </div>
        <div className={'projectsDetails'} style={{borderColor: '#eeeeee', borderWidth: '0', borderTopWidth: '2px', borderStyle: 'solid'}}>
          <h4>Technologies:</h4>
          {
            tech.map(x => typeof icon[x] !== 'string' ? (
              <FontAwesomeIcon title={x} className={`projectsTechIcons ${x}`} icon={icon[x]}/>
            ):
              <object title={x} className={'projectsSecondaryTechIcons'} data={icon[x]} type={'image/svg+xml'}>
                {x}
              </object>
            )
          }
        </div>
      </div>
      <img src={props.src} alt={''} className={'projectsImage'}/>
    </div>
  )
}