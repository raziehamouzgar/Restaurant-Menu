import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="تعداد "
        input={{
          id: 'amount_' + props.id,
          type: "number",
          min: "1",
          max: "6",
          step: "1",
          defaultValue: "0",
          
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
