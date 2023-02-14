import sc2146 from "@/assets/portfolio-screenshots/2146.webp";
import sc2152 from "@/assets/portfolio-screenshots/2152.webp";
import sc2153 from "@/assets/portfolio-screenshots/2153.webp";
import sc2154 from "@/assets/portfolio-screenshots/2154.webp";
import sc2156 from "@/assets/portfolio-screenshots/2156.webp";
import sc2157 from "@/assets/portfolio-screenshots/2157.webp";
import drBonacci from "@/assets/portfolio-screenshots/drbonacci.jpg";
import neImplant from "@/assets/portfolio-screenshots/neimplant.jpg";
import everGreen from "@/assets/portfolio-screenshots/EvergreenOralSurgery.webp";
import sleepyHollow from "@/assets/portfolio-screenshots/SleepyHollowDentalArts.webp";
import visage from "@/assets/portfolio-screenshots/VisageFacialSurgery.webp";

export interface Card {
  id: number;
  title: string;
  blurb: string;
  pageLink: string;
  image: string;
}

export const cardData: Card[] = [
  {
    id: 1,
    title: "Semi-Custom Theme #2146",
    blurb: "This is a semi-custom theme for a dental practice.",
    pageLink:
      "https://demo.pbhshosting.com/dental/?theme=Template2120&theme_version=2146-template",
    image: sc2146,
  },
  {
    id: 3,
    title: "Semi-Custom Theme #2152",
    blurb: "This is a semi-custom theme for a dental practice.",
    pageLink:
      "https://demo.pbhshosting.com/dental/?theme=Template2120&theme_version=2152-template",
    image: sc2152,
  },
  {
    id: 4,
    title: "Semi-Custom Theme #2153",
    blurb: "This is a semi-custom theme for a dental practice.",
    pageLink:
      "https://demo.pbhshosting.com/dental/?theme=Template2120&theme_version=2153-template",
    image: sc2153,
  },
  {
    id: 5,
    title: "Semi-Custom Theme #2154",
    blurb: "This is a semi-custom theme for a dental practice.",
    pageLink:
      "https://demo.pbhshosting.com/dental/?theme=Template2120&theme_version=2154-template",
    image: sc2154,
  },
  {
    id: 6,
    title: "Semi-Custom Theme #2156",
    blurb: "This is a semi-custom theme for a dental practice.",
    pageLink:
      "https://demo.pbhshosting.com/dental/?theme=Template2120&theme_version=2156-template",
    image: sc2156,
  },
  {
    id: 7,
    title: "Semi-Custom Theme #2157",
    blurb: "This is a semi-custom theme for a dental practice.",
    pageLink:
      "https://demo.pbhshosting.com/dental/?theme=Template2120&theme_version=2157-template",
    image: sc2157,
  },
  {
    id: 8,
    title: "Evergreen Oral Surgery",
    blurb:
      "This is a custom site designed by our design department and build pixel for pixel by yours truly.",
    pageLink: "https://www.evergreenoralsurgery.com/",
    image: everGreen,
  },
  {
    id: 9,
    title: "North East Implant and Oral Surgery",
    blurb:
      "This is a custom site designed by our design department and build pixel for pixel by yours truly.",
    pageLink: "https://www.neimplantandoralsurgery.com/",
    image: neImplant,
  },
  {
    id: 10,
    title: "Dr Bonacci",
    blurb:
      "This is a custom site designed by our design department and build pixel for pixel by yours truly.",
    pageLink: "https://www.drbonacci.com/",
    image: drBonacci,
  },
  {
    id: 11,
    title: "Visage Facal Surgery",
    blurb:
      "This is a custom site designed by our design department and build pixel for pixel by yours truly.",
    pageLink: "https://www.visagefacialsurgery.com/",
    image: visage,
  },
  {
    id: 12,
    title: "Sleepy Hollow Dental Arts",
    blurb:
      "This is a custom site designed by our design department and build pixel for pixel by yours truly.",
    pageLink: "https://www.sleepyhollowdentalarts.com/",
    image: sleepyHollow,
  },
];
