import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/addon-links",
		"@storybook/addon-a11y",
		"@storybook/addon-mdx-gfm",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	viteFinal: async config => {
		config.plugins = config.plugins || [];

		// Automatically include all SCSS files in the project
		config.css = {
			...config.css,
			preprocessorOptions: {
				scss: {
					additionalData: `
            import.meta.glob('/src/**/*.scss', { eager: true });
          `,
				},
			},
		};

		return config;
	},
};
export default config;
