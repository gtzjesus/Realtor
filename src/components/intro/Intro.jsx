import styled from 'styled-components';

const StyledIntro = styled.div`
  background-image: url('backgrounds/millennium.png');
  background-size: cover;
  color: var(--color-white);

  // COVER THE FULL SCREEN OF EVERY DEVICE
  min-height: 100vh;
  min-width: 100vw;
`;

const Information = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--gap-medium);
  padding: 50% 0 0 0;
`;

const Title = styled.span`
  font-size: var(--font-xlarge);
`;
const Description = styled.span`
  font-size: var(--font-small);
`;

function Intro() {
  return (
    <StyledIntro>
      <Information>
        <Title>Discover a home that complements your lifestyle.</Title>
        <Description>with assistance from a Millennium realtor.</Description>
      </Information>
    </StyledIntro>
  );
}

export default Intro;
