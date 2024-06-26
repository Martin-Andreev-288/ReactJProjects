import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
// zapochvame da syzdavame stranicite (dolu vdqsno), tova, koeto lipsvashe v nashiq vtori proekt s foruma. Zasega samo logva vyrhu kakvoto sme natisnali (tova e nachaloto)
const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const handlePageChange = (pageNumber) => {
    console.log(pageNumber);
  };

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange("prev");
          }}
        >
          Prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              onClick={() => handlePageChange(pageNumber)}
              key={pageNumber}
              className={`btn btn-xs sm:btn-md border-none join-item ${
                pageNumber === page ? "bg-base-300 border-base-300" : ""
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            handlePageChange("next");
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default PaginationContainer;
