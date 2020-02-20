import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';

export function SocialIcon(props) {
  const [icon] = useState(props.icon);

  const brand = {
    linkedin: faLinkedinIn,
    email: faEnvelope,
    resume: faFile
  };

  return (
    <div className={`bubble ${icon}`}>
      <FontAwesomeIcon icon={brand[icon]} size={'lg'}/>
    </div>
  );
}
