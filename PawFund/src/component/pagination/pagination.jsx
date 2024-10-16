import "./pagination.css";

const pagination = ({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  let page = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    page.push(i);
  }
  return (
    <div className="pagination">
      {page.map((page, index) => {
        return (
          <button
            className={page == currentPage ? "active" : ""}
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default pagination;
