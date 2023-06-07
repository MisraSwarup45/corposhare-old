import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ListCard from './ListCard';
import './ListProjects.scss';

const ListProjects = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Simulating an API call or data fetching
    setTimeout(() => {
      const fetchedData = [
        {
          company: 'ABC Corporation',
          title: 'Web Developer',
          pay: '45000',
          duration: '3 months',
          employee_required: '3',
          skills: 'HTML, CSS, JavaScript',
          description: 'Details about the project',
          email: 'jane.smith@example.com',
          contact_number: '987-654-3210',
        },
        {
          company: 'XYZ Tech Solutions',
          title: 'Data Analyst',
          pay: '55000',
          duration: '6 months',
          employee_required: '5',
          skills: 'SQL, Python',
          description: 'Details about the project',
          email: 'mark.johnson@example.com',
          contact_number: '456-789-1230',
        },
        {
          company: 'PQR Inc.',
          title: 'Graphic Designer',
          pay: '40000',
          duration: '4 months',
          employee_required: '2',
          skills: 'Adobe Photoshop, Illustrator',
          description: 'Details about the project',
          email: 'emily.davis@example.com',
          contact_number: '789-123-4560',
        },
        {
          company: 'Tech Solutions Ltd.',
          title: 'Software Developer',
          pay: '65000',
          duration: '12 months',
          employee_required: '10',
          skills: 'Java, Spring Boot',
          description: 'Details about the project',
          email: 'david.wilson@example.com',
          contact_number: '321-654-9870',
        },
        {
          company: 'ABC Corporation',
          title: 'UI/UX Designer',
          pay: '50000',
          duration: '6 months',
          employee_required: '3',
          skills: 'Adobe XD, Sketch',
          description: 'Details about the project',
          email: 'sara.doe@example.com',
          contact_number: '987-654-3210',
        },
      ];
      

      setData(fetchedData);
      setFilteredData(fetchedData);
      setLoading(false);
    }, 1000); // Simulating a 2-second delay
  }, []);

  useEffect(() => {
    // Filter the data based on the search query
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery, data]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="list-projects">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        {loading ? (
          <div className="loading-indicator">
            <div className="spinner"></div>
            <span>Loading...</span>
          </div>
        ) : (
          <div className="list-projects__container">
            {filteredData.map((item, index) => (
              <ListCard
                key={index}
                company={item.company}
                title={item.title}
                pay={item.pay}
                duration={item.duration}
                employee_required={item.employee_required}
                skills={item.skills}
                description={item.description}
                email={item.email}
                contact_number={item.contact_number}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ListProjects;
