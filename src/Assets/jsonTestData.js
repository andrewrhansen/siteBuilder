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
        { catName: "Burritos",
          items: [
            {
              name: "Carne Asada Burrito",
              price: "$3.50",
              desc: "A steak burrito with rice, beans, salsa, guacamole and sour cream."
            },
            {
              name: "Pork Burrito",
              price: "$3.75",
              desc: "A pork burrito with rice, beans, salsa, guacamole and sour cream."
            }
        ]},
        { catName: "Tacos",
          items: [
            {
              name: "Chicken Tacos",
              price: "$3.00",
              desc: "Soft shell or hard shell tacos served with Chicken."
            },
            {
              name: "Chicken Tacos",
              price: "$3.00",
              desc: "Soft shell or hard shell tacos served with Chicken."
            }
        ]},
        { catName: "Specality Items",
          items: [
            {
            name: "Pork Chimichanga",
            price: "$5.00",
            desc: "A deep-fried pork burrito, served with rice and beans."
            }
        ]},
        { catName: "Drinks",
          items: [
            {
              name: "Jurrito-brand soda",
              price: "$1.50",
              desc: "Available in Orange, Lemon-lime, Pinapple, and Strawberry"
            },
            {
              name: "Horchatta",
              price: "$2.00",
              esc: "Our delicious, homemade Horchata."
            }
        ]}
      ]
    }
  }
]
