import { Chefhat, Delivery, Phone, Search } from "../../components/Icons/icon";
import { PillButton } from "../../components/buttons/Button";

const Hero = () => {
  return (
    <section>
      <div className="grid lg:grid-cols-12 gap-10 p-4 mx-auto w-full md:max-w-[90%]">
        <div className="lg:col-span-5 grid gap-10">
          <h1 className="text-5xl">
            Order And Enjoy{" "}
            <span className="font-semibold text-primary">
              Healthy Breakfast
            </span>{" "}
            From The Comfort Of Your House{" "}
          </h1>
          <p>
            Start your day with a nutritious breakfast for energy and focus.
            Choose meals rich in nutrients and balanced in macronutrients. Use
            AI-optimized combinations to ensure you get all essential nutrients.
            Opt for natural, whole foods over processed options.
          </p>

          <div className="grid md:flex gap-3">
            <div className="flex gap-3 p-3 py-5 rounded-30 border-4 border-primary">
              <input
                type="text"
                placeholder="Find Healthy Food"
                className="outline-none placeholder:text-[25px]"
              />
              <button className="h-24 aspect-square flex items-center justify-center bg-primary rounded-full">
                <Search />
              </button>
            </div>
            <button className="w-full py-10 rounded-30 border-2 text-white bg-primary border-primary">
              Explore
            </button>
          </div>
        </div>
        {/* HERO PIC/PRODUCT */}
        <div className="w-full aspect-[3/4] max-h-[800px] lg:max-h-[1000px] lg:aspect-auto lg:h-auto lg:col-span-7 relative bg-gray-100 rounded-40 overflow-clip">
          <div className="absolute bottom-0 left-0 w-full p-5 py-10 flex items-center justify-between gap-4 text-white bg-gradient-to-b from-transparent to-[rgb(0,0,5)]">
            <span className="text-4xl">
              Savour Healthy Eats Casual And Easy
            </span>
            <div className="w-1/3">
              <PillButton className="bg-primary text-white">
                Order Now
              </PillButton>
            </div>
          </div>
        </div>

        <div className="border-4 border-primary rounded-30 lg:col-span-4 p-5 text-primary flex items-center justify-between">
          <div>
            <p>
              <b>Pre-Order </b>
              <br />
              Fresh And Healthy Breakfast
            </p>
          </div>
          <Phone />
        </div>
        <div className="border-4 border-primary rounded-30 lg:col-span-4 p-5 text-primary flex items-center justify-between">
          <div>
            <p>
              <b>Our Chefs</b> <br /> Prepare with Top Quality
            </p>
          </div>
          <Chefhat />
        </div>
        <div className="border-4 border-primary rounded-30 lg:col-span-4 p-5 text-primary flex items-center justify-between">
          <div>
            <p>
              <b>We Deliver</b> <br /> Your Meal to You
            </p>
          </div>
          <Delivery />
        </div>
      </div>
    </section>
  );
};

export default Hero;
