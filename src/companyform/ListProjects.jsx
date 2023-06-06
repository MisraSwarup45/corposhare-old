import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ListCard from './ListCard';
import './ListProjects.scss';


const ListProjects = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulating an API call or data fetching
    setTimeout(() => {
      const fetchedData = [
        {
          photo: 'https://picsum.photos/300/200',
          name: 'Stiven Doe',
          companyName: 'Stiv Company',
          mailId: 'stiv.doe@example.com',
          contactNumber: '121-451-7891',
          jobPosition: 'Hardware Engineer',
        },
        {
          photo: 'https://picsum.photos/300/200',
          name: 'John Doe',
          companyName: 'Example Company',
          mailId: 'john.doe@example.com',
          contactNumber: '123-456-7890',
          jobPosition: 'Software Engineer',
        },
        {
          photo: 'https://picsum.photos/300/200',
          name: 'Jane Smith',
          companyName: 'Another Company',
          mailId: 'jane.smith@example.com',
          contactNumber: '987-654-3210',
          jobPosition: 'Product Manager',
        },
        {
          photo: 'https://picsum.photos/300/200',
          name: 'Mark Johnson',
          companyName: 'ABC Corporation',
          mailId: 'mark.johnson@example.com',
          contactNumber: '456-789-1230',
          jobPosition: 'Web Developer',
        },
        {
          photo: 'https://picsum.photos/300/200',
          name: 'Emily Davis',
          companyName: 'XYZ Corporation',
          mailId: 'emily.davis@example.com',
          contactNumber: '789-123-4560',
          jobPosition: 'Graphic Designer',
        },
        {
          photo: 'https://picsum.photos/300/200',
          name: 'David Wilson',
          companyName: 'Tech Solutions',
          mailId: 'david.wilson@example.com',
          contactNumber: '321-654-9870',
          jobPosition: 'Data Analyst',
        },
        // Add more data objects as needed
      ];
      setData(fetchedData);
      setLoading(false);
    }, 1000); // Simulating a 2-second delay
  }, []);

  return (
    <>
      <Navbar />
      <div className="list-projects">
        {loading ? (
          <div className="loading-indicator">
            <div className="spinner"></div>
            <span>Loading...</span>
          </div>
        ) : (
          <div className="list-projects__container">
            {data.map((item, index) => (
              <ListCard
                key={index}
                photo={item.photo}
                name={item.name}
                companyName={item.companyName}
                mailId={item.mailId}
                contactNumber={item.contactNumber}
                jobPosition={item.jobPosition}
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
