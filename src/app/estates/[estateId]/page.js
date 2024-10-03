// "use client";

import { getEstate } from "../routes";

// import { useRouter } from "next/router";

export default function Page({ params }) {
  // const router = useRouter();
  const fullEstate = getEstate(params.estateId);

  return (
    <>
      <h1 className="title">Estate - {params.estateId}!</h1>
      {/* <h1 className="title">Estate - {router.query.estateId}!</h1> */}
    </>
  );
}
