import * as actionTypes from "./actionTypes";
import axios from "../../axios";
export const addIngredients = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};
export const removeIngredients = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};
export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const initIngredient = () => {
  return (dispatch) => {
    axios
      .get(
        "https://byob-app-3145d-default-rtdb.firebaseio.com/ingredients.json"
      )
      .then((response) => {
        // console.log(response);
        dispatch(setIngredients(response.data));
      });
  };
};
