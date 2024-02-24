import { DataQuantitiesActions } from "../actions/dataQuantities.actions";

export function reducerDataQuantities(state, action) {
  switch (action.type) {
    case DataQuantitiesActions.setTemperature: {
      const { content } = action;
      return {
        ...state,
        temperature: content,
      };
    }
    case DataQuantitiesActions.setHumidity: {
      const { content } = action;
      return {
        ...state,
        humidity: content,
      };
    }
    case DataQuantitiesActions.setFotoTransistor: {
      const { content } = action;
      return {
        ...state,
        fotoTransistor: content,
      };
    }
  }
}
