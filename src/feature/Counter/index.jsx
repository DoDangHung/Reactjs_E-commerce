import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './CounterSlice';
import { makeStyles } from "@mui/styles"

import Button from '@mui/material/Button';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255,105,135,.3)',
        color: 'white',
        height: 30,
        padding: '0 30px'
    },
})
function CounterFeature(props) {
    const classes = useStyles();
    const dispatch = useDispatch()
    const count = useSelector(state => state.count)
    const handleClickIncrease = () => {
        const action = increase();
        dispatch(action);
    }
    const handleClickDecrease = () => {
        const action = decrease();
        dispatch(action);
    }
    return (
        <div>
            Counter Feature: {count}
            <div>
                <Button className={classes.root} onClick={handleClickIncrease}>Increase</Button>
                <Button className={classes.root} onClick={handleClickDecrease}>decrease</Button>
            </div>
        </div>
    );
}

export default CounterFeature;