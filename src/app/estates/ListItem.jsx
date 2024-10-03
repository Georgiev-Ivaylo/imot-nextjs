import Link from "next/link";

export default async function ListItem({ estate, fantomKey, isHidden }) {
  return (
    <li
      key={estate.id ?? fantomKey}
      className={`box overflow-hidden ${isHidden ? "fantom" : ""}`}
    >
      <Link href={`/estates/${estate.id}`}>
        <h4 className="box-title">{estate.price ?? "..."}</h4>
        {estate.building_size && (
          <div>
            <div className="box-details">
              <p className="box-line">Rooms: {estate.rooms}</p>
              <p className="box-line">Baths: {estate.bathrooms}</p>
              <p className="box-line">Space: {estate.building_size}</p>
            </div>
            <p className="box-line-clamp">{estate.description}</p>
          </div>
        )}
        {(!estate.building_size || fantomKey) && (
          <div>
            <div className="box-details">
              {estate.land_size && (
                <p className="box-line col-span-2">
                  Land: {estate.land_size}&nbsp;
                </p>
              )}
              {!estate.land_size && <p className="box-line">&nbsp;</p>}
              <p className="box-line">&nbsp;</p>
              <p className="box-line">&nbsp;</p>
            </div>
            <p className="box-line-clamp">{estate.description ?? ""}&nbsp;</p>
          </div>
        )}
      </Link>
    </li>
  );
}
