import { gql } from "@apollo/client";

export type BlogPost = {
  id: string;
  title: string;
  description: string;
  url: string;
  friendUrl: string;
  publishDate: string;
  publisher: string;
  image: {
    url: string;
  };
};

export type BlogPosts = {
  blogPosts: BlogPost[];
};

export const GET_ALL_BLOG_POSTS = gql`
  query GetAllBlogPosts {
    blogPosts(orderBy: publishDate_DESC) {
      id
      title
      url
      friendUrl
      image {
        url
      }
      description
      publishDate
      publisher
    }
  }
`;
