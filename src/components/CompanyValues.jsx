import Img1 from '../assets/img/be_sincere.svg';
import Img2 from '../assets/img/simple.svg';
import Img3 from '../assets/img/intelligent.svg';
import Img4 from '../assets/img/stronger.svg';

const CompanyValues = () => (
  <section className="min-h[350px] mb-24">
    <div className="container mx-auto mb-16 lg:mb-4 h-full">
      <div className="flex justify-around flex-col p-14 lg:flex-row bg-purple-400/10 h-full rounded-lg">
        <div
          className="h-full  bg-no-repeat  flex flex-col items-start justify-center"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-delay="1500"
        >
          <h2
            className="text-3xl font-semibold mb-8"
          >
            Our company values
            culture
          </h2>
          <p
            className="max-w-xs mb-12"
          >
            We specialize in creating visual identities for products and brand in your company.
          </p>
        </div>
        <div
          className="grid grid-cols-2 gap-4"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-delay="1700"

        >
          <div className="flex flex-col items-center">
            <img src={Img1} alt="" className="h-10 w-10" />
            <p className="text-xs mt-2">Be Sincere</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Img4} alt="" className="h-10 w-10" />
            <p className="text-xs mt-2">Stronger together</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Img2} alt="" className="h-10 w-10" />
            <p className="text-xs mt-2">Keep it simple</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={Img3} alt="" className="h-10 w-10" />
            <p className="text-xs mt-2">Take intelligent risks</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default CompanyValues;
