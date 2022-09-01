import ReactPaginate from "react-paginate";
import NextBtn from "./NextBtn";
import PrevBtn from "./PrevBtn";

interface IPaginate{
    clickHandler: any,
    totalPages: number
}

export default function Paginate({clickHandler, totalPages }: IPaginate) {
  return (
    <div className="paginate">
      <ReactPaginate
        breakLabel="..."
        nextLabel={<NextBtn/>}
        onPageChange={clickHandler}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        previousLabel={<PrevBtn/>}
      />
    </div>
  );
}
