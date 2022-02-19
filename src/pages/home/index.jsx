import { LandingHero } from '../../features/landing-hero';
import { LandingLearn } from '../../features/landing-learn';
import { LandingAdvantage } from '../../features/landing-advantage';
import { LandingCheckout } from '../../features/landing-checkout';
import { LandingQuestion } from '../../features/landing-questions';
import { LandingAnswers } from '../../features/landing-answers';
import { Footer } from '../../features/footer';

const HomePage = () => {
  return (
    <div className="home">
      <LandingHero />
      <LandingLearn />
      <LandingAdvantage />
      <LandingCheckout />
      <LandingQuestion />
      <LandingAnswers />
      <Footer />
    </div>
  );
};

export default HomePage;
