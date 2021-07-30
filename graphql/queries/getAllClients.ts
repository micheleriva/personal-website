import { gql } from "@apollo/client";

type Client = {
  id: string;
  url: string;
  name: string;
  logo: {
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
    }
  }
`;

export default GET_ALL_CLIENTS;
