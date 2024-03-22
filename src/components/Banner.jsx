import bannerImg from '../../src/assets/images/user.png'

const Banner = () => {
  return (
    <div className="hero bg-blue-50 w-4/5 mx-auto rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          className="max-w-sm rounded-lg"
        />
        <div>
          <h1 className="text-5xl font-bold">One Step <br /> Close To Your <br /><span className="text-purple-400">Dreem Job</span></h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
