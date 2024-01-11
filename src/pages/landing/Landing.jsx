import { useState } from 'react';
import Intro from '../../components/intro/Intro';
import Navigation from '../../components/navigation/Navigation';
import NavigationScroll from '../../components/navigation/NavigationScroll';

function Landing() {
  // GRAB STATE for navigation scroll
  const [navigation, setNavigation] = useState(false);

  // HELPER FUNCTION to change STATE on scroll
  const changeNavigation = () => {
    if (window.scrollY >= 20) {
      setNavigation(true);
    } else {
      setNavigation(false);
    }
  };

  // CHECK for SCROLL w event listener
  window.addEventListener('scroll', changeNavigation);
  return (
    <>
      {!navigation ? <Navigation /> : <NavigationScroll />}
      <Intro />

    </>
  );
}

export default Landing;
