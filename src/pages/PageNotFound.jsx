import Header from "../components/Header";
import {Wrapper, Content, ErrorCode, Title, Text, StyledLink } from "../styles/NotFound.styled";

function PageNotFound() {
  return (
    <>
      <Header />
      <Wrapper>
        <Content>
          <ErrorCode>404</ErrorCode>
          <Title>Page not found</Title>
          <Text>
            The page you’re looking for doesn’t exist or has been moved.
          </Text>

          <StyledLink to="/">Go back home</StyledLink>
        </Content>
      </Wrapper>
    </>
  );
}

export default PageNotFound;
