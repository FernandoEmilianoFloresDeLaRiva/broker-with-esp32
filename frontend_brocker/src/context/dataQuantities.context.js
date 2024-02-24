import { createContext, useReducer } from "react";
import { reducerDataQuantities } from "./reducers/dataQuantitities.reducer";

const DataQuantitiesContext = createContext();

export function DataQuantitiesProvider() {
  const [] = useReducer(reducerDataQuantities, {
    temperature: 0,
    humidity: 0,
    fotoTransistor: 0,
  });
}
