import { Fragment } from "react";
import MealSummary from "./MealSummary";
import AvailableMeal from "./AvailableMeal";

export default function Meal() {
  return (
    <Fragment>
        <MealSummary />
        <AvailableMeal />
    </Fragment>
  );
}
