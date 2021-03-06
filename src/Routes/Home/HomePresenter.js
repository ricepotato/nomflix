import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import { Helmet } from "react-helmet";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => (
  <>
    <Helmet>
      <title>Movies | Nomflix</title>
    </Helmet>
    {loading ? (
      <Loader></Loader>
    ) : (
      <Container>
        {upcoming && upcoming.length > 0 && (
          <Section title="Upcoming Movies">
            {upcoming.map((movie) => (
              <Poster
                title={movie.original_title}
                imageUrl={movie.poster_path}
                id={movie.id}
                key={movie.id}
                isMovie={true}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
              ></Poster>
            ))}
          </Section>
        )}
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="Now Playing">
            {nowPlaying.map((movie) => (
              <Poster
                title={movie.original_title}
                imageUrl={movie.poster_path}
                id={movie.id}
                key={movie.id}
                isMovie={true}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
              ></Poster>
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular Movies">
            {popular.map((movie) => (
              <Poster
                title={movie.original_title}
                imageUrl={movie.poster_path}
                id={movie.id}
                key={movie.id}
                isMovie={true}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
              ></Poster>
            ))}
          </Section>
        )}
        {error && <Message text={error} color="#e74c3c" />}
      </Container>
    )}
  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
