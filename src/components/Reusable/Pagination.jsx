import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  paginate,
  prevIcon,
  nextIcon,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination flex justify-center gap-2 items-center">
      <li className="page-item flex items-center">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="page-link"
        >
          <img src={prevIcon} alt="Previous" />
        </button>
      </li>
      {pageNumbers.map((number) => (
        <li key={number} className="page-item flex items-center">
          <button
            onClick={() => paginate(number)}
            className={`page-link ${
              currentPage === number ? 'active' : ''
            }`}
          >
            {number}
          </button>
        </li>
      ))}
      <li className="page-item flex items-center">
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === pageNumbers.length}
          className="page-link"
        >
          <img src={nextIcon} alt="Next" />
        </button>
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  prevIcon: PropTypes.string.isRequired,
  nextIcon: PropTypes.string.isRequired,
};

export default Pagination;