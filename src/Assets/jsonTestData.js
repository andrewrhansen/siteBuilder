import { Description } from "@material-ui/icons";

export const ChrisTestData = [
  {
    type: "Card",
    data: {
      title: "Benevolent",
      secondary: "adjective",
      text: (
        <div>
          well meaning and kindly.
          <br />
          "a benevolent smile"
        </div>
      ),
    },
  },
  {
    type: "TestNothinghEre",
    data: {},
  },
];

export const AndrewTestData = [
  {
    type: "Header",
    data: {
      title: "Julio's Taco Truck",
      position: "static",
      options:["Menu", "Location", "About Us"]
    }
  },
  {
    type: "Menu",
    data: {
      menuList: [
        {
          name: "Carne Asada Burrito",
          price: "$3.50",
          desc: "A steak burrito with rice, beans, salsa, guacamole and sour cream."
        },
        {
          name: "Pork Burrito",
          price: "$3.75",
          desc: "A pork burrito with rice, beans, salsa, guacamole and sour cream."
        },
        {
          name: "Pork Chimichanga",
          price: "$5.00",
          desc: "A deep-fried pork burrito, served with rice and beans."
        },
      ]
    }
  }
]
