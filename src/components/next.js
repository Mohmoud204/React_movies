import ReactPaginate from 'react-paginate';
const Next = ({getPage,pageconst}) => {
  const handlePageClick = (data) => {
    getPage(data.selected +1)
  }
  const pageCount = pageconst
  return (
    <>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={"pagination justify-content-center p-3"}
        pageClassName={"page-itam"}
        pageLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-itam"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
}
export default Next