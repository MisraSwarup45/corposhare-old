import React, { useState } from 'react';
import './ProjectDetails.scss';
import Navbar from './Navbar';
import Footer from './Footer';

const ProjectDetails = () => {
    const project = {
        id: 1,
        title: "Web Development Project",
        employees_required: 3,
        skills_req: "HTML, CSS, JavaScript",
        time_tobe_dedicated: "20 hours per week",
        pay: "$30 per hour",
        duration: "3 months",
        description: "Creating a responsive website for a client",
        created_at: "2023-06-08",
        updated_at: "2023-06-08",
        image: "https://example.com/project-image.jpg",
        email: "client@example.com",
        contact_number: "123-456-7890",
        company: 1,
        location: "New York City",
        category: "Web Development",
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
                        <p className="project-details__company">Company: {project.company}</p>
                        <p className="project-details__pay">Pay: {project.pay}</p>
                        <p className="project-details__duration">Duration: {project.duration}</p>
                        <p className="project-details__employee-required">Employees Required: {project.employees_required}</p>
                        <p className="project-details__skills">Skills Required: {project.skills_req}</p>
                        <p className="project-details__created-at">Created At: {project.created_at}</p>
                        <p className="project-details__updated-at">Updated At: {project.updated_at}</p>
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
