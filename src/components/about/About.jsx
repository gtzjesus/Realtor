import styled from 'styled-components';

const StyledAbout = styled.div`
  padding: var(--padding-small);
`;

const Title = styled.span`
  font-size: var(--font-large);
  text-transform: uppercase;
`;

const Caption = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  // BLACK AND WHITE
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  padding: var(--padding-medium) 0;
`;

const Description = styled.span`
  font-size: var(--font-small);
`;

function About() {
  return (
    <StyledAbout>
      <Title>
        Get to <br /> know me
      </Title>
      <Caption>
        <Img src="/images/jesica.png" />
        <Description>
          I am committed to helping you navigate real estate with confidence and
          success.
        </Description>
      </Caption>
    </StyledAbout>
  );
}

export default About;
