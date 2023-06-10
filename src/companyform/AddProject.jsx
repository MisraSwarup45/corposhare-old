import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Addproject.scss";

export default function AddProject() {
    const [project, setProject] = useState({
        id: 1,
        title: "Apple Vision",
        employees_required: 50,
        skills_req: "THree js",
        time_tobe_dedicated: "fshith",
        pay: "dhsmkthnr",
        duration: "6 months",
        description: "eheyet",
        created_at: "2023-06-08",
        updated_at: "2023-06-08",
        image: "Link here",
        email: "jane.smith@example.com",
        contact_number: "987-654-3210",
        company: 1,
      });
      

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProject((prevProject) => ({
            ...prevProject,
            [name]: name === "created_at" || name === "updated_at" ? new Date(value).toISOString().split("T")[0] : value,
        }));
    };

    const handleAddProject = () => {
        // Make the POST request with the project data
        fetch("/api/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(project),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response or perform any additional actions
                console.log("Project added successfully:", data);
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
                            value={project.contact_number}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input_con">
                        <label htmlFor="created_at">Created At</label>
                        <input
                            type="date"
                            id="created_at"
                            name="created_at"
                            value={project.created_at}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input_con">
                        <label htmlFor="updated_at">Updated At</label>
                        <input
                            type="date"
                            id="updated_at"
                            name="updated_at"

                            value={project.updated_at}
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
                                value={project.duration}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="input_wrap">
                            <label htmlFor="employees_required">Employees Required</label>
                            <input
                                type="number"
                                id="employees_required"
                                name="employees_required"
                                value={project.employees_required}
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
                            value={project.skills_req}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input_con textarea_con">
                        <label htmlFor="description">Description</label>
                        <textarea
                            type="text"
                            id="description"
                            name="description"
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
