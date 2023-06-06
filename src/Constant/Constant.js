import ASSETS from "../Assests"
import CheckIcon from '@mui/icons-material/Check';

export const routers = [
    {
        path: "/",
        tabLabel: "About Us",
        icons: ""
    },
    {
        path: "/",
        tabLabel: "Contact Us",
        icons: ""
    },
    {
        path: "/",
        tabLabel: "Pricing Packages",
        icons: ""
    }
]


export const sliderData = [
    {
        title: "Local news and social media monitored and mapped 24-7",
        image: ASSETS.CARDIMG1
    },
    {
        title: "create comprehensive, authoritative on a global scale.",
        image: ASSETS.CARDIMG4
    },
    {
        title: "Powerful image search categorises images",
        image: ASSETS.CARDIMG3
    },
    {
        title: "Full detail and source of every conflict event recorded",
        image: ASSETS.CARDIMG2
    },
    {
        title: "research analysts, consultants, and data scientists.​",
        image: ASSETS.CARDIMG5
    },
    {
        title: "work smarter and faster with powerful analytics workflow tools",
        image: ASSETS.CARDIMG6
    },
]

export const chartData = {
    Team: [44, 55, 41, 17, 15],
    options: {
        chart: {
            foreColor: "white",
            width: "100%",
            type: "pie",
        },
        chart: {
            colors: ["transparent"],
        },
        tooltip: {
            theme: "dark",
        },
        legend: {
            position: "bottom",
            show: true,
        },
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"]
    },
};

export const cardTextData1 = [
    {
        tabLabel: "70+ countries and associated events",
        icons: CheckIcon
    },
    {
        tabLabel: "Access to munition data",
        icons: CheckIcon
    },
    {
        tabLabel: "Dynamic category munition data charts",
        icons: CheckIcon
    },
    {
        tabLabel: "Informative date range selector",
        icons: CheckIcon
    },
    {
        tabLabel: "Upgrade to Teams at any time",
        icons: CheckIcon
    },
    {
        tabLabel: "Identified munitions",
        icons: CheckIcon
    },

]
export const cardTextData3 = [
    {
        tabLabel: "All Benefits of Pro Access",
        icons: CheckIcon
    },
    {
        tabLabel: "Team Management",
        icons: CheckIcon
    },
    {
        tabLabel: "Dedicated Account Manager",
        icons: CheckIcon
    },
    {
        tabLabel: "Technical Information Point of Contact",
        icons: CheckIcon
    },
    {
        tabLabel: "Munition Documentation",
        icons: CheckIcon
    },
    {
        tabLabel: "Advanced Munition Data",
        icons: CheckIcon
    },

]