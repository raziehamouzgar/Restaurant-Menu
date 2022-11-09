import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "قرمه سبزی",
    description: "با برنج ایرانی باکیفیت",
    price: 80,
  },
  {
    id: "m3",
    name: " قیمه",
    description: "با برنج ایرانی باکیفیت",
    price: 70,
  },
  {
    id: "m3",
    name: " فسنجان",
    description: "با برنج ایرانی باکیفیت",
    price: 75,
  },
  {
    id: "m4",
    name: " ته چین",
    description: "با برنج ایرانی باکیفیت",
    price: 80,
  },
  {
    id: "m5",
    name: " کباب",
    description: "با برنج ایرانی باکیفیت",
    price: 90,
  },
  {
    id: "m6",
    name: " جوجه کباب",
    description: "با برنج ایرانی باکیفیت",
    price: 70,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
