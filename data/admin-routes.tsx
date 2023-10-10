import DashboardOutlineIcon from "@/icons/dashboard-outline";
import { LinksType } from "./client-routes";
import DashboardSolidIcon from "@/icons/dashboard-solid";
import ProjectOutlineIcon from "@/icons/project-outline";
import ProjectSolidIcon from "@/icons/project-solid";
import AddSkillOutlineIcon from "@/icons/add-skill-outline";
import AddSkillSolidIcon from "@/icons/add-skill-solid";

export const adminRoutes: LinksType[] = [
  {
    key: 5,
    name: "Dashboard",
    url: "/dashboard",
    IconOutline: DashboardOutlineIcon,
    IconSolid: DashboardSolidIcon,
  },
  {
    key: 6,
    name: "My Projects",
    url: "/dashboard/projects",
    IconOutline: ProjectOutlineIcon,
    IconSolid: ProjectSolidIcon,
  },
  {
    key: 8,
    name: "My Skills",
    url: "/dashboard/skills",
    IconOutline: AddSkillOutlineIcon,
    IconSolid: AddSkillSolidIcon,
  },
];
