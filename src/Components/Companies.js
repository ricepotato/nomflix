import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 10px;
`;

const CompanyList = styled.ul`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const CompanyItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  height: 60px;
  padding: 4px 10px;
  border-radius: 5px;
`;

const CompanyImage = styled.img`
  max-width: 180px;
  max-height: 45px;
`;

const Companies = ({ companies }) => (
  <Container>
    <CompanyList>
      {companies
        .filter((company) => company.logo_path !== null)
        .map((company) => (
          <CompanyItem>
            <CompanyImage
              src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
            ></CompanyImage>
          </CompanyItem>
        ))}
    </CompanyList>
  </Container>
);

export default Companies;
