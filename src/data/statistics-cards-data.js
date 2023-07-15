import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: BanknotesIcon,
    title: "Total Clients",
    value: "15,000",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "depuis hier",
    },
  },
  {
    color: "pink",
    icon: UserIcon,
    title: "Total Abonnements",
    value: "12,500",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "depuis le mois dernier",
    },
  },
  {
    color: "green",
    icon: UserPlusIcon,
    title: "Total Commande",
    value: "150,000",
    footer: {
      color: "text-green-500",
      value: "+2%",
      label: "depuis hier",
    },
  },
  {
    color: "orange",
    icon: ChartBarIcon,
    title: "Revenue sur 30 jours",
    value: "85,430€",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "Depuis le mois dernier",
    },
  },
];

export default statisticsCardsData;
