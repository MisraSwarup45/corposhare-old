import React, { useState, useEffect } from 'react';
import './EmpList.scss';
import Navbar from './Navbar';
import Footer from './Footer';

const EmpList = () => {
  const [employees, setEmployees] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://18.118.164.38/api/v1/employee/1');
  //       const data = await response.json();
  //       setEmployees(data);
  //     } catch (error) {
  //       console.error('An error occurred while fetching the data.', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  console.log(employees);

  // Sample data for testing
  const sampleData = [
    {
      id: 1,
      name: 'Mridul Singhal',
      email: 'mridulsinghal474@gmail.com',
      profile_pic: 'https://loremflickr.com/320/320',
      age: 20,
      sex: 'Male',
      education: 'B.tech',
      skills: 'vneujgberubguerbg',
      experience: 2,
      resume: 'https://example.com/resume1.pdf',
      department: 'CSE',
      contact: 'erheh5reheh',
      hire_date: '2023-06-10',
      company: 1,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      profile_pic: 'https://loremflickr.com/320/320',
      age: 28,
      sex: 'Female',
      education: 'B.Sc.',
      skills: 'Programming, Problem-solving, Teamwork',
      experience: 5,
      resume: 'https://example.com/resume2.pdf',
      department: 'IT',
      contact: '987-654-3210',
      hire_date: '2020-09-22',
      company: 1,
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mikejohnson@example.com',
      profile_pic: 'https://loremflickr.com/320/320',
      age: 35,
      sex: 'Male',
      education: 'Ph.D.',
      skills: 'Research, Data Analysis, Technical Writing',
      experience: 10,
      resume: 'https://example.com/resume3.pdf',
      department: 'Research and Development',
      contact: '555-123-4567',
      hire_date: '2015-06-10',
      company: 2,
    },
  ];

  useEffect(() => {
    setEmployees(sampleData);
  }, []);

  return (
    <div>
    {/* <Navbar /> */}
    <h1 className='emp-list'>Employee List</h1>
    <div className="employee-list">
      {employees.map((employee) => (
        <div className="employee-card" key={employee.id}>
          <div className="employee-ino">
            <div className="employee-logo">
              <img src={employee.profile_pic} alt="Profile Pic" />
            </div>
            <div className="employee-details">
              <h2>{employee.name}</h2>
              <p>Email: {employee.email}</p>
              <p>Age: {employee.age}</p>
              <p>Sex: {employee.sex}</p>
              <p>Education: {employee.education}</p>
              <p>Skills: {employee.skills}</p>
              <p>Experience: {employee.experience}</p>
              <p>
                Resume: <a href={employee.resume}>Link</a>
              </p>
              <p>Department: {employee.department}</p>
              <p>Contact: {employee.contact}</p>
              <p>Hire Date: {employee.hire_date}</p>
              <p>Company: {employee.company}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    {/* <Footer /> */}
  </div>
  );
};

export default EmpList;
