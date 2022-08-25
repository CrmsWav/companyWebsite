import React from 'react';
import styled from "styled-components";
import datas from "../../datas/company.json";

interface TeamCardProps {

}

const TeamCardContainer = styled.div`
  border: black solid 1px;
  margin: 50px;
  height: 100%;
`;

const TeamCard: React.FC<TeamCardProps> = () => {
  const teamDatas = datas.company.team;
  console.log("teamDatas => ", teamDatas);

  return (
    <TeamCardContainer>
      <h2>{teamDatas[0].name}</h2>

      <img src={teamDatas[0].avatar} alt="Avatar" />

      <h3>{teamDatas[0].designation}</h3>

      <p>{teamDatas[0].message}</p>

      <p>{teamDatas[0].location}</p>
    </TeamCardContainer>
  )
}

export default TeamCard;
