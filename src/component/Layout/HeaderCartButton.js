import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

function HeaderCartButton(props) {
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>سبد خرید</span>
            <span className={classes.badge}>3</span>
        </button>
    );
}

export default HeaderCartButton;