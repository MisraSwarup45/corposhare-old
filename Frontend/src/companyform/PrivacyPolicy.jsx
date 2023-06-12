import React from 'react';
import './PrivacyPolicy.scss';
import Navbar from './Navbar';

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <div className="privacy-policy-section">
        <div className="container">
          <h2 className="privacy-policy-heading">Privacy Policy</h2>
          <p className="privacy-policy-description">
            At CorpoShare, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us.
          </p>
          <p className="privacy-policy-description">
            We collect personal information such as your name, email address, and contact details when you sign up for our services or interact with our website. This information is used to provide you with the requested services, improve our offerings, and communicate important updates.
          </p>
          <p className="privacy-policy-description">
            We implement industry-standard security measures to protect your data from unauthorized access or disclosure. We do not share your personal information with third parties without your consent, except in cases required by law.
          </p>
          <p className="privacy-policy-description">
            Our website may use cookies to enhance your browsing experience. You have the option to accept or decline cookies through your browser settings. However, note that certain features of our website may not function properly if cookies are disabled.
          </p>
          <p className="privacy-policy-description">
            By using our services and providing your personal information, you consent to the terms of this Privacy Policy. We may update this policy periodically, and any changes will be posted on our website.
          </p>
          <p className="privacy-policy-description">
            If you have any questions or concerns regarding our Privacy Policy or the handling of your personal information, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
