import DashboardLayout from "layouts/dashboard-layout";
import HomePage from "pages";
import React from "react";
import { Route, Routes } from "react-router";

export default function AllRoutes() {
	return (
		<Routes>
			<Route path="/" element={<DashboardLayout />}>
				<Route path="/" index element={<HomePage />} />
				<Route path="*" element={<HomePage />} />
			</Route>
		</Routes>
	);
}
