const Explore = () => (
  <section className="min-h-[400px] mb-16 lg:mb-4 ">
    <div className="container mx-auto h-full">
      <div className="h-full bg-explore bg-no-repeat bg-cover p-14 flex flex-col items-start justify-center">
        <h3
          className="text-3xl font-semibold mb-8"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-delay="1600"

        >
          Explore product in new way
        </h3>
        <p
          className="max-w-xs mb-12"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-delay="1900"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum necessitatibus
          molestiae velit nesciunt veritatis, soluta similique inventore nisi repudiandae corrupti.
        </p>
        <form
          action=""
          className="flex flex-col w-full space-y-4 gap-x-4 lg:flex-row lg:space-y-0"
          data-aos="fade-up"
          data-aos-offset="200"
        >
          <input type="text" placeholder="Your email" className="bg-gradient-to-t from-[#341D38] to-[#271223] h-12 px-4 outline-none rounded-md" />
          <button className="btn" type="button">Start</button>
        </form>
      </div>
    </div>
  </section>
);
export default Explore;
