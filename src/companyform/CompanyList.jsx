import React, { useState, useEffect } from 'react';
import './CompanyList.scss';

const CompanyList = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://3.145.60.152/api/v1/companies/');
                const fetchedData = await response.json();

                setData(fetchedData);
                setLoading(false);
            } catch (error) {
                console.error('An error occurred while fetching the data.', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="company-list">
            {loading ? (
                <div className="loading-indicator">Loading...</div>
            ) : (
                <div className="company-list__container">
                    {
                        data.map((company) => (
                            <div className="company-card" key={company.id}>
                                <div className="logo">
                                    <img src={company.logo} alt="Company Logo" />
                                </div>
                                <div className="details">
                                    <h2>{company.company_name}</h2>
                                    <p>{company.description}</p>
                                    <p>Services Offered: {company.services_offered}</p>
                                    <p>Year Established: {company.year_established}</p>
                                    <p>Number of Employees: {company.employees}</p>
                                    <p>Valuation: {company.valuation}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default CompanyList;
