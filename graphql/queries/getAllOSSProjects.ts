import { gql } from "@apollo/client";

export type OSSProject = {
  id: string;
  isOwnProject: boolean;
  language: string;
  description: string;
  name: string;
  url: string;
};

export type GetAllOSSProjectsResponse = {
  opensourceProjects: OSSProject[];
};

export const GET_ALL_OSS_PROJECTS = gql`
  query GetAllOSSProjects {
    opensourceProjects {
      isOwnProject
      language
      id
      name
      description
      url
    }
  }
`;

export default GET_ALL_OSS_PROJECTS;