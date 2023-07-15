import { chartsConfig } from "@/configs";

const websiteViewsChart = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Abonnements",
      data: [20, 50, 10],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#fff",
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["Free", "Basic", "Pro"],
    },
  },
};

const dailySalesChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Sales",
      data: [50, 120, 150, 350, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#fff"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};

const completedTasksChart = {
  ...dailySalesChart,
  series: [
    {
      name: "Tasks",
      data: [30, 100, 140, 300, 80, 250, 280, 400, 300, 150, 200, 400],
    },
  ],
};

export const statisticsChartsData = [
  {
    color: "blue",
    title: "Type d'abonnement",
    description: "Nombre d'abonnées par type d'abonnement",
    footer: "Mis à jours il y a 4 minutes",
    chart: websiteViewsChart,
  },
  {
    color: "pink",
    title: "Nouveaux clients",
    description: "Nombre de nouveau client sur l'année en cours",
    footer: "Mis à jours il y a 4 minutes",
    chart: dailySalesChart,
  },
  {
    color: "green",
    title: "Nouveaux abonnements",
    description: "Statistiques des nouveaux abonnements",
    footer: "Mis à jours il y a 4 minutes",
    chart: completedTasksChart,
  },
];

export default statisticsChartsData;
