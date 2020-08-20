import React from 'react';
import styled from 'styled-components';

const Header = styled.h2`
    font-size: 2.5rem;
    color: white;
    text-shadow: 2px 2px 4px #1eff00;
    font-weight: bold;
    `

const Image = styled.img`
    margin-left: 50px;
    align-items: center;
    border: 3px solid black;
    box-shadow: 0 10px 50px rgba(10, 42, 219, 1);`

const Paragraphs = styled.p`
    font-weight: bold;
    text-shadow: 2px 2px 4px #1eff00;
    font-size: 1.1rem;
    margin-right: 30px;`

const CharCard = props => {
    return (
        <div className="character-container">
            <Image src={props.img} />
            <div className="character-info">
                <Header>{props.name}</Header>
                    <Paragraphs>Species: {props.species} </Paragraphs>
                    <Paragraphs>Gender: {props.gender} </Paragraphs>
                    <Paragraphs>Origin: {props.origin} </Paragraphs>
                    <Paragraphs>Whereabouts: {props.location} </Paragraphs>
            </div>
        </div>
    );
};

export default CharCard;