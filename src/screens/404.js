import React from 'react';
import '../App.scss';

function NotFound() {
  return (
    <div className={'App'}>
      <header className={'NotFound'}>
        <div className={'NotFoundImage'}>
          <img src={'https://i.redd.it/2bemokuji4631.jpg'} alt={''} className={'NotFoundImage'}/>
        </div>
        <p style={{ color: '#252525' }}>
          <h3>404</h3>
          why are you here?
        </p>
      </header>
    </div>
  )
}

export default NotFound