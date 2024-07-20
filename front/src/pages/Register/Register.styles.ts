import styled from 'styled-components';

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
`;

export const RegisterForm = styled.form`
    width: 300px;
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    width: calc(100% - 20px);
    padding: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
`;

export const Button = styled.button<{ primary?: boolean; }>`
    width: 48%;
    background-color: ${props => props.primary ? '#e0a800' : '#E06A00'};
    color: #fff;
    border: none;
    padding: 12px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

export const BackButton = styled.button`
    background: none;
    border: none;
    color: #E06A00;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-top: 20px;

    &:hover {
        text-decoration: underline;
    }
`;

export const ErrorMessage = styled.p`
    color: #dc3545;
    font-size: 14px;
    margin-top: 5px;
    text-align: center;
`;

export const Title = styled.h2`
    text-align: center;
    margin-bottom: 20px;
    color: #E06A00;
`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
