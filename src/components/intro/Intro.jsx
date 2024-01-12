import styled from 'styled-components';

const StyledIntro = styled.div`
  background-image: url('backgrounds/millennium.png');
  background-size: cover;
  color: var(--color-white);

  // COVER THE FULL SCREEN OF EVERY DEVICE
  min-height: 100vh;
  min-width: 100vw;
  padding: 0 var(--padding-xxsmall) var(--padding-xxsmall)
    var(--padding-xxsmall);

  // PADDING
`;

const Information = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--gap-medium);

  padding: 50% var(--padding-medium) var(--padding-medium) var(--padding-medium);
`;

const Title = styled.span`
  font-size: var(--font-xlarge);
  text-transform: uppercase;
  line-height: 3.5rem;
`;
const Description = styled.span`
  font-size: var(--font-xsmall);
`;

const Property = styled.span`
  font-style: italic;
`;

function Intro() {
  return (
    <StyledIntro>
      <Information>
        <Title>
          A <Property>home</Property> that fits your lifestyle.
        </Title>
        <Description>guided by a Millennium realtor.</Description>
      </Information>
    </StyledIntro>
  );
}

export default Intro;
