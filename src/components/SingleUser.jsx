import React from 'react'
import styled from 'styled-components'

const SingleUser = ({ user }) => {

    const Container = styled.div`
    padding: 15px 20px;
    display: flex;
    `
    const User = styled.div`
    padding: 20px;
    display: flex;
    background-color: black;
    max-width: 420px;
    border-radius:20px;
    min-width: fit-content;
    `
    const UserInfo = styled.div`
    flex-direction: "column";
    background-color: #dbe333;

    border-radius:10px;
    padding: 15px;
    margin-left: 20px;
    width: 250px;
    `
    const UserImage = styled.img`
    border-radius:100%;
    max-width: 110px;
    justify-content: center;
    align-self: center;
    
    `
    const UserName = styled.div`
    display: flex;
    font-size:20px;
    margin-bottom: 15px;
    font-weight: bold;
    `
    const UserFirstName = styled.div`
    margin-right:10px;
    border-width: 5px;
    border-color: black;
    `
    const UserLastName = styled.div`
    
    `

    return (
        <Container>
            <User>
                <UserImage src={user.picture.large} />
                <UserInfo>
                    <UserName>
                        <UserFirstName>{user.name.first}</UserFirstName>
                        <UserLastName>{user.name.last}</UserLastName>
                    </UserName>

                    <div>{user.phone}</div>
                    <div>{user.email}</div>
                </UserInfo>
            </User>
        </Container>
    )
}
export default SingleUser