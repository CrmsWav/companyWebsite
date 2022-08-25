import React from 'react';
import UserCard from "./UserCard";
import styled from "styled-components";

interface CarouselProps {

}

const CarouselContainer = styled.div``;

const CardContainer = styled.div`
  background-color: #cccccc;
  border-radius: 10px;
  margin: 50px;
  padding: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Carousel: React.FC<CarouselProps> = () => {
  return (
    <CarouselContainer>
      <CardContainer>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </CardContainer>
    </CarouselContainer>
  )
}

export default Carousel;
