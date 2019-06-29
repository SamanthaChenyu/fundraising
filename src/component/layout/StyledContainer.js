import Styled from "styled-components";

const StyledContainer = Styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0px 15px;
  @media (min-width: 767px) {
    max-width: 750px;
  }
  @media (min-width: 991px) {
    max-width: 970px;
  }
  @media (min-width: 1199px) {
    max-width: 1170px;
  }
`;

export default StyledContainer;
