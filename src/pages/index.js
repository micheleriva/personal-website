import React        from "react";
import styled       from "styled-components";
import Layout       from "../components/layout";
import SEO          from "../components/seo";
import ProfileImage from "../components/image";

const Wrapper = styled.div`
  display:         flex;
  justify-content: center;
  align-items:     center;
  width:           100%;
  min-height:      100vh;
  color:           #F5F5F5;
`;

const Title = styled.h1`
  width:      100%;
  text-align: center;
  margin-top: 0.5em;
`;

const Subtitle = styled.h2`
  width:       100%;
  text-align:  center;
  font-weight: 100;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Michele Riva | Software Engineer" />
    <Wrapper>
      <div>
        <ProfileImage />
        <Title> Michele Riva </Title>
        <Subtitle> Software Engineer </Subtitle>
      </div>
    </Wrapper>

  </Layout>
);

export default IndexPage
