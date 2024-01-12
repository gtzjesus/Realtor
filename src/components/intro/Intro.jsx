import styled from 'styled-components';

const StyledIntro = styled.div`
  background-image: url('backgrounds/millennium.png');
  background-size: cover;
  color: var(--color-white);

  // COVER THE FULL SCREEN OF EVERY DEVICE
  min-height: 100vh;
  min-width: 100vw;

  // PADDING
  padding: var(--padding-small);
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
  font-size: var(--font-xsmall);
`;

function Intro() {
  return (
    <StyledIntro>
      <Information>
        <Title>A home that fits your lifestyle.</Title>
        <Description>with expertise from a Millennium realtor.</Description>
      </Information>
    </StyledIntro>
  );
}

export default Intro;
