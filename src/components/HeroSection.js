import React from "react";
import style from "../style/heroSection.module.css";

export default function HeroSection() {
  return (
    <div
      className={style.HeroSection}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1652067904796-9f5af0490643?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032)",
      }}
    >
      <h1>Live Anywhere</h1>
      <button>Explore nearby stays</button>
    </div>
  );
}
