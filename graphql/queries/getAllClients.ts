import { gql } from "@apollo/client";

type Client = {
  id: string;
  url: string;
  name: string;
  logo: {
    url: string;
  };
  backgroundImage: {
    url: string;
  };
};

export type GetAllClientsResponse = {
  clients: Client[];
};

export const GET_ALL_CLIENTS = gql`
  query GetAllClients {
    clients {
      id
      url
      name
      logo {
        url
      }
      backgroundImage {
        url
      }
    }
  }
`;

export default GET_ALL_CLIENTS;
