import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './ListCard.scss';

const ListCard = ({ photo, name, companyName, mailId, contactNumber, jobPosition }) => {
  return (
    <div className="list-card">
      <div className="list-card__image-container">
        <img className="list-card__photo" src={photo} alt={name} />
      </div>
      <div className="list-card__info">
        <h2 className="list-card__name">{name}</h2>
        <p className="list-card__position">{jobPosition}</p>
        <p className="list-card__company">{companyName}</p>
        <div className="list-card__contact">
          <div className="list-card__contact-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <p>{mailId}</p>
        </div>
        <div className="list-card__contact">
          <div className="list-card__contact-icon">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <p>{contactNumber}</p>
        </div>
        <button className="list-card__button">Apply Now</button>
      </div>
    </div>
  );
};

ListCard.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  mailId: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  jobPosition: PropTypes.string.isRequired,
};

export default ListCard;
