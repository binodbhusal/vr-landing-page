import Headsets1 from '../assets/img/headset-1.png';
import Headsets2 from '../assets/img/headset-2.png';
import Headsets3 from '../assets/img/headset-3.png';
import Headsets4 from '../assets/img/headset-4.png';

const Headsets = () => (
  <section className="py-12 lg:py-24">
    <div className="container mx-auto">
      <h2
        className="font-bold mb-6 text-3xl"
        data-aos="fade-down"
        data-aos-offset="300"
      >
        Mixed Reality Headsets
      </h2>
      <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-y-9">
        <div
          className="relative"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-delay="1000"

        >
          <img src={Headsets1} alt="" />
          <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
            <h4 className="font-semibold text-xl mb-2 ">Metaverse</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Enim explicabo nihil cum distinctio adipisci obcaecati!
            </p>
          </div>

        </div>
        <div
          className="relative"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-delay="1300"
        >
          <img src={Headsets2} alt="" />
          <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
            <h4 className="font-semibold text-xl mb-2 ">AIoT</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Enim explicabo nihil cum distinctio adipisci obcaecati!
            </p>
          </div>

        </div>
        <div
          className="relative"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-delay="1600"
        >
          <img src={Headsets3} alt="" />
          <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
            <h4 className="font-semibold text-xl mb-2 ">HoloLens</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Enim explicabo nihil cum distinctio adipisci obcaecati!
            </p>
          </div>

        </div>
        <div
          className="relative"
          data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-delay="1900"
        >
          <img src={Headsets4} alt="" />
          <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
            <h4 className="font-semibold text-xl mb-2 ">TPCASTT</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Enim explicabo nihil cum distinctio adipisci obcaecati!
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
);
export default Headsets;
