import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TvPresenter = ({ topRated, airingToday, popular, error, loading }) =>
  null;

TvPresenter.propTypes = {
  topRated: PropTypes.array,
  airingToday: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TvPresenter;
