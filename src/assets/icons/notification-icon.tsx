import React from "react";

export default function NotificationIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M17 13.3V9C17 6.6 15.3 4.6 13 4.1V3C13 2.5 12.5 2 12 2C11.5 2 11 2.5 11 3V4.1C8.7 4.6 7 6.6 7 9V13.4C5.9 13.9 4 15.3 4 18C4 18.5 4.5 19 5 19H9C9 20.6569 10.3431 22 12 22C13.6569 22 15 20.6569 15 19H19C19.5 19 20 18.5 20 18C20 15.3 18.1 13.9 17 13.3ZM6.2 17H17.9C17.363 15.7469 16.2651 15.2549 15.8255 15.0579C15.774 15.0348 15.7315 15.0157 15.7 15C15.3 14.8 15 14.4 15 14V9C15 7.4 13.7 6 12 6C10.3 6 9 7.4 9 9V14C9 14.4 8.7 14.8 8.4 15C8.31604 15.056 8.19244 15.1105 8.04491 15.1755C7.48954 15.4204 6.59506 15.8148 6.2 17ZM12 20C11.4477 20 11 19.5523 11 19H13C13 19.5523 12.5523 20 12 20Z"
				fill="currentColor"
			/>
		</svg>
	);
}
