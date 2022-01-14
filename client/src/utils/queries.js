import { gql } from "@apollo/react-hooks";

export const GET_ME = gql`
  query me($username: String!) {
    user(username: $username) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        title
      }
    }
  }
`;
