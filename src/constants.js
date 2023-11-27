import { HiDotsHorizontal } from "react-icons/hi";
import { RiErrorWarningFill } from "react-icons/ri";

export const statusTitles = [
  {
    title: "Backlog",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAw0lEQVR4nO2VSwoCMQxAo3ig5ARzKcWdnsm1yCg6J3LhootIsWIpnZna9KPQB1kU0jxI0xagkZb9bAYjXpiIBXFzSm502RCxEoptydpIw8XwXutiiI/JPX7x1pK60dcSMwAsS7eaTSxc8UkoPs8MF3vFmdjVEttw0JQXF3P6hyRYrBJO9/dikN9nzeC5x0XEV0d6qNHqaTI8JI0fgYkG4dn2sWIWBaKKF+NrM3fdyhS8j+Z/cv5ZTDVajeJf6RglbkBmnskRh6fg3Z2ZAAAAAElFTkSuQmCC",
  },
  { title: "Todo", icon: "https://img.icons8.com/ios/50/000000/circled.png" },
  {
    title: "In progress",
    icon: "https://img.icons8.com/ios/50/000000/timer.png",
  },
  {
    title: "Done",
    icon: "data:image/png;base64,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",
  },
  {
    title: "Cancelled",
    icon: "https://img.icons8.com/color/48/000000/cancel--v1.png",
  },
];


export const priorityTitles = [
  {
    title: "No Priority",
    icon: <HiDotsHorizontal />,
  },
  {
    title: "Low",
    icon: (
      <div class="signal-icon weak">
        <div class="signal-bar"></div>
        <div class="signal-bar"></div>
        <div class="signal-bar"></div>
      </div>
    ),
  },
  {
    title: "Medium",
    icon: (
      <div class="signal-icon medium">
        <div class="signal-bar"></div>
        <div class="signal-bar"></div>
        <div class="signal-bar"></div>
      </div>
    ),
  },
  {
    title: "High",
    icon: (
      <div class="signal-icon strong">
        <div class="signal-bar"></div>
        <div class="signal-bar"></div>
        <div class="signal-bar"></div>
      </div>
    ),
  },
  {
    title: "Urgent",
    icon: <RiErrorWarningFill fill="orange" />,
  },
];
