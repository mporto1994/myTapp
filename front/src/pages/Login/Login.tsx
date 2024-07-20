import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginContainer, Logo, LoginForm, Input, ButtonContainer, Button, ErrorMessage, InputBox } from './Login.styles';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const backendUrl = "http://localhost:3131/users/login";
        try {
            const response = await axios.post<{ token: string; }>(backendUrl, { email, password });
            localStorage.setItem('token', response.data.token);
            navigate('/beers');
        } catch (err) {
            setError('Usuário ou senha incorretos.');
        }
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <LoginContainer>
            <Logo src="https://sede.mytapp.com.br/images/logo-bubble.svg" alt="Logo" />
            <LoginForm onSubmit={handleSubmit}>
                <InputBox>
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
                </InputBox>
                <ButtonContainer>
                    <Button type="submit" primary>Login</Button>
                    <Button type="button" onClick={handleRegisterClick}>Registrar</Button>
                </ButtonContainer>
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </LoginForm>
        </LoginContainer>
    );
};

export default Login;
