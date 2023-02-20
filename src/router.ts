import { PrivateRoute } from "./components/elements/AppRouter";
import PrivateLayout from "./components/layout/PrivateLayout";
import { PAGES, USERS_ROLE } from "./constants";
import AboutCareer from "./page/Career/Pages/About";
import BlogPostCareer from "./page/Career/Pages/BlogPost";
import BlogPostsCareer from "./page/Career/Pages/BlogPosts";
import JobCareer from "./page/Career/Pages/Job";
import JobsCareer from "./page/Career/Pages/Jobs";
import LandingCareer from "./page/Career/Pages/Landing";
import ComingSoonPage from "./page/ComingSoon/page";
import LandingPage from "./page/Landing/page";
import AboutMarketing from "./page/Makerting/Pages/About";
import CaseStudiesMarketing from "./page/Makerting/Pages/CaseStudies";
import CaseStudyMarketing from "./page/Makerting/Pages/CaseStudy";
import ContactMarketing from "./page/Makerting/Pages/Contact";
import ServicesMarketing from "./page/Makerting/Pages/Services";
import AboutTravel from "./page/Travel/Pages/About";
import BlogPostTravel from "./page/Travel/Pages/BlogPost";
import BlogPostsTravel from "./page/Travel/Pages/BlogPosts";
import ContactTravel from "./page/Travel/Pages/Contact";
import LandingTravel from "./page/Travel/Pages/Landing";
import ServicesTravel from "./page/Travel/Pages/Services";
import TourTravel from "./page/Travel/Pages/Tour";
import ToursTravel from "./page/Travel/Pages/Tours";

