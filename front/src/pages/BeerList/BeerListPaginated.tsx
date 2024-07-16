import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Beer {
    id: number;
    name: string;
}

const BeerListPaginated: React.FC = () => {
    const [beers, setBeers] = useState<Beer[]>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchBeers = async () => {
            try {
                const response = await axios.get<Beer[]>(`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`);
                setBeers(response.data);
            } catch (err) {
                console.error('Falha ao buscar dados da API Punk', err);
            }
        };

        fetchBeers();
    }, [page]);

    const handleNextPage = () => {
        setPage(page + 1);
    };

    const handlePrevPage = () => {
        setPage(page - 1);
    };

    return (
        <div>
            <h2>Lista de Cervejas</h2>
            <button onClick={handlePrevPage} disabled={page === 1}>Anterior</button>
            <button onClick={handleNextPage}>Próximo</button>
            <ul>
                {beers.map((beer) => (
                    <li key={beer.id}>{beer.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default BeerListPaginated;
