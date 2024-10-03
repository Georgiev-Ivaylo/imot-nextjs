import { getEstates } from "./routes";
import ListItem from "./ListItem";

export default async function List({ query, currentPage, orderBy }) {
  let estates = await getEstates(query, currentPage, orderBy);
  if (estates.length == 0) {
    return;
  }

  let fantomItems = [];
  if (estates.length <= 8) {
    for (let i = 0; i < 9 - estates.length; ++i) {
      fantomItems.push(
        <ListItem estate={{}} fantomKey={`fantom_${i}`} isHidden={true} />
      );
    }
  }

  return (
    <ul className="box-grid">
      {estates.map((estate) => (
        <ListItem estate={estate} />
      ))}
      {fantomItems}
    </ul>
  );
}
