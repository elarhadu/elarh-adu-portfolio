import React from 'react';
import myResume from '../assets/emmanuella_adu_resume.pdf';

const CTA = () => (
  <div className="cta">
    <a href={myResume} download className="btn">Download CV</a>
    <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
  </div>
);

export default CTA;
