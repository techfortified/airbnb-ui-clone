import React from "react";
import style from "../style/tabsContent.module.css";
import style1 from "../style/catTabsContent.module.css";

export default function CatTabContent({ data }) {
  return (
    <div className={style.TabsContent}>
      <div className="row">
        {data.map((item, i) => (
          <div key={item.title} className="col-sm-6 col-lg-3">
            <div className={style1.catTabCard}>
              <img src={item.photo} alt={item.title} />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h6>{item.title}</h6>
                <span>{item.rating}</span>
              </div>
              <p>{item.description}</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>{item.date}</p>
                <p>{item.price}/night</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
