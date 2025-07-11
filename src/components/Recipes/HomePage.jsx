import { Link } from "react-router-dom";
import Container from "../Container/Container";

const HomePage = () => {
  return (
    <Container>
      <div
        className="p-6 flex flex-col justify-center items-center min-h-screen "
        style={{
          backgroundImage: `url('/images/food-2.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Link
          to="/recipeshome"
          className="px-5 py-3 border-t-3  border-b-3 text-[50px] text-white
           bg-emerald-900/70 rounded-4xl hover:bg-emerald-900/50 
           hover:scale-[1.1] transition hover:shadow-[0px_0px_10px_10px_rgba(16,185,129,0.5)]"
        >
          If you're hungry, don't even come here....
        </Link>
      </div>
    </Container>
  );
};

export default HomePage;
