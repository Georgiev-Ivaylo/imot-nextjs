import Search from "@/components/Search";
import { Suspense } from "react";
import List from "./List";
import { getEstatePages } from "./routes";
import Pagination from "./Pagination";
import ListSkeleton from "./ListSkeleton";

export default async function Page({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const orderBy = searchParams?.order_by || "price";

  return (
    <>
      <h1 className="title">Estates!</h1>
      <Search placeholder="Search by description..." />
      {/* <Suspense key={query + currentPage} fallback={<ListSkeleton />}> */}
      <List query={query} currentPage={currentPage} orderBy={orderBy} />
      {/* </Suspense> */}
      <Pagination />
    </>
  );
}
