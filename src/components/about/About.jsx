import styled from 'styled-components';

const StyledAbout = styled.div`
  height: 100vh;
`;

const Title = styled.span`
  font-size: var(--font-large);
`;

function About() {
  return (
    <StyledAbout>
      <Title>Get to know me</Title>
    </StyledAbout>
  );
}

export default About;
