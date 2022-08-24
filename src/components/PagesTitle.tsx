import React from "react";
import styled from "styled-components";

interface TitleProps {
  name: string;
}

const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;

const PagesTitle: React.FC<TitleProps> = ({name}) => {
  return (
    <div>
      <Title>{name}</Title>
    </div>
  )
}

export default PagesTitle;
