import React ,{Fragment} from 'react';
import mealsImage from '../../assets/pexels-ella-olsson-1640777.jpg';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>منو</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='a table full of delicious food!'/>
            </div>
        </Fragment>
    );
}

export default Header;
