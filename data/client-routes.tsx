import AboutMeOutlineIcon from "@/icons/about-me-outline";
import AboutMeSolidIcon from "@/icons/about-me-solid";
import ContactMeOutlineIcon from "@/icons/contact-me-outline";
import ContactMeSolidIcon from "@/icons/contact-me-solid";
import GalleryOutlineIcon from "@/icons/gallery-outline";
import GallerySolidIcon from "@/icons/gallery-solid";
import HomeOutlineIcon from "@/icons/home-outline";
import HomeSolidIcon from "@/icons/home-solid";
import { Url } from "next/dist/shared/lib/router/router";
import { Key } from "react";
import { IconType } from "react-icons";

export interface LinksType {
  key: Key;
  name: string;
  url: Url;
  IconOutline: IconType;
  IconSolid: IconType;
}

export const clientRoutes: LinksType[] = [
  {
    key: 1,
    name: "Home",
    url: "/",
    IconOutline: HomeOutlineIcon,
    IconSolid: HomeSolidIcon,
  },
  {
    key: 2,
    name: "Gallery",
    url: "/gallery",
    IconOutline: GalleryOutlineIcon,
    IconSolid: GallerySolidIcon,
  },
  {
    key: 3,
    name: "About Me",
    url: "/about-me",
    IconOutline: AboutMeOutlineIcon,
    IconSolid: AboutMeSolidIcon,
  },
  {
    key: 4,
    name: "Contact Me",
    url: "/contact-me",
    IconOutline: ContactMeOutlineIcon,
    IconSolid: ContactMeSolidIcon,
  },
];
