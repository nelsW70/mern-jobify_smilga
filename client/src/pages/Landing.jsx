import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby live-edge man bun affogato craft beer PBR&B tattooed
            sartorial small batch migas whatever pitchfork selfies venmo. Cloud
            bread mustache lomo, prism poke vinyl iceland ugh. DIY roof party
            jianbing sustainable mustache, activated charcoal taiyaki unicorn
            blog food truck etsy fanny pack.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