export const privateRoutes: PrivateRoute[] = [
  {
    path: "/",
    component: PrivateLayout,
    exact: false,
    routes: [
      {
        path: PAGES.COMING_SOON,
        roles: [],
        label: "Prebuild Pages",
        exact: false,
        routes: [
          {
            path: PAGES.COMING_SOON,
            roles: [],
            component: ComingSoonPage,
            label: "Coming Soon",
            exact: true,
          },
          {
            path: PAGES.LANDING,
            roles: [],
            component: LandingPage,
            label: "Lading",
            exact: true,
          },
        ],
      },
      {
        path: PAGES.TRAVEL,
        roles: [USERS_ROLE.STAFF, USERS_ROLE.CUSTOMER],
        label: "Travel",
        exact: false,
        routes: [
          {
            path: PAGES.ABOUT,
            component: AboutTravel,
            roles: [USERS_ROLE.STAFF, USERS_ROLE.CUSTOMER],
            label: "About",
            exact: true,
          },
          {
            path: PAGES.BLOG_POSTS,
            component: BlogPostsTravel,
            roles: [USERS_ROLE.STAFF],
            label: "Blog Posts",
            exact: true,
          },
          {
            path: PAGES.BLOG_POST,
            component: BlogPostTravel,
            roles: [USERS_ROLE.CUSTOMER],
            label: "Blog Post",
            exact: true,
          },
          {
            path: PAGES.CONTACT,
            component: ContactTravel,
            roles: [USERS_ROLE.CUSTOMER],
            label: "Contact",
            exact: true,
          },
          {
            path: PAGES.LANDING,
            component: LandingTravel,
            roles: [USERS_ROLE.CUSTOMER],
            label: "Landing",
            exact: true,
          },
          {
            path: PAGES.SERVICES,
            component: ServicesTravel,
            roles: [USERS_ROLE.CUSTOMER],
            label: "Services",
            exact: true,
          },
          {
            path: PAGES.TOUR,
            component: TourTravel,
            roles: [USERS_ROLE.STAFF],
            label: "Tour",
            exact: true,
          },
          {
            path: PAGES.TOURS,
            component: ToursTravel,
            roles: [USERS_ROLE.STAFF],
            label: "Tours",
            exact: true,
          },
        ],
      },
      {
        path: PAGES.MARKETING,
        roles: [USERS_ROLE.STAFF, USERS_ROLE.CUSTOMER],
        label: "Marketing",
        exact: false,
        routes: [
          {
            path: PAGES.ABOUT,
            component: AboutMarketing,
            roles: [USERS_ROLE.STAFF, USERS_ROLE.CUSTOMER],
            label: "About",
            exact: true,
          },
          {
            path: PAGES.BLOG_POSTS,
            component: BlogPostsTravel,
            roles: [USERS_ROLE.STAFF],
            label: "Blog Posts",
            exact: true,
          },
          {
            path: PAGES.BLOG_POST,
            component: BlogPostTravel,
            roles: [USERS_ROLE.CUSTOMER],
            label: "Blog Post",
            exact: true,
          },
          {
            path: PAGES.CASE_STUDIES,
            component: CaseStudiesMarketing,
            roles: [USERS_ROLE.CUSTOMER, USERS_ROLE.STAFF],
            label: "Case Studies",
            exact: true,
          },
          {
            path: PAGES.CASE_STUDY,
            component: CaseStudyMarketing,
            roles: [USERS_ROLE.CUSTOMER],
            label: "Case Study",
            exact: true,
          },
          {
            path: PAGES.CONTACT,
            component: ContactMarketing,
            roles: [USERS_ROLE.CUSTOMER, USERS_ROLE.STAFF],
            label: "Contact",
            exact: true,
          },
          {
            path: PAGES.SERVICES,
            component: ServicesMarketing,
            roles: [USERS_ROLE.STAFF],
            label: "Services",
            exact: true,
          },
        ],
      },
      {
        path: PAGES.CAREER,
        roles: [USERS_ROLE.STAFF, USERS_ROLE.CUSTOMER],
        label: "Career",
        exact: false,
        routes: [
          {
            path: PAGES.ABOUT,
            component: AboutCareer,
            roles: [USERS_ROLE.STAFF, USERS_ROLE.CUSTOMER],
            label: "About",
            exact: true,
          },
          {
            path: PAGES.BLOG_POSTS,
            component: BlogPostsCareer,
            roles: [USERS_ROLE.STAFF],
            label: "Blog Posts",
            exact: true,
          },
          {
            path: PAGES.BLOG_POST,
            component: BlogPostCareer,
            roles: [USERS_ROLE.CUSTOMER],
            label: "Blog Post",
            exact: true,
          },
          {
            path: PAGES.JOB,
            component: JobCareer,
            roles: [USERS_ROLE.STAFF],
            label: "Job",
            exact: true,
          },
          {
            path: PAGES.JOBS,
            component: JobsCareer,
            roles: [USERS_ROLE.STAFF],
            label: "Jobs",
            exact: true,
          },
          {
            path: PAGES.CONTACT,
            component: ContactMarketing,
            roles: [USERS_ROLE.CUSTOMER, USERS_ROLE.STAFF],
            label: "Contact ",
            exact: true,
          },
        ],
      },
    ],
    // routes: [
    //   {
    //     path: PAGES.ABOUT,
    //     component: AboutTravel,
    //     roles: [USERS_ROLE.STAFF, USERS_ROLE.CUSTOMER],
    //     label: "About",
    //     exact: true,
    //   },
    //   {
    //     path: PAGES.BLOG_POSTS,
    //     component: BlogPostsTravel,
    //     roles: [USERS_ROLE.STAFF],
    //     label: "Blog Posts",
    //     exact: true,
    //   },
    //   {
    //     path: PAGES.BLOG_POST,
    //     component: BlogPostTravel,
    //     roles: [USERS_ROLE.CUSTOMER],
    //     label: "Blog Post",
    //     exact: true,
    //   },
    //   {
    //     path: PAGES.CONTACT,
    //     component: ContactTravel,
    //     roles: [USERS_ROLE.CUSTOMER],
    //     label: "Contact",
    //     exact: true,
    //   },
    //   {
    //     path: PAGES.LANDING,
    //     component: LandingTravel,
    //     roles: [USERS_ROLE.CUSTOMER],
    //     label: "Landing",
    //     exact: true,
    //   },
    //   {
    //     path: PAGES.SERVICES,
    //     component: ServicesTravel,
    //     roles: [USERS_ROLE.CUSTOMER],
    //     label: "Services",
    //     exact: true,
    //   },
    //   {
    //     path: PAGES.TOUR,
    //     component: TourTravel,
    //     roles: [USERS_ROLE.STAFF],
    //     label: "Tour",
    //     exact: true,
    //   },
    //   {
    //     path: PAGES.TOURS,
    //     component: ToursTravel,
    //     roles: [USERS_ROLE.STAFF],
    //     label: "Tours",
    //     exact: true,
    //   },
    // ],
  },
];
