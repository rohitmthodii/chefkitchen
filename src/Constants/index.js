import Dish1 from "../assets/Dish1.svg"
import Dish2 from "../assets/Dish2.svg"
import Dish3 from "../assets/Dish3.svg"
import Dish4 from "../assets/Dish4.svg"
import Dish5 from "../assets/Dish5.svg"
import Home from "../assets/home.svg?react";
import Coupons from "../assets/coupons.svg?react";
import Whishlist from "../assets/whishlist.svg?react";
import Mail from "../assets/mail.svg?react";
import Notification from "../assets/notification.svg?react";

// SIDEBAR BUTTONS 
export const SidebarItems = [
  {
    title: "Home",
    path: "/",
    id: 1,
    Icon: Home,
  },
  {
    title: "Coupons",
    path: "/menu",
    id: 2,
    Icon: Coupons,
  },
  {
    title: "Whishlist",
    path: "#",
    id: 3,
    Icon: Whishlist,
  },
  {
    title: "Mail",
    path: "#",
    id: 4,
    Icon: Mail,
  },
  {
    title: "Notification",
    path: "#",
    id: 5,
    Icon: Notification,
  },
];

// MENU DATA 
export const menuData = [
    {
        "id": 1,
        "image": Dish1,
        "name": "Healthy noodle with spinach leaf",
        "bowlsLeft": "10 Bowls available",
        "category" :"noodles",
        "Prices": {
        "small": { old: 2.29,new: 3.29 },
        "medium": { old: 5.29,new: 4.29 },
        "large": { old: 6.29,new: 5.29 },
        },
    },

    {
        "id": 2,
        "image": Dish2,
        "name": "Hot spicy fried rice with omelet",
        "bowlsLeft": "15 Bowls available",
        "category" : "rice",
        "Prices": {
        "small": { old: 4.59,new: 3.59 },
        "medium": { old: 5.59,new: 4.59 },
        "large": { old: 6.59,new: 5.50 },
        },
    },

    {
        "id": 3,
        "image": Dish3,
        "name": "Spicy Ground Pork Ramen",
        "bowlsLeft": "20 Bowls available",
        "category" : "rice",
        "Prices": {
        "small": { old: 4.39,new: 3.39 },
        "medium": { old: 5.39,new: 4.39 },
        "large": { old: 6.39,new: 5.39 },
        },
    },

    {
        "id": 4,
        "image": Dish4,
        "name": "Healthy noodle with spinach leaf",
        "bowlsLeft": "25 Bowls available",
        "category" : "noodles",
        "Prices": {
        "small": { new: 3.09 },
        "medium": { new: 4.09 },
        "large": { new: 5.09 },
        },
    },

    {
        "id": 5,
        "image": Dish5,
        "name": "Hot spicy fried rice with omelet",
        "bowlsLeft": "30 Bowls available",
        "category" : "rice",
        "Prices": {
        "small": { new: 3.29 },
        "medium": { new: 4.29 },
        "large": { new: 5.29 },
        },
    },

    {
        "id": 6,
        "image": Dish1,
        "name": "Spicy Ground Pork Ramen",
        "bowlsLeft": "35 Bowls available",
        "category" : "rice",
        "Prices": {
        "small": { new: 3.39 },
        "medium": { new: 4.39 },
        "large": { new: 5.39 },
        },
    },

    {
        "id": 7,
        "image": Dish2,
        "name": "Healthy noodle with spinach leaf",
        "bowlsLeft": "40 Bowls available",
        "category" : "noodles",
        "Prices": {
        "small": { new: 3.49 },
        "medium": { new: 4.49 },
        "large": { new: 5.49 },
        },
    },

        {
        "id": 8,
        "image": Dish3,
        "name": "Hot spicy fried rice with omelet",
        "bowlsLeft": "45 Bowls available",
        "category" : "rice",
        "Prices": {
        "small": { new: 3.59 },
        "medium": { new: 4.59 },
        "large": { new: 5.59 },
        },
    },

        {
        "id": 9,
        "image": Dish4,
        "name": "Spicy Ground Pork Ramen",
        "bowlsLeft": "50 Bowls available",
        "category" : "rice",
        "Prices": {
        "small": { new: 3.99 },
        "medium": { new: 4.99 },
        "large": { new: 5.99 },
        },
    },
];