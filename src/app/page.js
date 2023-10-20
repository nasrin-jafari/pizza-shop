import Pizza from "./components/Pizza";
import Banner from "./components/Banner";
import { pizzas } from "@/data/data";
export const metadata = {
  title: "pizza shop",
  icons: {
    icon: "/pizza.svg",
  },
};
export default function Home() {
  return (
    <section>
      <Banner/>
      <div className="container mx-auto ">
        <div className=" grid grid-cols-1 gap-[15px] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px] py-12">
          {pizzas.map((pizza) => {
            return <Pizza pizza={pizza} />;
          })}
        </div>
      </div>
    </section>
  );
}
