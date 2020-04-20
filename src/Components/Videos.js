import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 10px;
`;
const Title = styled.h3`
  font-size: 18px;
`;
const VideoList = styled.ul`
  margin-top: 10px;
  display: flex;
`;
const VideoItem = styled.li`
  width: 250px;
  margin-right: 5px;
`;

const ThumbnameImg = styled.img`
  width: 100%;
`;

const Videos = ({ videos }) => (
  <Container>
    <Title>Videos</Title>
    <VideoList>
      {videos.map((item) => (
        <VideoItem>
          <ThumbnameImg
            src={`https://img.youtube.com/vi/${item.key}/hqdefault.jpg`}
          ></ThumbnameImg>
        </VideoItem>
      ))}
    </VideoList>
  </Container>
);

export default Videos;
