import styled from 'styled-components';

const StyledNav = styled.nav`
  position: fixed;
  background: transparent;
  color: var(--color-white);
  top: 0;
  width: 100vw;
  z-index: var(--z-top);
  padding: var(--margin-small) 0;

  // FONTS
  font-size: var(--font-xsmall);
  // ARRANGE CHILDREN
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 61.25em) {
    font-size: var(--font-small);
  }
`;

const Section = styled.div`
  display: flex;
`;

const Brand = styled.span`
  padding: 0 0 0 var(--padding-small);
  @media (min-width: 61.25em) {
    padding: 0 0 0 var(--padding-medium);
    gap: var(--gap-medium);
  }
`;
const Title = styled.span`
  font-size: var(--font-xsmall);
`;

const Menu = styled.img`
  padding: 0 var(--padding-small) 0 0;
  height: var(--font-small);
  color: white;
  @media (min-width: 61.25em) {
    padding: 0 var(--padding-medium) 0 0;
  }
`;
function Navigation() {
  return (
    <StyledNav>
      <Section>
        <Brand>
          <Title>Jesica Arreola</Title>
        </Brand>
      </Section>
      <Section>
        <Menu src="/icons/instagram.png"></Menu>
        <Menu src="/icons/facebook.png"></Menu>
      </Section>
    </StyledNav>
  );
}

export default Navigation;
