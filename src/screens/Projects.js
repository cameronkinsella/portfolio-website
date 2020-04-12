import React from 'react';
import '../App.scss';
import { ProjectBlock } from '../components/ProjectBlock'
import { faArrowLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

import abby from '../assets/thumbnails/abby.png'
import mailstorm from '../assets/thumbnails/mailstorm.jpeg'


function Projects() {
  let history = useHistory();

  const goToHome = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    history.push("/");
  };

  return (
    <div className={'App'}>
      <header className={'App-header'}>
        <h1 style={{ fontWeight: 200 }}>Projects</h1>
        <p>
          A list of all my major projects
        </p>
        <FontAwesomeIcon icon={faChevronDown} className={'chevron1'}/>
        <div className={'backButton'}>
          <div className={'backButtonIcon'} onClick={goToHome} title={'Go to Home Page'}
               style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faArrowLeft} size={'2x'}/>
          </div>
          <p className={'backButtonText'}>Back</p>
        </div>
      </header>
      <div>
        <div className={'App-body'}>
          <ProjectBlock title={'Sudoku Solver'} link={'https://seppuku-sudoku.web.app'}
                        color={'black'} src={abby} ratio={'62.5'} desc={
            <p>A Sudoku solver which uses computer vision to solve any game of Sudoku from just a picture.<br/><br/>Users
              can upload an image of a Sudoku game to the serverless backend. <b>OpenCV</b> is used to extract each tile
              from the board and a neural network built using <b>PyTorch</b> is used to identify each tile. Using
              backtracking, the board is solved and sent back to the user. Networking was accomplished through the use
              of Cloud Functions.</p>
          } tech={
            ['Python', 'OpenCV', 'PyTorch', 'React.js', 'Google Cloud Platform']
          }/>
          <ProjectBlock title={'Mailstorm'} link={'https://devpost.com/software/mailstorm'}
                        color={'black'} src={mailstorm} ratio={'75'} desc={
            <p>Mailstorm is a smart mailbox hack which won first place at NewHacks 2020.<br/><br/>It detects when new
              mail arrives and uses <b>OpenCV</b> to scrape all the characters from the envelope. It then identifies the
              characters using a neural network built using <b>PyTorch</b>, and sends the information of the mail to a
              mobile and web app</p>
          } tech={
            ['Python', 'OpenCV', 'PyTorch', 'PHP', 'Google Cloud Platform']
          }/>
          <ProjectBlock title={`Suspendon't`} link={'https://github.com/cameronkinsella/suspendont'}
                        color={'black'} src={mailstorm} ratio={'75'} desc={
            <p>Suspendon't is a mobile and web app for tracking when your Twitter friends are suspended or delete their
              account.<br/><br/> The mobile app was built using <b>React Native</b> and is functional on both
              iOS and Android. The web app was build using <b>React</b>. A Node backend is used for communicating with
              the Twitter APIs and storing user data in a database for future visits. Cloud Firestore is used for the
              database.</p>
          } tech={
            ['Node.js', 'React-Native', 'React.js', 'Google Cloud Platform']
          }/>
        </div>
      </div>
    </div>
  );
}

export default Projects
