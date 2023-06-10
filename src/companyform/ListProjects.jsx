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
          id: 1,
          title: "Web Development Project",
          employees_required: 3,
          skills_req: "HTML, CSS, JavaScript",
          time_tobe_dedicated: "20 hours per week",
          pay: "$30 per hour",
          duration: "3 months",
          description: "Creating a responsive website for a client",
          created_at: "2023-06-08",
          updated_at: "2023-06-08",
          image: "https://example.com/project-image.jpg",
          email: "client@example.com",
          contact_number: "123-456-7890",
          company: 1,
          location: "New York City",
          category: "Web Development",
        },
        {
          id: 2,
          title: "Mobile App Development",
          employees_required: 5,
          skills_req: "iOS, Android, React Native",
          time_tobe_dedicated: "Full-time",
          pay: "Negotiable",
          duration: "6 months",
          description: "Building a cross-platform mobile app for a startup",
          created_at: "2023-06-08",
          updated_at: "2023-06-08",
          image: "https://example.com/app-icon.png",
          email: "startup@example.com",
          contact_number: "987-654-3210",
          company: 2,
          location: "San Francisco",
          category: "Mobile App Development",
        },
        {
          id: 3,
          title: "Logo Design Project",
          employees_required: 1,
          skills_req: "Adobe Illustrator, Branding",
          time_tobe_dedicated: "Part-time",
          pay: "$500",
          duration: "2 weeks",
          description: "Creating a unique logo for a new business",
          created_at: "2023-06-08",
          updated_at: "2023-06-08",
          image: "https://example.com/logo-design.jpg",
          email: "business@example.com",
          contact_number: "555-123-4567",
          company: 3,
          location: "London",
          category: "Graphic Design",
        },
        {
          id: 4,
          title: "Blog Content Writing",
          employees_required: 2,
          skills_req: "SEO, Copywriting",
          time_tobe_dedicated: "Flexible",
          pay: "Per article",
          duration: "Ongoing",
          description: "Producing engaging blog articles for a digital agency",
          created_at: "2023-06-08",
          updated_at: "2023-06-08",
          image: "https://example.com/blog-header.jpg",
          email: "agency@example.com",
          contact_number: "111-222-3333",
          company: 4,
          location: "Remote",
          category: "Content Writing",
        },
        // Add more projects here
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
                employee_required={item.employees_required}
                skills={item.skills_req}
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
