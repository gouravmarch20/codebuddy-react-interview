import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
        <h1 className="mb-4 flex items-center text-4xl font-bold">
          <Icon icon="mdi:home" className="mr-2" />
          Set One
        </h1>

        <h2 className="mb-3 text-2xl">
          Create multi-step form in React which will contain 3 forms !
        </h2>

        <Link to="/set-one" className="flex items-center text-blue-600 hover:underline">
          View Live
          <Icon icon="mdi:arrow-right" className="ml-2" />
        </Link>
      </div>
      <div className="mt-6 rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
        <h1 className="mb-4 flex items-center text-4xl font-bold">
          <Icon icon="mdi:home" className="mr-2" />
          Set Three
        </h1>

        <h2 className="mb-3 text-2xl">Recreate Bing Homepage UI using React !</h2>

        <Link to="/set-three" className="flex items-center text-blue-600 hover:underline">
          View Live
          <Icon icon="mdi:arrow-right" className="ml-2" />
        </Link>
      </div>
    </>
  );
};

export default Home;
