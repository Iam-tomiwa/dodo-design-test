import { ClockIcon, FolderIcon, HomeIcon, StarIcon } from "../assets/icons";

export const DASHBOARD_LINKS = [
	{
		name: "Home",
		link: "/",
		icon: <HomeIcon />,
	},
	{
		name: "Recents",
		link: "/recents",
		icon: <ClockIcon />,
	},
	{
		name: "Starred",
		link: "/starred",
		icon: <StarIcon />,
	},
	{
		name: "Projects",
		link: "/projects",
		seperate: true,
		icon: <FolderIcon />,
	},
];
