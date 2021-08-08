/** @type { import("snowpack").SnowpackUserConfig } */
const config = {
	mount: {
		public: { url: '/', static: true },
		src: { url: '/dist' },
	},
	plugins: [
		'@snowpack/plugin-dotenv',
		'@snowpack/plugin-react-refresh',
		'@snowpack/plugin-typescript',
	],
	routes: [
		/* SPA fallback in development: */
		{ match: "routes", src: ".*", dest: "/index.html" },
	],
	optimize: {},
	packageOptions: {},
	devOptions: {},
	buildOptions: {},
}

export default config
