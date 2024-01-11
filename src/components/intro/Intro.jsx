import styled from 'styled-components';

const StyledIntro = styled.div`
  display: flex;
  justify-content: center;
  background-image: url('backgrounds/millennium.png');
  background-size: cover;
  height: 100vh;
`;
function Intro() {
  return <StyledIntro></StyledIntro>;
}

export default Intro;
