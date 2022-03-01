import React from 'react';

export default function Random(props) {

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return (
        <div>
            <p>Random value between {props.min} and {props.max} is: {random(props.min, props.max)}</p>
        </div>
    )
}