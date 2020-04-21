import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 10px;
`;

const CountryList = styled.ul`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const CountryItem = styled.li`
  padding: 4px 10px;
  border: 2px solid #fafafa;
  border-radius: 4px;
  margin-right: 5px;
`;

const Countries = ({ countries }) => (
  <Container>
    <CountryList>
      {countries.map((country) => (
        <CountryItem>{country.name}</CountryItem>
      ))}
    </CountryList>
  </Container>
);

export default Countries;
