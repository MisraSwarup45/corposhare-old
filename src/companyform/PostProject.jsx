import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import './PostProjects.scss';

const PostProject = () => {
    const [formData, setFormData] = useState({
        photo: '',
        name: '',
        companyName: '',
        mailId: '',
        contactNumber: '',
        jobPosition: '',
        jobDescription: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send POST request with form data
        axios.post('https://example.com/submit', formData)
            .then((response) => {
                console.log(response.data);
                    
                // Handle success or display a success message
            })
            .catch((error) => {
                console.error(error);
                // Handle error or display an error message
            });
    };
    return (
        <div>
            <Navbar />
            <div className="form-container">
                <form onSubmit={handleSubmit} className="form">
                    <input
                        type="text"
                        name="photo"
                        placeholder="Photo URL"
                        value={formData.photo}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="companyName"
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="mailId"
                        placeholder="Email"
                        value={formData.mailId}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="contactNumber"
                        placeholder="Contact Number"
                        value={formData.contactNumber}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="jobPosition"
                        placeholder="Job Position"
                        value={formData.jobPosition}
                        onChange={handleChange}
                    />
                    <textarea
                        name="jobDescription"
                        placeholder="Job Description"
                        value={formData.jobDescription}
                        onChange={handleChange}
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default PostProject;