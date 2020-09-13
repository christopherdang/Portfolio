import React from 'react';

import Hero from '../Components/Hero';
import Content from '../Components/Content';

function Aboutpage(props) {
    
    return(
        <dive>
            <Hero title={props.title} />

            <Content>
                <p><font color="white">My name is Christopher Dang and I am currently majoring in Computer Science at the University of Florida</font></p>
                
                <p><font color="white">
                    I was born in Tampa, Florida and grew up with a loving and supportive family. I grew up playing sports and was on my high school swimming and soccer team.
                </font></p>

                <p><font color="white">
                    I have a passion for computer programming, whether it is back or front-end development.
                    I enjoy every aspect there is to coding and strive to become a more diverse programmer. 
                    For example, on recent projects I have worked on, I was involved in both back-end and front-end aspects. 
                    Additionally, most of the work I've done is due to researching online and learning how to use programs on my own.
                </font></p>
            </Content>
        </dive>
    );

}

export default Aboutpage;