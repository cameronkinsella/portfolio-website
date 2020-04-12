import React, { useState } from 'react'
import { faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export function ProjectBlock(props) {
  const [tech] = useState(props.tech);

  /*
  Required props:
  title -> project title
  link -> address that the link button will go to
  color -> color of the link button
  src -> image source
  ratio -> image ratio (Height / Width * 100)
  desc -> project description
  tech -> list of tech used in the project, in an array. Names must match one of the names provided in the icon list below
   */

  const icon = {
    'Python': require('../assets/icons/python.svg'),
    'Node.js': faNodeJs,
    'JavaScript': faJs,
    'HTML5': require('../assets/icons/html5.svg'),
    'CSS3': require('../assets/icons/css3.svg'),
    'PHP': require('../assets/icons/php.svg'),
    'React.js': faReact,
    'React-Native': faReact,
    'PyTorch': require('../assets/icons/pytorch.svg'),
    'OpenCV': require('../assets/icons/opencv.svg'),
    'Google Cloud Platform': require('../assets/icons/gcp.svg')
  };

  return (
    <div className={'projectsBlock'}
         style={window.mobileCheck() ?
           { width: '90%', flexDirection: 'column-reverse' } :
           { width: '70%', flexDirection: 'row' }
         }>
      <div className={'projectsDetailsBlock'} style={window.mobileCheck() ?
        { borderRadius: '0 0 1em 1em' } :
        { width: '32em', borderRadius: '1em 0 0 1em' }
      }>
        <div>
          <h4>{props.title}</h4>
        </div>
        <div className={'projectsDetails'} style={{ fontSize: 18 }}>
          <p style={{ fontWeight: 200, fontSize: 'calc(10px + 2vmin)' }}>Description:</p>
          {props.desc}
        </div>
        <div className={'projectsDetails'}>
          <p style={{ fontWeight: 200 }}>Technologies:</p>
          {
            tech.map((x, i) => typeof icon[x] !== 'string' ? (
                <FontAwesomeIcon key={i} title={titleName(x)} className={`projectsTechIcons ${x}`} icon={icon[x]}/>
              ) :
              <object key={i} title={titleName(x)} className={'projectsSVGTechIcons'} data={icon[x]}
                      type={'image/svg+xml'}>
                {titleName(x)}
              </object>
            )
          }
        </div>
      </div>
      <div className={'projectsImage'}
           style={window.mobileCheck() ?
             {
               backgroundImage: `url(${props.src})`,
               borderRadius: '0.9em 0.9em 0 0',
               height: 0,
               paddingTop: `${props.ratio}%`
             } :
             {
               backgroundImage: `url(${props.src})`,
               borderRadius: '0 0.9em 0.9em 0',
               width: '100vh'
             }}>
        <a title={'Go to Project'} href={props.link} className={'projectsLink'}
           style={window.mobileCheck() ? {
             color: `${props.color}`,
             top: `-95%`
           } : { color: `${props.color}`, top: '5%' }}>
          <FontAwesomeIcon icon={faExternalLinkAlt} size={'2x'}/>
        </a>
      </div>
    </div>
  )
}

function titleName(name) {
  // Since class names need to be one word, dashes are added to any multi-worded technology names
  // This function gets rid of those dashes for the icon tooltips
  return name.replace(/-/g, ' ')
}
