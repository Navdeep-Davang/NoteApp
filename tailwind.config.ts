import type { Config } from "tailwindcss";

const config: Config = {
darkMode: ["class"],
content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
	"./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [ 'xl:grid-cols-4', 'xl:grid-cols-5', 'xl:grid-cols-6', 'xl:grid-cols-7', 'xl:grid-cols-8', 'xl:grid-cols-9', 'lg:grid-cols-4', ], 
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			success: {
  				DEFAULT: 'hsl(var(--success))',
  				foreground: 'hsl(var(--success-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			sans: ['Inter', 'sans-serif']
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  scrollbar: {
			DEFAULT: {
			  track: 'bg-gray-200',
			  thumb: 'bg-gray-400 hover:bg-gray-500',
			},
			// You can add more custom styles here
		  },
  		keyframes: {
  			'caret-blink': {
  				'0%,70%,100%': {
  					opacity: '1'
  				},
  				'20%,50%': {
  					opacity: '0'
  				}
  			},
  			'accordion-down': {
				'0%': {
					height: '0',
					opacity: '0', 
				},
				'100%': {
					height: 'var(--radix-accordion-content-height)',
					opacity: '1', 
				},
			},
  			'accordion-up': {
				'0%': {
					height: 'var(--radix-accordion-content-height)',
					opacity: '1', 
				},
				'100%': {
					height: '0',
					opacity: '0', 
				},
			},
  		},
  		animation: {
  			'caret-blink': 'caret-blink 1.25s ease-out infinite',
  			'accordion-down': 'accordion-down 0.3s ease-in-out', 
        	'accordion-up': 'accordion-up 0.3s ease-in-out',
  		}
  	}
  },
  plugins: [
	require('tailwind-scrollbar'),
	require("tailwindcss-animate")],
};
export default config;
