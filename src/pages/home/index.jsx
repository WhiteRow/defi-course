import { LandingHero } from '../../features/landing-hero';
import { LandingLearn } from '../../features/landing-learn';
import { LandingAdvantage } from '../../features/landing-advantage';

const HomePage = () => {
  return (
    <div className="home">
      <LandingHero />
      <LandingLearn />
      <LandingAdvantage />
    </div>
  );
};

export default HomePage;
