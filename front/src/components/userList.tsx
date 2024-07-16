import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
    id: number;
    name: string;
    email: string;
}

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get<User[]>('http://localhost:3000/users');
                setUsers(response.data);
            } catch (err) {
                console.error('Falha ao buscar usuários', err);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Lista de Usuários</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        Nome: {user.name}, Email: {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
