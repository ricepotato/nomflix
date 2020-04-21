import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 10px;
`;

const Title = styled.h3`
  font-size: 18px;
`;

const SeasonTitle = styled.h4`
  margin: 4px 0px;
  font-size: 14px;
`;

const Poster = styled.img`
  width: 150px;
`;

const SeasonList = styled.ol`
  display: flex;
`;

const SeasonItem = styled.li`
  margin-right: 5px;
`;

const Seasons = ({ seasons }) => (
  <Container>
    <Title>Seasons</Title>
    <SeasonList>
      {seasons.map((season) => (
        <SeasonItem>
          <SeasonTitle>{season.name}</SeasonTitle>
          <Poster
            src={`https://image.tmdb.org/t/p/original${season.poster_path}`}
          ></Poster>
        </SeasonItem>
      ))}
    </SeasonList>
  </Container>
);

export default Seasons;
