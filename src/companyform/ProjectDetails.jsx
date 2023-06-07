import React, { useState } from 'react';
import './ProjectDetails.scss';
import Navbar from './Navbar';
import Footer from './Footer';

const ProjectDetails = () => {
  const project = {
    company: 'XYZ Tech Solutions',
    title: 'Data Analyst',
    pay: '55000',
    duration: '6 months',
    employee_required: '5',
    skills: 'SQL, Python',
    description: 'Sed et consectetur velit. Aliquam vestibulum orci sed lacus dignissim cursus. Nullam ac hendrerit tortor. Integer pretium sem ipsum, ut gravida quam placerat eu. Aliquam erat volutpat. Cras fringilla, neque non ultrices tempor, odio metus porta odio, et dapibus urna metus vitae sem. Sed efficitur fringilla ipsum, in condimentum nunc. Fusce laoreet tortor vitae nunc maximus ullamcorper. Quisque non urna nec tellus pulvinar efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ac sapien eu felis vulputate pulvinar at at enim. Sed nec dignissim ligula, id volutpat ipsum. In rhoncus erat vitae justo faucibus, sed bibendum metus aliquam. Vestibulum porta metus ut tempor commodo.',
    email: 'mark.johnson@example.com',
    contact_number: '456-789-1230',
  };

  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleTermsCheckboxChange = (event) => {
    setTermsAccepted(event.target.checked);
  };

  const handleApplyNowClick = () => {
    if (termsAccepted) {
      // Apply now logic
      console.log('Application submitted!');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="project-details">
        <div className="project-details__content">
          <section className="project-details__section">
            <h2 className="project-details__title">{project.title}</h2>
            <p className="project-details__company">{project.company}</p>
            <p className="project-details__pay">Pay: {project.pay}</p>
            <p className="project-details__duration">Duration: {project.duration}</p>
            <p className="project-details__employee-required">Employee Required: {project.employee_required}</p>
            <p className="project-details__skills">Skills: {project.skills}</p>
          </section>
          <section className="project-details__section">
            <h3 className="project-details__section-title">Description</h3>
            <p className="project-details__description">{project.description}</p>
          </section>
          <section className="project-details__section">
            <h3 className="project-details__section-title">Contact</h3>
            <div className="project-details__contact">
              <p className="project-details__email">{project.email}</p>
              <p className="project-details__contact-number">{project.contact_number}</p>
            </div>
          </section>
          <section className="project-details__section">
            <div className="project-details__terms">
              <label>
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={handleTermsCheckboxChange}
                />
                I accept the terms and conditions
              </label>
            </div>
            <button
              className={`project-details__apply-button ${termsAccepted ? 'active' : ''}`}
              onClick={handleApplyNowClick}
              disabled={!termsAccepted}
            >
              Apply Now
            </button>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectDetails;
