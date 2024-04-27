import Courses from "./AdminDashBoardComponents/Courses";
import BestSelling from "./AdminDashBoardComponents/BestSelling";
import PopularCat from "./AdminDashBoardComponents/PopularCat";
import Recent from "./AdminDashBoardComponents/Recent";
import Library from "./AdminDashBoardComponents/Library";


const Dashboard = () => {
  return (
    <main className="container mx-auto mb-10 px-7">
      <Courses />
      <section className=" lg:flex justify-between gap-9  w-full mt-5">
        <div className="w-[60%] xl:w-[60%]">
          <BestSelling />
        </div>
        <div
          
        >
          <PopularCat />
        </div>
      </section>

      <section className=" lg:flex justify-between gap-9  w-full mt-5">
        <div className="w-[50%]">
          <Recent />
        </div>
        <div className="w-[50%]">
          <Library />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;



// className="w-[36%] shadow-xl p-2 shadow-[#032BF214] rounded"