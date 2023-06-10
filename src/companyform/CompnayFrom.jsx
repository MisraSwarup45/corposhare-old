import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import Navbar from './Navbar';
import Footer from './Footer';
import './CompanyForm.scss';

const CompanyForm = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const [selectedOption, setSelectedOption] = useState([]);
  const [image, setImage] = useState('');
  const [userId, setUserId] = useState('');
  const [info, setInfo] = useState({
    compname: '',
    email: '',
    location: '',
    founder: '',
    employees: '',
    year: '',
    valuation: '',
    desc: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // useEffect(() => {
  //   const token = Cookies.get('accesstoken');
  //   if (token) {
  //     const decoded = jwt_decode(token);
  //     setUserId(decoded.user_id);
  //   }
  // }, []);

  const handleChange = (e) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      name: info.compname,
      logo: image,
      email: info.email,
      location: info.location,
      founder: info.founder,
      employees: info.employees,
      year: info.year,
      valuation: info.valuation,
      services: selectedOption.map((option) => option.value),
      desc: info.desc,
    };

    console.log(data);

    try {
      const response = await fetch('/api/your-endpoint', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Application submitted successfully!');
        // Reset form and state
        setInfo({
          compname: '',
          email: '',
          location: '',
          founder: '',
          employees: '',
          year: '',
          valuation: '',
          desc: '',
        });
        setSelectedOption([]);
        setImage('');
        setErrorMessage('');
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.log('Error:', error.message);
      setErrorMessage('Error occurred');
    }

    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="main-company-form">
        <div className="company-from-wrapper">
          <div className="company-from-alpha">
            <h3>Register Here</h3>
            <h4>
              Start your <br />
              journey with us.
            </h4>
            <p>Discover the world's best community for freelancers.</p>
          </div>

          <div className="company-from-beta">
            <form onSubmit={handleSubmit}>
              <div className="from-beta-name">
                <div className="div1">
                  <label htmlFor="company-name">Company Name</label>
                  <br />
                  <input
                    type="text"

                    id="company-name"
                    name="compname"
                    required
                    onChange={handleChange}
                    placeholder="Eg: Cubix"
                  />
                </div>
                <div className="div2">
                  <label htmlFor="images">Logo</label>
                  <br />
                  <input
                    type="file"
                    id="images"
                    accept="image/*"
                    required
                    onChange={handleImageChange}
                  />
                </div>
              </div>
              <div className="from-beta-email">
                <div className="div1">
                  <label htmlFor="company-email">Email</label>
                  <br />
                  <input
                    type="text"
                    id="company-email"
                    name="email"
                    required
                    onChange={handleChange}
                    placeholder="Eg: info@cubix.com"
                  />
                </div>
                <div className="div2">
                  <label htmlFor="company-location">Location</label>
                  <br />
                  <input
                    type="text"
                    id="company-location"
                    name="location"
                    required
                    onChange={handleChange}
                    placeholder="Eg: Delhi"
                  />
                </div>
              </div>
              <div className="from-beta-details">
                <div className="div1">
                  <label htmlFor="company-founder">Founder Name</label>
                  <br />
                  <input
                    type="text"
                    id="company-founder"
                    name="founder"
                    required
                    onChange={handleChange}
                    placeholder="Eg: John"
                  />
                </div>
                <div className="detail-wrapper">
                  <div className="div2">
                    <label htmlFor="company-services">No. of Employees</label>
                    <br />
                    <input
                      type="number"
                      id="company-services"
                      name="employees"
                      required
                      onChange={handleChange}
                      placeholder="Eg: 50"
                    />
                  </div>
                  <div className="div3">
                    <label htmlFor="company-year">Establishment Year</label>
                    <br />
                    <input
                      type="number"
                      id="company-year"
                      name="year"
                      required
                      onChange={handleChange}
                      placeholder="Eg: 2022"
                    />
                  </div>

                </div>
              </div>
              <div className="div4">
                <label htmlFor="company-valuation">Valuation</label>
                <br />
                <input
                  type="text"
                  id="company-valuation"
                  name="valuation"
                  required
                  onChange={handleChange}
                  placeholder="Eg: $1,000,000"
                />
              </div>
              <div className="from-beta-dropdown">
                <label htmlFor="company-services">Services Offered</label>
                <div className="company-services-dropdown">
                  <Select
                    required={true}
                    isMulti={true}
                    onChange={(selectedOptions) =>
                      setSelectedOption(selectedOptions)
                    }
                    options={options}
                  />
                </div>
              </div>

              <div className="from-beta-textarea">
                <label htmlFor="text-desc">Description</label>
                <br />
                <textarea
                  id="text-desc"
                  name="desc"
                  required
                  onChange={handleChange}
                  placeholder="Write something about your company"
                />
              </div>

              <div className="from-beta-textarea-onsubmit">
                <input type="submit" name="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompanyForm;