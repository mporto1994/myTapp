import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

export const TitleDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h2`
    color: #e0a800;
    margin: 0;
`;

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    width: 100%;
    padding: 20px;
`;

export const PaginationButtons = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

export const Button = styled.button`
    margin: 0 10px;
    padding: 10px 20px;
    background-color: #e0a800;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:disabled {
        background-color: #ccc;
    }
`;

export const LogoutButton = styled.button`
    background: none;
    border: none;
    color: #cc5555;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;

    &:hover {
        text-decoration: underline;
    }
`;
