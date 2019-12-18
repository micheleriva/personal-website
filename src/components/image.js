import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img    from "gatsby-image"
import styled from "styled-components";

const ProfileImage = styled.div`
  img {
    border-radius: 100%;
    max-width:     200px;
    max-height:    200px;
  }
`;

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profileimage.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <ProfileImage>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </ProfileImage>
  )
};

export default Image
