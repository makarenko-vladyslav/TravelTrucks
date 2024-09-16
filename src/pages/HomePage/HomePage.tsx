import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Button from "../../components/Button";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catalog");
  };

  return (
    <>
      <Header />

      <main className="home-page w-full max-w-[1440px] mx-auto bg-hero h-[696px] flex flex-col justify-center">
        <div className="mx-6 tab:ml-16 tab:mr-0">
          <h1 className="text-inputs font-semibold text-5xl leading-[0.93] tab:leading-[0.67] mb-4">
            Campers of your dreams
          </h1>
          <p className="text-inputs font-semibold text-2xl leading-[1.33] mb-14">
            You can find everything you want in our catalog
          </p>

          <Button onClick={handleClick} width="173px" className="text-white">
            View Now
          </Button>
        </div>
      </main>
    </>
  );
};

export default HomePage;
