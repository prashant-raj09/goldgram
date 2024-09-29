import React from "react";

const MainContainer = () => {
  return (
    <div className="flex mt-24 justify-center flex-col">
      <div className="flex gap-2 flex-col justify-center items-center  p-6 rounded-lg">
        <img
          alt="piggy-bank"
          src="https://th.bing.com/th/id/OIP.K1IJgF4E8jAPSOlUamzVbAHaHa?rs=1&pid=ImgDetMain"
          className="w-20 h-20 rounded-full object-cover"
        />
        <button className="btn btn-info">Total Coins</button>
      </div>
      <div className="flex justify-center flex-col items-center">
        <img
          alt="star"
          src="https://clipart-library.com/newhp/1531014989Gold-Star-PNG-Transparent-Clip-Art-Image.png"
          className="w-32 animate-spin-slow"
        />
        <h1
          className="mt-4 text-2xl font-bold text-white tracking-wide uppercase animate-fade-in-scale shadow-lg"
          style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.7)" }}
        >
          Gold Gram
        </h1>
        <div className="flex mt-4 gap-10">
          <button className="btn btn-outline btn-secondary">Secondary</button>
          <button className="btn btn-outline btn-accent">Booster</button>
        </div>
      </div>
      <div className="flex mt-4 justify-center gap-2">
        <button className="btn btn-outline btn-info">Mine</button>
        <button className="btn btn-outline btn-success">Tasks</button>
        <button className="btn btn-outline btn-warning">Invite</button>
        <button className="btn btn-outline btn-error">Airdrop</button>
      </div>
    </div>
  );
};

export default MainContainer;
