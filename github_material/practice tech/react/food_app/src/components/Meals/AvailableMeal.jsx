import React, { useState, useEffect } from "react";

import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

import classes from "./AvailableMeal.module.css";
import useHttp from "./../hooks/use-http";

export default function AvailableMeal() {
  const [items, setItems] = useState([]);
  const { isLoading, isError, requester } = useHttp();

  function fetchItems(data) {
    console.dir(data);
    let allItems = [];

    for (let key in data) {
      allItems.push({ id: key, ...data[key] });
    }
    setItems(allItems);
  }

  useEffect(() => {
    requester(
      {
        url: `${process.env.REACT_APP_DB}/items.json`,
        body: {},
      },
      fetchItems
    );
  }, []);

  return (
    <Card className={classes.meals}>
      <ul>
        {isError && <p>Something went wrong! Please reload the page</p>}
        {!isError && isLoading && <p>Loading...</p>}
        {!isLoading &&
          !isError &&
          items.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
      </ul>
    </Card>
  );
}
