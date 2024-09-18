import {
  image as imageType,
  skill as skillType,
  skillsData as skillsDataType,
} from "@/app/utils/types";

export const images: imageType[] = [
  {
    id: 1,
    text: "spark",
    src: "/spark.png",
    title: "Spark",
    description: "admin panel for a shop",
    technologies: ["react", "graphQL", "context api", "MUI"],
  },
  {
    id: 2,
    text: "spark2",
    src: "/spark2.png",
    title: "Spark",
    description: "an admin panel for a shop",
    technologies: ["react", "graphQL", "context api", "MUI"],
  },
  {
    id: 3,
    text: "terme",
    src: "/terme.png",
    title: "Terme",
    description: "a unit selection for university of Kharazmi",
    technologies: ["react", "axios", "MUI"],
  },
  {
    id: 4,
    text: "vo2",
    src: "/vo2.png",
    title: "VO2",
    description: "a panel for managing and analyzing athletes",
    technologies: ["react", "nextJS", "MUI"],
  },
];

export const verticalImage: imageType = {
  id: 5,
  text: "terme2",
  src: "/terme2.png",
  title: "Terme",
  description: "a unit selection for university of Kharazmi",
  technologies: ["react", "axios", "MUI"],
};

export const skillsData: skillsDataType[] = [
  {
    title: "Programming languages",
    items: [
      { text: "JavaScript", src: "/js.svg" },
      { text: "TypeScript", src: "/ts.svg" },
    ],
  },
  {
    title: "Frameworks and libraries",
    items: [
      { text: "ReactJS", src: "/react.svg" },
      { text: "NextJS", src: "/next.svg" },
    ],
  },
  {
    title: "API calls",
    items: [
      { text: "GraphQL", src: "/graphql.svg" },
      { text: "SocketIO" },
      { text: "axios" },
    ],
  },
  {
    title: "CSS and styles",
    items: [
      { text: "Tailwind CSS", src: "/tailwind.svg" },
      { text: "Material UI" },
      { text: "Sass" },
    ],
  },
  {
    title: "State management",
    items: [{ text: "Redux", src: "/redux.svg" }, { text: "ContextAPI" }],
  },
];
