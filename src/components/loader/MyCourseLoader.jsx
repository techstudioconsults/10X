import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const MyCourseLoader = () => {
  return (
    <main className="grid md:grid-cols-2 gap-3 lg:px-5 my-7">
      <Skeleton className="rounded-lg  w-full lg:w-[500px] h-[400px] lg:h-[250px]" />
    </main>
  );
};

export const MyCourseWishListLoader = () => {
  return (
    <main className="flex gap-3 lg:px-5 my-7">
      <Skeleton
        className="rounded-lg  h-[350px] lg:h-[350px]"
        width={"300px"}
      />
      <Skeleton
        className="rounded-lg  h-[350px] lg:h-[350px]"
        width={"300px"}
      />
      <Skeleton
        className="rounded-lg  h-[350px] lg:h-[350px]"
        width={"300px"}
      />
    </main>
  );
};
