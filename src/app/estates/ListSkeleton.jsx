import ListItem from "./ListItem";

export default async function ListSkeleton() {
  let items = [];
  for (let i = 0; i < 9; ++i) {
    items.push(<ListItem estate={{}} fantomKey={`fantom_${i}`} />);
  }
  return <ul className="box-grid">{items}</ul>;
}
