import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Beer {
    id: number;
    name: string;
}

const BeerList: React.FC = () => {
    const [beers, setBeers] = useState<Beer[]>([]);

    useEffect(() => {
        console.log("beers");
        const fetchBeers = async () => {
            try {
                const response = await axios.get<Beer[]>('https://api.punkapi.com/v2/beers');
                setBeers(response.data);
            } catch (err) {
                console.error('Falha ao buscar dados da API Punk', err);
            }
        };

        fetchBeers();
    }, []);

    return (
        <div>
            <h2>Lista de Cervejas</h2>
            <ul>
                {beers.map((beer) => (
                    <li key={beer.id}>{beer.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default BeerList;
