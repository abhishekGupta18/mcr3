import { useState } from "react";
import { useSnacksContext } from "./SnacksContext";

export const ProductsList = () => {
  const [search, setSearch] = useState("");

  const {
    products,
    setProducts,
    sortById,
    sortByName,
    sortByWeight,
    sortByCalories,
    sortByPrice,
  } = useSnacksContext();
  const filterBySearch =
    search?.length >= 0
      ? products?.filter((item) =>
          item.product_name.toLowerCase().includes(search.toLocaleLowerCase())
        )
      : products;
  return (
    <div>
      <div className="flex flex-col items-center">
        <h1>Snacks Table</h1>
        <input
          type="text"
          placeholder="filter by name"
          className="border border-solid border-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <table className="flex flex-col justify-center gap-4">
        <tr className="flex  justify-center gap-8 cursor-pointer">
          <th
            className="w-4"
            onClick={(e) => {
              e.preventDefault();
              setProducts(sortById);
            }}
          >
            ID
          </th>
          <th
            className="w-4 mx-8"
            onClick={(e) => {
              e.preventDefault();
              setProducts(sortByName);
            }}
          >
            Product Name
          </th>
          <th
            className="w-4 mx-8"
            onClick={(e) => {
              e.preventDefault();
              setProducts(sortByWeight);
            }}
          >
            Product Weigth
          </th>
          <th
            className="w-4 mx-8"
            onClick={(e) => {
              e.preventDefault();
              setProducts(sortByPrice);
            }}
          >
            Price
          </th>
          <th
            className="w-4 mx-8"
            onClick={(e) => {
              e.preventDefault();
              setProducts(sortByCalories);
            }}
          >
            Calories
          </th>
          <th className="w-8 mx-8">Ingredients</th>
        </tr>

        {filterBySearch.map((item) => (
          <tr key={item.id} className="flex  justify-center gap-8">
            <td className="w-4 mx-8">{item.id}</td>
            <td className="w-4 mx-8">{item.product_name}</td>
            <td className="w-4 mx-8">{item.product_weight}</td>
            <td className="w-4 mx-8">{item.price}</td>
            <td className="w-4 mx-8">{item.calories}</td>
            <td className="w-4 mx-8">{item.ingredients.join(",")}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
