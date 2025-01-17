import axios from "axios";

// ================= Products Data Fetching Start here ===============
export async function productsData() {
  const products = await axios.get(
    // "https://fakestoreapiserver.vercel.app/amazonproducts"
     "https://fakestoreapi.com/products"
  );
  return products;
}
// ================= Products Data Fetching End here =================