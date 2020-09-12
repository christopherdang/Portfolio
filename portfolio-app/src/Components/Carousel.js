import React from 'react';

import Card from '../Components/Card';

import githublogo from '../Assets/Images/githublogo.png';
import linkedinlogo from '../Assets/Images/linkedinlogo.png';
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'GitHub Account',
                    subTitle: 'My GitHub Account',
                    imgSrc: githublogo,
                    link: 'https://github.com/christopherdang',
                    selected: false
                },
                {
                    id: 1,
                    title: 'LinkedIn Account',
                    subTitle: 'My LinkedIn Account',
                    imgSrc: linkedinlogo,
                    link: 'https://www.linkedin.com/in/christopher-dang-',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        console.log(id);

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;