import styled from 'styled-components';

const StyledAbout = styled.div`
  height: 100vh;
  padding: var(--padding-small);
`;

const Title = styled.span`
  font-size: var(--font-large);
  text-transform: uppercase;
`;

const Img = styled.img`
  // BLACK AND WHITE
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  padding: var(--padding-medium) 0;
  width: 40vw;
`;

const Description = styled.span`
  font-size: var(--font-medium);
`;

function About() {
  return (
    <StyledAbout>
      <Title>Get to know me</Title>
      <Img src="/images/jesica.png" />
      <Description>
        I am committed to help you navigate real estate with confidence and
        success.
      </Description>
    </StyledAbout>
  );
}

export default About;
