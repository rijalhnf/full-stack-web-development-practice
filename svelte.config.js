import adapter from '@sveltejs/adapter-auto';
import { append } from 'svelte/internal';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	
		// target: '#svelte' -> harusnya ada ini utk nembak src/app.html id svelte
	}
};

export default config;
