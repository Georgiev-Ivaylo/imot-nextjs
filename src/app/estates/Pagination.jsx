"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getEstatePages } from "./routes";
import { useState, useEffect } from "react";

export default function Pagination() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;
  const [totalPages, setTotalPages] = useState(null);

  async function updatePages(searchParams) {
    const totalPages = await getEstatePages(
      searchParams.get("query"),
      searchParams.get("page")
    );
    setTotalPages(totalPages);
  }

  if (totalPages === null) {
    updatePages(searchParams);
  }

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());

    router.push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    console.log(searchParams);
    if (currentPage === 1) {
      console.log("searchParams");
      updatePages(searchParams);
    }
  }, [searchParams]);

  if (totalPages <= 1) {
    return;
  }

  return (
    <div className="pag-grid">
      {currentPage >= 2 && (
        <span
          onClick={() => createPageURL(currentPage - 1)}
          className="pag-btn left-arrow"
        ></span>
      )}
      {currentPage >= 2 && (
        <span
          onClick={() => createPageURL(currentPage - 1)}
          className="pag-btn"
        >
          {" "}
          {currentPage - 1}{" "}
        </span>
      )}
      <span className="pag-btn active"> {currentPage} </span>
      {currentPage <= totalPages - 1 && (
        <span
          onClick={() => createPageURL(currentPage + 1)}
          className="pag-btn"
        >
          {" "}
          {currentPage + 1}{" "}
        </span>
      )}
      {currentPage <= totalPages - 2 && (
        <span
          onClick={() => createPageURL(currentPage + 2)}
          className="pag-btn"
        >
          {" "}
          {currentPage + 2}{" "}
        </span>
      )}
      {currentPage <= totalPages - 1 && (
        <span
          onClick={() => createPageURL(currentPage + 1)}
          className="pag-btn right-arrow"
        ></span>
      )}
    </div>
  );
}
