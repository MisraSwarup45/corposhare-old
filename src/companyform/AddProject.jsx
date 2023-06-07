import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Addproject.scss";

export default function AddProject() {
    const [project, setProject] = useState({
        company: "",
        title: "",
        pay: "",
        duration: "",
        employee_required: "",
        skills: "",
        description: "",
        email: "",
        contact_number: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProject((prevProject) => ({
            ...prevProject,
            [name]: value,
        }));
    };

    const handleAddProject = () => {
        // Make the POST request with the project data
        axios
            .post("/api/projects", project)
            .then((response) => {
                // Handle the response or perform any additional actions
                console.log("Project added successfully:", response.data);
            })
            .catch((error) => {
                // Handle any errors
                console.error("Error adding project:", error);
            });
    };

    return (
        <>
            <Navbar />
            <div className="main_add_project">
                <h2>Add Project</h2>
                <div className="project_details">
                    <div className="input_con">
                        <label htmlFor="company">Company</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="eg: Amazon"
                            value={project.company}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input_con">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="eg: Project Title"
                            value={project.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input_con">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="eg: example@example.com"
                            value={project.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input_con">
                        <label htmlFor="contact_number">Contact Number</label>
                        <input
                            type="tel"
                            id="contact_number"
                            name="contact_number"
                            placeholder="eg: 123-456-7890"
                            value={project.contact_number}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="multiple_con">
                        <div className="input_wrap">
                            <label htmlFor="pay">Pay</label>
                            <input
                                type="text"
                                id="pay"
                                name="pay"
                                placeholder="eg: 50000"
                                value={project.pay}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input_wrap">
                            <label htmlFor="duration">Duration</label>
                            <input
                                type="text"
                                id="duration"
                                name="duration"
                                placeholder="eg: 2 months"
                                value={project.duration}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input_wrap">
                            <label htmlFor="employee_required">Employee Required</label>
                            <input
                                type="number"
                                id="employee_required"
                                name="employee_required"
                                placeholder="eg: 10"
                                value={project.employee_required}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="input_con">
                        <label htmlFor="skills">Skills</label>
                        <input
                            type="text"
                            id="skills"
                            name="skills"
                            placeholder="eg: Reactjs"
                            value={project.skills}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input_con textarea_con">
                        <label htmlFor="description">Description</label>
                        <textarea
                            type="text"
                            id="description"
                            name="description"
                            placeholder="eg: Details about the project"
                            value={project.description}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="input_con button_con">
                        <button onClick={handleAddProject}>Add Project</button>
                        <button>Cancel</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
