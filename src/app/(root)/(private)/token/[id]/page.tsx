"use client";

import { useParams } from "next/navigation";

const TokenDetailPage = () => {
  const { id } = useParams();
  console.log(id);

  return <div>TokenDetailPage</div>;
};

export default TokenDetailPage;
