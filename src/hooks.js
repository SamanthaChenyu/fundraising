import { useQuery } from "react-apollo-hooks";
import gql from "graphql-tag";

export const useProject = projectId => {
  const { loading, data, error } = useQuery(
    gql`
      query GET_PROJECT($projectId: String!) {
        fundraising_project_by_pk(id: $projectId) {
          plans {
            id
            title
            description
            salePrice
            listPrice
            onSale
            discountTo
            sales {
              amount
              sum
            }
          }
        }
      }
    `,
    { variables: { projectId } }
  );
  return {
    loading,
    error,
    project: loading || error ? null : data.fundraising_project_by_pk
  };
};
