import ShopDetail from "@/components/(Shop_Components)/ShopDetail";
import { Suspense } from "react";
const getData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");

  const data = res.json();

  return data;
};

export default async function Home() {
  const data = await getData();
  return (
    <Suspense fallback={<div>Loading</div>}>
      <ShopDetail products={data} />
    </Suspense>
  );
}
