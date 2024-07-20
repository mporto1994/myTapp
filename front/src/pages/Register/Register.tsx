import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RegisterContainer, RegisterForm, Input, Button, BackButton, ErrorMessage, Title, InputBox, ButtonContainer } from './Register.styles';
import { FiArrowLeft } from 'react-icons/fi';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('As senhas não coincidem.');
            return;
        }

        const backendUrl = "http://localhost:3131/users/register";
        try {
            const response = await axios.post<{ token: string; }>(backendUrl, { name, email, password });
            localStorage.setItem('token', response.data.token);
            navigate('/beers');
        } catch (err) {
            setError('Ocorreu um erro ao registrar o usuário.');
        }
    };

    const handleBackClick = () => {
        navigate('/login');
    };

    return (
        <RegisterContainer>
            <Title>Registro de Usuário</Title>
            <RegisterForm onSubmit={handleSubmit}>
                <InputBox>
                    <Input
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Confirme a senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </InputBox>
                <ButtonContainer>
                    <Button primary type="submit">Registrar</Button>
                    <BackButton onClick={handleBackClick}>
                        <FiArrowLeft style={{ marginRight: '8px' }} />
                        Voltar
                    </BackButton>
                </ButtonContainer>
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </RegisterForm>
        </RegisterContainer>
    );
};

export default Register;
