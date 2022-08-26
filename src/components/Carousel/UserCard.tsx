import React from 'react';
import styled from "styled-components";
import datas from "../../datas/company.json";

const UserCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50vh;
  background-color: #1976D2;
  border-radius: 10px;
  margin: 0 50px;
  padding: 1.5% 3%;
  font-size: small;
`

const Location = styled.p`
  font-weight: bold;
`;

const Avatar = styled.img`
  border-radius: 10px;
`;

interface UserCardProps {
  current: number;
}

const UserCard: React.FC<UserCardProps> = ({current}) => {
  const usersDatas = datas.company.users;

  return (
    <>
      {usersDatas.map((user, index) => {
        return (
          <UserCardContainer key={index}>
            <h2>{user.name}</h2>

            <Avatar src={user.avatar} alt="Avatar" />

            <h3>{user.designation}</h3>

            <p>{user.message}</p>

            <Location>{user.location}</Location>
          </UserCardContainer>
        )
      })}
    </>
  )
}

export default UserCard;
