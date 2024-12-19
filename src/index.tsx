import { createRoot } from "react-dom/client";
import "tailwindcss/tailwind.css";
import App from "App";
import "./assets/styles/globals.scss";
import "./assets/styles/dashboard.scss";
import { BrowserRouter } from "react-router";
import "unfonts.css";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
