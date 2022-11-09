import React from "react";
import classes from "./MealsSummery.module.css";

const MealsSummery = () => {
  return (
    <section className={classes.summary}>
      <h2>انواع غذاهای اصیل ایرانی</h2>
      <p>
        غذاهای سنتی و محلی ایران از ساده ترین آنها گرفته تا پرکارترین شان، جزو
        لذیذترین و خوش طعم ترین غذاهای جهان محسوب می شوند و سرشار از انوع
        ویتامین ها و مواد مغذی مورد نیاز بدن هستند.
      </p>
      <p>بهترین و باکیفیت ترین غذاهای ایرانی را در سایت ما سفارش دهید.</p>
    </section>
  );
};

export default MealsSummery;
