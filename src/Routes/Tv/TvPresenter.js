import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

const TvPresenter = ({ topRated, airingToday, popular, error, loading }) =>
  loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map((show) => (
            <Poster
              title={show.original_name}
              imageUrl={show.poster_path}
              id={show.id}
              key={show.id}
              isMovie={false}
              rating={show.vote_average}
              year={show.first_air_date && show.first_air_date.substring(0, 4)}
            ></Poster>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Shows">
          {popular.map((show) => (
            <Poster
              title={show.original_name}
              imageUrl={show.poster_path}
              id={show.id}
              key={show.id}
              isMovie={false}
              rating={show.vote_average}
              year={show.first_air_date && show.first_air_date.substring(0, 4)}
            ></Poster>
          ))}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today Shows">
          {airingToday.map((show) => (
            <Poster
              title={show.original_name}
              imageUrl={show.poster_path}
              id={show.id}
              key={show.id}
              isMovie={false}
              rating={show.vote_average}
              year={show.first_air_date && show.first_air_date.substring(0, 4)}
            ></Poster>
          ))}
        </Section>
      )}
      {error && <Message text={error} color="#e74c3c" />}
    </Container>
  );

TvPresenter.propTypes = {
  topRated: PropTypes.array,
  airingToday: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TvPresenter;
