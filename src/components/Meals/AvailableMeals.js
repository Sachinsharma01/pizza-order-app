import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useState, useEffect } from "react";
//! uploaded to firebase

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const data = await fetch(
        "https://react-pizza-order-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await data.json();
      setIsLoading(false);
      const loadedMeals = [];
      for (const i in responseData) {
        loadedMeals.push({
          id: i,
          name: responseData[i].name,
          description: responseData[i].description,
          price: responseData[i].price,
        });
      }
      setMeals(loadedMeals);
    };
    fetchMeals();

    return () => {};
  }, []);

  if (isLoading) {
    return (
      <section>
        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "30px",
            color: "white",
          }}
        >
          Loading...
        </p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
