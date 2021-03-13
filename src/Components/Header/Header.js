import React from 'react';
import {Card} from 'react-bootstrap';
import HeadImg from '../../images/Header.png'
import './Header.css'

const Header = () => {
    return (
        <Card className="text-white text-center header">
            <Card.Img src={HeadImg} alt="Card image" />
            <Card.ImgOverlay>
                <h1>Soccer Lense</h1>
            </Card.ImgOverlay>
        </Card>
    );
};

export default Header;