import { useEffect, useState } from "react";
import fetchArticles from "./fetchUsers";
import UsersList from "./UsersList";
import { SiReactrouter } from "react-icons/si";
import { LucideSquareArrowDown } from "lucide-react";
import LoaderUser from "./LoaderUser";
import SearchUser from "./SearchUser";
import { useLocation, useSearchParams } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loader, setLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoader(true);
        const response = await fetchArticles(0);
        setUsers(response.data.users);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    fetchUsers();
  }, []);

  const handleChangeSearchQuery = (newString) => {
    searchParams.set("query", newString);
    setSearchParams(searchParams);
  };
  const filteredData = users?.filter(
    (item) =>
      item.firstName.toLowerCase().includes(query.toLowerCase()) ||
      item.lastName.toLowerCase().includes(query.toLowerCase())
  );
  const handleMore = () => {
    const newSkip = skip + 30;
    setSkip(newSkip);

    const fetchNewUsers = async () => {
      try {
        const response = await fetchArticles(newSkip);
        setUsers((prev) => [...prev, ...response.data.users]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNewUsers();
  };

  return (
    <div className="flex flex-col items-center py-25 bg-black min-h-[600px] gap-25 relative ">
      <h2 className="text-[50px] text-center text-white font-bold">Users</h2>
      {loader && <LoaderUser />}
      <SearchUser data={handleChangeSearchQuery} />
      <UsersList users={filteredData} state={location} />
      <SiReactrouter
        size={100}
        color="white"
        className="absolute top-0 right-5"
      />
      <button
        type="button"
        onClick={handleMore}
        className="text-white cursor-pointer hover:scale-[1.2] transition"
      >
        <LucideSquareArrowDown size={50} />
      </button>
    </div>
  );
};

export default Users;
