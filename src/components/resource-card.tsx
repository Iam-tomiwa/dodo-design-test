import React from "react";
import { Link } from "react-router";

interface ResourceCardProps {
	name: string;
	description: string;
}
export default function ResourceCard({ name, description }: ResourceCardProps) {
	return (
		<Link to={""} className="flex bg-white flex-col rounded-xl border border-gray-200">
			<div className="aspect-video w-full rounded-t-xl bg-primary-100">
				<img
					className="size-full object-contain"
					src="/images/resource-card-img.png"
					alt={name}
				/>
			</div>
			<div className="flex grow flex-col justify-evenly p-4">
				<p className="text-lg font-medium text-gray-700">{name}</p>
				<p className="text-xs leading-[18px] text-gray-500">{description}</p>
			</div>
		</Link>
	);
}
