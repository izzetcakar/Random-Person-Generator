import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import SingleUser from './SingleUser'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    `

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, [])
    const fetchUsers = async () => {
        const response = await axios("https://randomuser.me/api/?results=5");
        setUsers(response.data.results);
    }
    return (
        <Container>
            {users.map((user, index) => (
                <SingleUser key={index} user={user} />
            ))}
        </Container>
    )

}

export default UserList