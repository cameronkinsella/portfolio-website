import React from 'react';
import { ProjectBlock } from '../components/ProjectBlock'

function Projects() {

  return (
    <div className={'App'}>
      <header className={'App-header'}>
        <h1 style={{ fontWeight: 200 }}>Projects</h1>
        <p>
          List of projects here
        </p>
      </header>
      <body>
      <div className={'App-body'}>
        <ProjectBlock src={'https://i.pinimg.com/originals/a7/36/d7/a736d71bf21b16c6861cdfb36a01e342.png'} desc={
          "First Sample"
        } tech={
          ['Python', 'Node.js', 'JavaScript', 'HTML5', 'CSS3', 'React.js', 'OpenCV', 'PyTorch']
        }/>
        <ProjectBlock src={'https://images8.alphacoders.com/921/thumb-350-921451.jpg'} desc={
          "Sample"
        } tech={
          ['Python', 'OpenCV', 'PyTorch']
        }/>
      </div>
      </body>
    </div>
  );
}

export default Projects
