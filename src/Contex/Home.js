import { useSnacksContext } from "./SnacksContext";

export const ProductsList = () => {
  const {
    products,
    setProducts,
    sortById,
    sortByName,
    sortByWeight,
    sortByCalories,
    sortByPrice,
  } = useSnacksContext();
  return (
    <div>
      <div>
        <h1>Snacks Table</h1>
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
          <th className="w-4 mx-8">Ingredients</th>
        </tr>

        {products.map((item) => (
          <tr key={item.id} className="flex  justify-center gap-8">
            <td className="w-4 mx-8">{item.id}</td>
            <td className="w-4 mx-8">{item.product_name}</td>
            <td className="w-4 mx-8">{item.product_weight}</td>
            <td className="w-4 mx-8">{item.price}</td>
            <td className="w-4 mx-8">{item.calories}</td>
            <td className="w-4 mx-8">{item.ingredients}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
