import React, { useState } from 'react';
import './CompanyProfile.scss';
import Navbar from './Navbar';
import Footer from './Footer';

const CompanyProfile = () => {
  const companyInfoData = {
    compname: 'ABC Company',
    logo: 'https://loremflickr.com/220/230/logo.png',
    email: 'info@abccompany.com',
    location: 'New York',
    founder: 'John Doe',
    employees: '100',
    year: '2005',
    services: ['Web Development', 'Mobile App Development', 'UI/UX Design'],
    desc: 'ABC Company is a leading technology firm specializing in web and mobile app development. With a team of experienced professionals, we deliver innovative solutions to our clients worldwide.',
  };

  const [companyInfo, setCompanyInfo] = useState(companyInfoData);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    setIsEditing(false);
    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        //http://3.145.60.152/api/v1/company/1
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(companyInfo),
      });

      if (response.ok) {
        // Handle successful response
        console.log('Company information updated successfully.');
      } else {
        // Handle error response
        console.error('Failed to update company information.');
      }
    } catch (error) {
      // Handle network error
      console.error('An error occurred while updating company information.', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCompanyInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar />
      <div className="company-profile">
        <h2>{companyInfo.compname}</h2>
        <div className="company-details">
          <div className="detail logo">
            <h3>Logo</h3>
            <div className="logo-image">
              <img src={companyInfo.logo} alt="Company Logo" />
            </div>
          </div>
          <div className="detail">
            <h3>Description</h3>
            {isEditing ? (
              <textarea
                className="edit-field"
                name="desc"
                value={companyInfo.desc}
                onChange={handleChange}
              />
            ) : (
              <p>{companyInfo.desc}</p>
            )}
          </div>
          <div className="detail">
            <h3>Services Offered</h3>
            {isEditing ? (
              <ul>
                {companyInfo.services.map((service, index) => (
                  <li key={index}>
                    <input
                      className="edit-field"
                      name={`services[${index}]`}
                      value={service}
                      onChange={handleChange}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <ul>
                {companyInfo.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="detail">
            <h3>Founder</h3>
            {isEditing ? (
              <input
                className="edit-field"
                name="founder"
                value={companyInfo.founder}
                onChange={handleChange}
              />
            ) : (
              <p>{companyInfo.founder}</p>
            )}
          </div>
          <div className="detail">
            <h3>Employees</h3>
            {isEditing ? (
              <input
                className="edit-field"
                name="employees"
                value={companyInfo.employees}
                onChange={handleChange}
              />
            ) : (
              <p>{companyInfo.employees}</p>
            )}
          </div>
          <div className="detail">
            <h3>Year Established</h3>
            {isEditing ? (
              <input
                className="edit-field"
                name="year"
                value={companyInfo.year}
                onChange={handleChange}
              />
            ) : (
              <p>{companyInfo.year}</p>
            )}
          </div>
          <div className="detail">
            <h3>Location</h3>
            {isEditing ? (
              <input
                className="edit-field"
                name="location"
                value={companyInfo.location}
                onChange={handleChange}
              />
            ) : (
              <p>{companyInfo.location}</p>
            )}
          </div>
          <div className="detail">
            <h3>Email</h3>
            {isEditing ? (
              <input
                className="edit-field"
                name="email"
                value={companyInfo.email}
                onChange={handleChange}
              />
            ) : (
              <p>{companyInfo.email}</p>
            )}
          </div>
        </div>
        <div className="edit-actions">
          {isEditing ? (
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button className="edit-button" onClick={handleEdit}>
              Edit
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompanyProfile;

