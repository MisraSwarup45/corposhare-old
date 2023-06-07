import React from 'react';
import './About.scss';
import Navbar from './Navbar';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="about-section">
                <div className="container">
                    <h2 className="about-heading">About Us</h2>
                    <p className="about-description">
                        CorpoShare is a leading company that specializes in providing innovative workspace solutions for businesses of all sizes. With our state-of-the-art facilities and flexible membership plans, we help businesses thrive and grow.
                    </p>
                    <p className="about-description">
                        Our mission is to create an inspiring and collaborative environment where professionals can connect, collaborate, and succeed. Whether you're a freelancer, a startup, or an established enterprise, we have the perfect workspace for you.
                    </p>
                    <p className="about-description">
                        At CorpoShare, we understand the importance of a well-designed workspace in fostering productivity and creativity. That's why our workspaces are thoughtfully designed with modern amenities, comfortable furniture, and an inviting atmosphere.
                    </p>
                    <p className="about-description">
                        Join CorpoShare today and experience the benefits of a premium workspace that is tailored to your needs. Focus on what you do best while we take care of the rest.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
