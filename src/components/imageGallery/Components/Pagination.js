import React from "react";
import { Pagination } from "@material-ui/lab";

export default function PaginationImages({
  allPagesCount,
  currentPage,
  onChangePageHandler,
}) {
  return (
    <div className="paginationPages">
      <Pagination
        count={Math.ceil(allPagesCount / 12)}
        page={currentPage}
        hideNextButton={true}
        hidePrevButton={true}
        onChange={onChangePageHandler}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
}
