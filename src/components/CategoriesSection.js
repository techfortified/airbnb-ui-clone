import React, { useState } from "react";
import { Tabs } from "antd";
import CatTabContent from "./CatTabContent";
import style from "../style/tabsContent.module.css";

const CustomTab = (tab) => {
  return (
    <div>
      <img
        style={{ width: 35, height: 35, display: "block", margin: "0 auto" }}
        src={tab.icon}
        alt={tab.title}
      />
      <h6>{tab.title}</h6>
    </div>
  );
};

export default function CategoriesSection() {
  const [data] = useState([
    {
      tab: {
        title: "Design",
        icon: "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
      },
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
      tab: {
        title: "Artic",
        icon: "https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg",
      },
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
      tab: {
        title: "Shared Rooms",
        icon: "https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg",
      },
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
      tab: {
        title: "OMG!",
        icon: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
      },
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
      tab: {
        title: "Surfing",
        icon: "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
      },
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
      tab: {
        title: "Amazing Pools",
        icon: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
      },
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
      tab: {
        title: "Caves",
        icon: "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg",
      },
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
      tab: {
        title: "Beach",
        icon: "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
      },
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
      tab: {
        title: "A-Frames",
        icon: "https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg",
      },
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
      tab: {
        title: "Earth Homes",
        icon: "https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg",
      },
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
      tab: {
        title: "National Parks",
        icon: "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
      },
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
      <h1>Categories</h1>
      <Tabs defaultActiveKey="1">
        {data.map((item, i) => (
          <TabPane tab={CustomTab(item.tab)} key={i + 1}>
            <CatTabContent data={item.tabData} />
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}
