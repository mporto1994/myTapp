import React, { useState, useEffect } from 'react';
import { getBeers, Beer } from '../../services/getBeers';
import BeerCard from '../../components/BeerCard/BeerCard';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import {
    Container,
    CardGrid,
    PaginationButtons,
    Button,
    LogoutButton,
    Header,
    Title,
    TitleDiv
} from './BeerList.styles';

const BeerList: React.FC = () => {
    const [beers, setBeers] = useState<Beer[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }

        const getBeersService = async () => {
            try {
                const beersList = await getBeers(page, 8);
                setBeers(beersList.info.data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                if (err instanceof Error) {
                    setError(err);
                } else {
                    setError(new Error('An unknown error occurred'));
                }
            }
        };

        getBeersService();
    }, [page, navigate]);

    const handleNextPage = () => {
        setPage(page + 1);
    };

    const handlePrevPage = () => {
        setPage(page - 1);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <Container>
            <Header>
                <TitleDiv>
                    <Title>Lista de Cervejas</Title>
                </TitleDiv>
                <LogoutButton onClick={handleLogout}>
                    <FiLogOut size={24} />
                </LogoutButton>
            </Header>
            <PaginationButtons>
                <Button onClick={handlePrevPage} disabled={page === 1}>Anterior</Button>
                <Button onClick={handleNextPage}>Próximo</Button>
            </PaginationButtons>
            <CardGrid>
                {beers.map((beer) => (
                    <BeerCard key={beer.tap_id} beer={beer} />
                ))}
            </CardGrid>
            <PaginationButtons>
                <Button onClick={handlePrevPage} disabled={page === 1}>Anterior</Button>
                <Button onClick={handleNextPage}>Próximo</Button>
            </PaginationButtons>
        </Container>
    );
};

export default BeerList;
