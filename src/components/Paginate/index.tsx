import ReactPaginate from "react-paginate";
import NextBtn from "./NextBtn";
import PrevBtn from "./PrevBtn";

interface IPaginate{
    clickHandler: any,
    totalPages: number,
    isLoading: boolean,
    page: number
}

export default function Paginate({clickHandler, totalPages, isLoading, page }: IPaginate) {
  return (
    <div className={`paginate ${isLoading ? 'paginate-loading':''}`}>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<NextBtn/>}
        onPageChange={clickHandler}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        previousLabel={<PrevBtn/>}
        renderOnZeroPageCount={undefined}
        forcePage={page - 1}
      />
    </div>
  );
}
