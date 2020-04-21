import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 10px;
`;

const Title = styled.h3`
  font-size: 18px;
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
`;

const CompanyImage = styled.img`
  width: 80px;
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
