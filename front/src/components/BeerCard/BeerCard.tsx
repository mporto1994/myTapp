import React from 'react';
import { Beer } from '../../services/getBeers';
import {
    Card,
    BeerImage,
    BreweryImage,
    BeerName,
    BeerStyle,
    BeerPrice,
} from './BeerCard.styles';

interface BeerCardProps {
    beer: Beer;
}

const BeerCard: React.FC<BeerCardProps> = ({ beer }) => {
    return (
        <Card>
            <BeerImage src={beer.beer_image} alt={beer.beer_name} />
            <BeerName>{beer.beer_name}</BeerName>
            <BeerStyle>{beer.beer_style}</BeerStyle>
            <BeerPrice>R$ {(beer.price_ml * 1000).toFixed(2)}/L</BeerPrice>
            <BreweryImage src={beer.brewery_image} alt={beer.brewery} title={beer.brewery} />
        </Card>
    );
};

export default BeerCard;
