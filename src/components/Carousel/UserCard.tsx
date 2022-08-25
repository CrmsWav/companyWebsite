import React from 'react';
import styled from "styled-components";
import datas from "../../datas/company.json";

interface UserCardProps {

}

const UserCardContainer = styled.div`
  background-color: #1976d2;
  border-radius: 10px;
  margin: 0 50px;
  padding: 1.5% 3%;
  font-size: small;
`;

const Location = styled.p`
  font-weight: bold;
`;

const Avatar = styled.img`
  border-radius: 10px;
`;

const UserCard: React.FC<UserCardProps> = () => {
  const usersDatas = datas.company.users;
  console.log("usersDatas => ", usersDatas);

  return (
    <>
      {usersDatas.map((user, index) => {
        return (
          <UserCardContainer>
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
