import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPost } from "../redux/asyncThunks";
import { useDispatch } from "react-redux";
import Loader from "../components/loader/Loader";
const Posts = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    dispatch(getPost())
      .then((res) => {
        setUserData(res?.payload?.data?.data);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="mb-7 text-4xl font-bold">Posts</h1>
      <Link to="/" className="mb-4 flex items-center text-blue-600 hover:underline">
        <Icon icon="mdi:arrow-left" className="mr-2" />
        Back to Home
      </Link>

      <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3">
        {userData?.length > 0 ? (
          <>
            {userData?.map((user) => (
              <div className="rounded-lg bg-white p-7 shadow-lg" key={user?.id}>
                <div className="flex justify-center">
                  <img
                    src={user?.image}
                    alt="Avatar"
                    className="h-[10%] w-[60%] rounded-md  object-cover	 "
                    loading="lazy"
                  />
                </div>
                <div className="mt-2 flex  items-center">
                  <span>
                    <img
                      src={user?.avatar}
                      alt=""
                      className="h-[20px] w-[20px] rounded-md	 object-cover"
                    />
                  </span>
                  <h2 className="ml-4 text-xl font-bold">
                    {" "}
                    {user?.firstName} &nbsp; {user?.lastName}
                  </h2>
                </div>

                <p className="text-gray-700">{user?.writeup}</p>
              </div>
            ))}
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Posts;
