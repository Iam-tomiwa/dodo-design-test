/* eslint-disable tailwindcss/no-custom-classname */
import Button from "components/button";
import ResourceCard from "components/resource-card";

const mock_resources = [
	{
		name: "Academic literature review",
		description: "Organize your sources and synthesize information effectively.",
		id: "1",
	},
	{
		name: "Data analysis templates",
		description:
			"Streamline patient data collection and analysis for medical research.",
		id: "2",
	},
	{
		name: "UX Heuristic template.",
		description:
			"Assess your interface against established usability principles.",
		id: "3",
	},
	{
		name: "Affinity mapping template",
		description:
			"Assess your interface against established usability principles.",
		id: "4",
	},
];

const gretting_started_steps = [
	{
		title: "Step 1: Create your project",
		description: "Give your project a name, add a description and your goals.",
	},
	{
		title: "Step 2: Invite your teammates",
		description: "Research is better together, Invite your colleagues.",
	},
	{
		title: "Step 3: Setup your research process",
		description: "Add the processes that are specific to this project.",
	},
];
const research_steps = [
	{
		title: "Don’t start from scratch, use a template",
		description: "Begin with field-tested frameworks adaptable to your research.",
	},
	{
		title: "Add steps and set milestones",
		description:
			"Define key stages and monitor progress from hypothesis to conclusion.",
	},
	{
		title: "Track changes in your documents over time.",
		description:
			"Capture every revision to ensure data integrity and transparency.",
	},
];

export default function HomePage() {
	return (
		<div>
			<section>
				<h1 className="heading-1">Welcome Susan,</h1>
				<p className="sub-title">
					Get ready to complete your research processes on Zadwax
				</p>

				<div
					className="mt-6 rounded-xl bg-primary-50 bg-contain bg-right-bottom bg-no-repeat px-4 py-8 font-medium"
					style={{
						backgroundImage: "url(/images/welcome-vector.svg)",
					}}
				>
					<p className="mb-2 text-sm">Welcome to the cool kids club</p>
					<p className="text-lg text-primary-700 md:text-2xl lg:w-4/5">
						The new way designers revolutionize their work. See how others are using
						Zadwax to accelerate their design process.
					</p>
				</div>
			</section>

			<section className="mt-8 flex flex-col gap-4 lg:flex-row">
				<article className="grow rounded-xl border border-gray-200 bg-white p-4 lg:w-[53%]">
					<div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b pb-4">
						<div>
							<h2 className="heading-2">Getting Started</h2>
							<p className="text-sm">
								Three simple steps to launch your first project
							</p>
						</div>
						<Button>Create Project</Button>
					</div>
					<ul className="space-y-3">
						{gretting_started_steps.map(el => (
							<li key={el.title}>
								<p className="font-medium">{el.title}</p>
								<p className="mt-1 text-sm text-gray-500">{el.description}</p>
							</li>
						))}
					</ul>
				</article>
				<article className="grow rounded-xl border border-gray-200 bg-white p-4">
					<div className="mb-4 border-b pb-4">
						<h2 className="heading-2">Research Tips and Tricks</h2>
						<p className="text-sm">Three simple steps to launch your first project</p>
					</div>
					<ul className="space-y-3">
						{research_steps.map(el => (
							<li key={el.title}>
								<p className="font-medium">{el.title}</p>
								<p className="mt-1 text-sm text-gray-500">{el.description}</p>
							</li>
						))}
					</ul>
				</article>
			</section>

			<section className="mt-8">
				<h2 className="heading-2">Resources for you</h2>
				<div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
					{mock_resources.map(el => (
						<ResourceCard key={el.id} {...el} />
					))}
				</div>
			</section>
		</div>
	);
}
