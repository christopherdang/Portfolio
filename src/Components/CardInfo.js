import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="c-card-info" style={style}>
            <p className="c-card-title"><font color="white">{props.title}</font></p>
            <a href={props.link} target=" blank " rel="noopener noreferrer">View</a>
        </animated.div>
    );

}

export default CardInfo;