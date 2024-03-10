import ShopDetail from "@/components/(Shop_Components)/ShopDetail";

const getData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");

  const data = res.json();

  return data;
};

export default async function Home() {
  const data = await getData();
  return (
    <>
      <ShopDetail products={data} />
    </>
  );
}
