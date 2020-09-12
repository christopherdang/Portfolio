import React from 'react';

import Hero from '../Components/Hero';
import Content from '../Components/Content';

function Aboutpage(props) {
    
    return(
        <dive>
            <Hero title={props.title} />

            <Content>
                <p>My name is Christopher Dang and I am currently majoring in Computer Science at the University of Florida</p>

                <p>I have a passion for computer programming, whether it is back or front-end development. </p>
            </Content>
        </dive>
    );

}

export default Aboutpage;