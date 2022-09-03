import ReactPaginate from "react-paginate";
import NextBtn from "./NextBtn";
import PrevBtn from "./PrevBtn";

interface IPaginate{
    clickHandler: any,
    totalPages: number,
    isLoading: boolean
}

export default function Paginate({clickHandler, totalPages, isLoading }: IPaginate) {
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
      />
    </div>
  );
}
