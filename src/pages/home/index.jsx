import { LandingHero } from '../../features/landing-hero';
import { LandingLearn } from '../../features/landing-learn';
import { LandingAdvantage } from '../../features/landing-advantage';
import { LandingCheckout } from '../../features/landing-checkout'
import { LandingQuestion } from '../../features/landing-questions';
import { LandingAnswers } from '../../features/landing-answers';

const HomePage = () => {
  return (
    <div className="home">
      <LandingHero />
      <LandingLearn />
      <LandingAdvantage />
      <LandingCheckout />
      <LandingQuestion />
      <LandingAnswers />
    </div>
  );
};

export default HomePage;
