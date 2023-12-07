import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = Array.from({ length: Math.ceil(totalProducts / productsPerPage) }, (_, index) => index + 1);

  return (
    <div className="pagination">
      {pageNumbers.map(number => (
        <button key={number} onClick={() => paginate(number)}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;