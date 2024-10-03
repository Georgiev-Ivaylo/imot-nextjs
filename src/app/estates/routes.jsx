// const publicHost = "http://127.0.0.1:8000/api";
// const localHost = "http://imot-server-1:80/api";
const publicHost = "http://127.0.0.1:8181/api";
const localHost = "http://imot-go-1:8181/api";

export async function getEstates(
  query = "",
  currentPage = 1,
  orderBy = "price"
) {
  const url = `${localHost}/estates`;

  const response = await fetch(
    `${url}?page=${currentPage}&query=${query}&order_by=${orderBy}`
  );
  const data = (await response.json()) ?? [];

  return data["data"];
}

export async function getEstatePages(query, currentPage = 1) {
  let url = `${publicHost}/estates?get_pages=true&page=${currentPage}`;
  if (query !== null) {
    url += `&query=${query}`;
  }

  const response = await fetch(url);
  const data = (await response.json()) ?? [];

  return data["meta"]["last_page"];
}

export async function getEstate(estateId) {
  const url = `${localHost}/estates/${estateId}`;

  const response = await fetch(url);
  const data = (await response.json()) ?? [];
  console.log(data);

  return data["data"];
}
