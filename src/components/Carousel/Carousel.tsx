import React from 'react';
import UserCard from "./UserCard";
import styled from "styled-components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import datas from "../../datas/company.json";

const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  // background-color: ${props => props.className === 'activeCard' ? '#1976D2' : 'rgba(0,14,98,0.5)'};
  // transform: ${props => props.className === 'activeCard' ? 'translateX(0)' : 'translateX(-100%)'};
  // display: ${props => props.className === 'activeCard' ? 'flex' : 'none'};
  // flex-direction: ${props => props.className === 'activeCard' ? 'column' : 'row'};
  // justify-content: ${props => props.className === 'activeCard' ? 'center' : 'flex-start'};
  
  background-color: black;
  border-radius: 10px;
  margin: 50px;
  padding: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const LeftArrowButton = styled.button`
  position: absolute;
  top: 50%;
  left: 70px;
  border-radius: 10px;
  border: none;
  background-color: #282c34;
`;

const RightArrowButton = styled.button`
  position: absolute;
  top: 50%;
  right: 70px;
  border-radius: 10px;
  border: none;
  background-color: #282c34;
`;

interface CarouselProps {

}

const Carousel: React.FC<CarouselProps> = () => {
  const [current, setCurrent] = React.useState(0);
  const users = datas.company.users;

  const prevCard = () => {
    setCurrent(current === 0 ? users.length - 1 : current - 1);
  }

  const nextCard = () => {
    setCurrent(current === users.length - 1 ? 0 : current + 1);
  }

  if (!Array.isArray(users) || users.length <= 0){
    return null;
  }

  return (
    <CarouselContainer>
      <LeftArrowButton>
        <ArrowBackIcon onClick={prevCard} sx={{fontSize: "xxx-large", color: "white"}} />
      </LeftArrowButton>

      <RightArrowButton>
        <ArrowForwardIcon onClick={nextCard} sx={{fontSize: "xxx-large", color: "white"}} />
      </RightArrowButton>

      <CardContainer>
        <UserCard current={current} />
      </CardContainer>
    </CarouselContainer>
  )
}

export default Carousel;
