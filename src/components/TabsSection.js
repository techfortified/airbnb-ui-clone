import React, { useState } from "react";
import { Tabs } from "antd";
import TabsContent from "./TabsContent";
import style from "../style/tabsContent.module.css";

export default function TabsSection() {
  const [data] = useState([
    {
      tab: "Mountain cabins",
      tabData: [
        {
          title: "Rockbridge, Ohio, US",
          description: "Designed by Meredith Higgins & Bryant Gingerich",
          date: "Jan 1 - 6",
          price: "$67",
          rating: 3.9,
          photo:
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/0862735b-4abc-4d87-a8d1-f2fb6053adc8.jpeg?im_w=720",
        },
        {
          title: "Gardone Riviera, Italy",
          description: "Designed by David Chipperfield",
          date: "Jan 17 - 22 ",
          price: "$8953.4",
          rating: 4.9,
          photo:
            "https://a0.muscache.com/im/pictures/monet/Luxury-553449454187790697/original/475750f4-33de-4e1d-bbd7-f1939896ce9c?im_w=720",
        },
        {
          title: "Paraty Brazil",
          description: "Designed by Arterier Marko Brajovic",
          date: "Jan 22 - 31",
          price: "$173.4",
          rating: 5,
          photo:
            "https://a0.muscache.com/im/pictures/d89a974e-73db-4ba6-b2f4-8e1876534731.jpg?im_w=720",
        },
        {
          title: "Rælingen, Norway",
          description: "Featured in Venuereport",
          date: "Sep 25 - 30",
          price: "$476.4",
          rating: 4,
          photo:
            "https://a0.muscache.com/im/pictures/monet/Select-34444025/original/944d56fa-e9a6-48fb-a9c5-e4e3778042d7?im_w=720",
        },
      ],
    },
    {
      tab: "Beach destinations",
      tabData: [
        {
          title: "Rockbridge, Ohio, US",
          description: "Designed by Meredith Higgins & Bryant Gingerich",
          date: "Jan 1 - 6",
          price: "$67",
          rating: 3.9,
          photo:
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/0862735b-4abc-4d87-a8d1-f2fb6053adc8.jpeg?im_w=720",
        },
        {
          title: "Gardone Riviera, Italy",
          description: "Designed by David Chipperfield",
          date: "Jan 17 - 22 ",
          price: "$8953.4",
          rating: 4.9,
          photo:
            "https://a0.muscache.com/im/pictures/monet/Luxury-553449454187790697/original/475750f4-33de-4e1d-bbd7-f1939896ce9c?im_w=720",
        },
        {
          title: "Paraty Brazil",
          description: "Designed by Arterier Marko Brajovic",
          date: "Jan 22 - 31",
          price: "$173.4",
          rating: 5,
          photo:
            "https://a0.muscache.com/im/pictures/d89a974e-73db-4ba6-b2f4-8e1876534731.jpg?im_w=720",
        },
        {
          title: "Rælingen, Norway",
          description: "Featured in Venuereport",
          date: "Sep 25 - 30",
          price: "$476.4",
          rating: 4,
          photo:
            "https://a0.muscache.com/im/pictures/monet/Select-34444025/original/944d56fa-e9a6-48fb-a9c5-e4e3778042d7?im_w=720",
        },
      ],
    },
    {
      tab: "Popular destinations",
      tabData: [
        {
          title: "Rockbridge, Ohio, US",
          description: "Designed by Meredith Higgins & Bryant Gingerich",
          date: "Jan 1 - 6",
          price: "$67",
          rating: 3.9,
          photo:
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-48509375/original/0862735b-4abc-4d87-a8d1-f2fb6053adc8.jpeg?im_w=720",
        },
        {
          title: "Gardone Riviera, Italy",
          description: "Designed by David Chipperfield",
          date: "Jan 17 - 22 ",
          price: "$8953.4",
          rating: 4.9,
          photo:
            "https://a0.muscache.com/im/pictures/monet/Luxury-553449454187790697/original/475750f4-33de-4e1d-bbd7-f1939896ce9c?im_w=720",
        },
        {
          title: "Paraty Brazil",
          description: "Designed by Arterier Marko Brajovic",
          date: "Jan 22 - 31",
          price: "$173.4",
          rating: 5,
          photo:
            "https://a0.muscache.com/im/pictures/d89a974e-73db-4ba6-b2f4-8e1876534731.jpg?im_w=720",
        },
        {
          title: "Rælingen, Norway",
          description: "Featured in Venuereport",
          date: "Sep 25 - 30",
          price: "$476.4",
          rating: 4,
          photo:
            "https://a0.muscache.com/im/pictures/monet/Select-34444025/original/944d56fa-e9a6-48fb-a9c5-e4e3778042d7?im_w=720",
        },
      ],
    },
  ]);
  const { TabPane } = Tabs;
  return (
    <div className={style.TabsSection}>
      <h1>Inspiration for future getaways</h1>
      <Tabs defaultActiveKey="1">
        {data.map((item, i) => (
          <TabPane tab={item.tab} key={i + 1}>
            <TabsContent data={item.tabData} />
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}
