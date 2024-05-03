import Courses from "./AdminDashBoardComponents/Courses";
import BestSelling from "./AdminDashBoardComponents/BestSelling";
import PopularCat from "./AdminDashBoardComponents/PopularCat";
import Recent from "./AdminDashBoardComponents/Recent";
import Library from "./AdminDashBoardComponents/Library";


const Dashboard = () => {
  return (
    <main className="container mx-auto mb-10 pl-5 pr-8">
      <Courses />
      <section className=" lg:flex justify-between  w-full mt-5">
        <div className="w-[60%] xl:w-[60%]">
          <BestSelling />
        </div>
        <div
          className="w-[36%] "
        >
          <PopularCat />
        </div>
      </section>

      <section className=" lg:flex justify-between  w-full mt-5">
        <div className="w-[55%]">
          <Recent />
        </div>
        <div className="w-[40%]">
          <Library />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
