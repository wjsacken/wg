import { IMenuData } from "../types/menu-d-t";

const menu_data:IMenuData[] = [
  {
    id: 1,
    hasDropdown: false,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    hasDropdown: true,
    title: "About Us",
    link: "/about-us",
    submenus: [
      { title: "Attorneys", link: "/attorneys" },
      { title: "Our Team", link: "/new-directory" },
      { title: "Testimonials", link: "/testimonials-new" },
    ],
  },
  {
    id: 3,
    title: "Practice Areas",
    megaMenu: true,
    link: "/practice-areas",
    pages: true,
    mega_menus: [
      {
        title:"",
        link: "#",
        submenus: [
          { title: "Mesothelioma & Asbestosis", link: "/practice/mesothelioma-asbestosis" },
          { title: "Chemical Related Cancers & Diseases", link: "/practice/chemical-related-cancers-or-diseases" },
          { title: "Water Contamination | Camp Lejeune", link: "/practice/water-contamination-camp-lejeune" },
          { title: "Class Actions, Mass Actions, & Consumer Rights", link: "/practice/class-actions-consumer-rights" },
          { title: "Environmental Litigation", link: "/practice/environmental-litigation" },
          { title: "Workers' Compensation Injury Claims", link: "/practice/workers-compensation-injury-claims" },

        ],
      },
      {
        title:"",
        link: "#",
        submenus: [
          { title: "Workers' Compensation Disease Claims", link: "/practice/workers-compensation-disease-claims" },
          { title: "Personal Injury | Auto, Motorcycle, and Truck Accidents | Wrongful Death", link: "/practice/personal-injury-car-motorcycle-trucking-accidents" },
          { title: "Wage & Hour Violations", link: "/practice/wage-and-hour-discrimination" },
          { title: "Nursing Home Abuse & Neglect", link: "/practice/nursing-home-abuse-and-neglect" },
          { title: "Dangerous Drugs & Medical Devices", link: "/practice/dangerous-drugs-medical-devices" },
          { title: "Employment Benefits & Insurance Law", link: "/practice/employment-benefits-insurance-law" },
        ],
      },
    ]
    },
    {
      id: 4,
      hasDropdown: false,
      title: "News",
      link: "/news",
    },
    {
      id: 6,
      hasDropdown: false,
      title: "W&G Gives",
      link: "/community-outreach",
    },
    {
    id: 7,
    hasDropdown: false,
    title: "Blog",
    link: "/new-blog",
  },
  {
    id: 8,
    hasDropdown: false,
    title: "Contact",
    link: "/contact",
  },
]

export default menu_data;
