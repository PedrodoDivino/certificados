import PropTypes from 'prop-types';

export default function Pagination({ pages, currentPage, setCurrentPage }) {
  return (
    <div className="text-center">
      {Array.from({ length: pages }, (_, index) => (
        <button
          value={index}
          onClick={(e) => setCurrentPage(Number(e.target.value))}
          className={`m-1 ${
            index === currentPage ? 'bg-blue-600 text-gray-50' : 'bg-transparent hover:bg-blue-500'
          } text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded`}
          key={index}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
