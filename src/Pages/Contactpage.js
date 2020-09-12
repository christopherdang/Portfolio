import React from 'react';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/Button';

import Hero from '../Components/Hero';
import Content from '../Components/Content';
import Axios from 'axios';

class Contactpage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state={
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {
    
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true,
        });

        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })

            .catch(err => {
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })
    } 

    render() {
        return(
            <div>
                <Hero title={this.props.title} />

                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name"><font color="white">Full Name</font></Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email"><font color="white">Email</font></Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message"><font color="white">Message</font></Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}

                        <p className="contact-spacing" ><font color="white">Contact Info</font></p>
                        <p className="contact-spacing-less"><font color="white">Email: officialchristopherdang@gmail.com</font></p>
                        <p className="contact-spacing-less"><font color="white">Cell: (813)424-9928</font></p>
                    </Form>
                </Content>
            </div>
        );
    }

}

export default Contactpage;