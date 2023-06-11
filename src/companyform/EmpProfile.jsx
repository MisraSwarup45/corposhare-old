import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const EmpProfile = () => {
    const [employee, setEmployee] = useState(null);
    const { id } = useParams();
    // console.log(id);

    useEffect(() => {
        // Fetch data from the API

        fetch(`http://3.129.63.163/api/v1/employee/${id}`)
            .then(response => response.json())
            .then(data => {
                setEmployee(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleDelete = (e) => {
        e.preventDefault();
        console.log('Delete button clicked!');
        fetch(`http://3.129.63.163/api/v1/employee/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employee),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Employee deleted successfully:', data);
                setEmployee({
                    name: "",
                    email: "",
                    profile_pic: "",
                    age: "",
                    sex: "",
                    education: "",
                    skills: "",
                    experience: "",
                    resume: "",
                    department: "",
                    contact: "",
                    hire_date: "",
                    company: "",
                });
            })
            .catch((error) => {
                console.error('Error:', error);
            }
            );


    };

    if (!employee) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Employee Profile</h2>
            <p>Name: {employee.name}</p>
            <p>Email: {employee.email}</p>
            <img src={employee.profile_pic} alt="Profile Picture" />
            <p>Age: {employee.age}</p>
            <p>Sex: {employee.sex}</p>
            <p>Education: {employee.education}</p>
            <p>Skills: {employee.skills}</p>
            <p>Experience: {employee.experience} years</p>
            <p>Resume: <a href={employee.resume}>Download</a></p>
            <p>Department: {employee.department}</p>
            <p>Contact: {employee.contact}</p>
            <p>Hire Date: {employee.hire_date}</p>
            <p>Company: {employee.company}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default EmpProfile;
