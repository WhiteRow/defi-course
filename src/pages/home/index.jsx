import { LandingHero } from '../../features/landing-hero';
import { LandingLearn } from '../../features/landing-learn';

const HomePage = () => {
  return (
    <div className="home">
      <LandingHero />
      <LandingLearn />
    </div>
  );
};

export default HomePage;
