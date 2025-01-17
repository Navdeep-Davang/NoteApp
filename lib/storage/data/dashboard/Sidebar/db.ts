// lib\database\dashboard\Sidebar\db.ts

import { AppData } from "@/lib/Interface/dashboard/Sidebar/UpperPart/types";


export const mydata: AppData = {
    appName: "Quick Note",
    user: {
      name: "John Doe",
      email: "john.doe@example.com",
      avatar: "https://images.unsplash.com/broken",
      plan: "Free",
    },
    list: {
      recent: [
        { id: 1, title: "Meeting Notes", content: "Discuss project updates." },
        { id: 2, title: "Grocery List", content: "Milk, Bread, Eggs." },
        { id: 3, title: "Workout Plan", content: "Leg day exercises." },
        { id: 4, title: "Reading List", content: "Books to read this month." },
      ],
      favorite: [
        { id: 5, name: "Travel Plans", content: "Plan the trip to Europe." },
        { id: 6, name: "Birthday Ideas", content: "Surprise party for Jane." },
      ],
    },
  };
  