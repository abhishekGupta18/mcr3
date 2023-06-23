import { useContext, useState } from "react";
import { createContext } from "react";
import { snacks } from "../Data";

export const SnacksContext = createContext();

export const SnacksContextProvider = ({ children }) => {
  const [products, setProducts] = useState(snacks);

  const sortById = [...products]?.sort((a, b) => b.id - a.id);
  const sortByName = [...products].sort(function (a, b) {
    if (a.product_name < b.product_name) {
      return -1;
    }
    if (a.product_name > b.product_name) {
      return 1;
    }
    return 0;
  });

  const sortByWeight = [...products]?.sort(
    (a, b) => parseInt(b.product_weight) - parseInt(a.product_weight)
  );

  const sortByPrice = [...products]?.sort((a, b) => b.price - a.price);
  const sortByCalories = [...products]?.sort((a, b) => b.calories - a.calories);

  return (
    <SnacksContext.Provider
      value={{
        products,
        setProducts,
        sortById,
        sortByName,
        sortByWeight,
        sortByCalories,
        sortByPrice,
      }}
    >
      {children}
    </SnacksContext.Provider>
  );
};

export const useSnacksContext = () => {
  return useContext(SnacksContext);
};
