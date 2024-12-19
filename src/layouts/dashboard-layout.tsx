/* eslint-disable tailwindcss/no-custom-classname */
import "../assets/styles/dashboard.scss";
import classNames from "classnames";
import { useState } from "react";
import {
	CloseIcon,
	HamburgerIcon,
	InfoIcon,
	LogoIcon,
	NotificationIcon,
	PlusIcon,
	SettingsIcon,
} from "assets/icons";
import { DASHBOARD_LINKS } from "utils/constants";
import { NavLink, Link, Outlet } from "react-router";
import Avatar from "components/avatar";
import SearchInput from "components/forms/search-input";

const sidebar_theme = {
	menu_active: "bg-primary-50 !text-primary",
	sidebar_bg: "bg-white",
	menu: "text-gray hover:bg-primary-50",
};

export default function DashboardLayout() {
	const [isSideBarOpen, setisSideBarOpen] = useState(false);

	return (
		<div className="z-dashboard">
			{isSideBarOpen && (
				<div
					onClick={() => setisSideBarOpen(false)}
					className="overlay block xl:hidden"
				></div>
			)}
			<aside
				className={classNames(
					"z-sidebar",
					isSideBarOpen ? "show-sidebar" : "",
					sidebar_theme.sidebar_bg
				)}
			>
				<div className="flex h-full flex-col gap-4 bg-primary p-4">
					<Avatar
						className="cursor-pointer !bg-[#0077B5]"
						variant="rounded"
						size="sm"
						src="/images/linked-in-icon.png"
						alt="Linked In"
					/>
					<Avatar
						className="cursor-pointer !bg-[#040921]"
						variant="rounded"
						size="sm"
						src="/images/figma-icon.png"
						alt="Figma"
					/>
					<Avatar
						className="cursor-pointer !bg-[#040921]"
						variant="rounded"
						size="sm"
						src="/images/figma-icon.png"
						alt="Figma"
					/>
					<Avatar
						className="cursor-pointer !bg-[#FFFFFF]"
						variant="rounded"
						size="sm"
						src=""
						alt="Figma"
						fallback={<PlusIcon />}
					/>
				</div>
				<button
					onClick={() => setisSideBarOpen(false)}
					className="close-btn flex size-8 place-content-center items-center justify-center rounded-full border border-primary/5 bg-white"
				>
					<CloseIcon />
				</button>
				<div className={`z-sidebar-wrapper`}>
					<div className="top">
						<img
							src="/images/full-logo.png"
							className="mb-6 mt-2 h-[24px] w-fit object-contain"
							alt="zadwax logo"
						/>
						<ul className="sidebar-list">
							{DASHBOARD_LINKS.map(item => (
								<li
									className={classNames(
										item.seperate && "border-t border-gray-200 pt-2"
									)}
									key={item.link}
									onClick={() => setisSideBarOpen(false)}
								>
									<NavLink
										to={item.link}
										className={({ isActive }) =>
											classNames(
												`sidebar-item ${sidebar_theme.menu}`,
												isActive && `link-active ${sidebar_theme.menu_active}`
											)
										}
									>
										{item.icon}
										<span>{item.name}</span>{" "}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
					<ul className="bottom sidebar-list">
						<li>
							<Link
								role="button"
								to=""
								className={`sidebar-item ${sidebar_theme.menu}`}
							>
								<InfoIcon />
								<span>Support</span>
							</Link>
						</li>
						<li>
							<Link
								role="button"
								to=""
								className={`sidebar-item ${sidebar_theme.menu}`}
							>
								<SettingsIcon />
								<span>Settings</span>
							</Link>
						</li>
					</ul>
				</div>
			</aside>

			<main>
				<nav className="z-nav gap-4 border-b border-gray-200">
					<div className="flex items-center gap-2 xl:hidden">
						<button
							type="button"
							onClick={() => setisSideBarOpen(true)}
							className="size-11 place-content-center rounded-full border border-primary/5 p-2"
						>
							<HamburgerIcon />
						</button>
						<Link to="/">
							<LogoIcon />
						</Link>
					</div>
					<div className="ml-auto mr-6 hidden w-[320px] xl:block">
						<SearchInput />
					</div>
					<div className="flex items-center gap-2 xl:gap-6">
						<button className="icon-btn !border-none">
							<NotificationIcon />
						</button>
						<Avatar size="sm" alt="avatar" src="/images/avatar-df.png" />
					</div>
				</nav>
				<section className="dashboard-content container">
					<div className="mb-6 w-full xl:hidden">
						<SearchInput />
					</div>
					<Outlet />
				</section>
			</main>
		</div>
	);
}
