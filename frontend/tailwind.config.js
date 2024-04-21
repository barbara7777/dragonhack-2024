/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    safelist: [
        'bg-[url(progress1.png)]',
        'bg-[url(progress2.png)]',
        'bg-[url(progress3.png)]',
        'h-[35px]',
        'h-[22px]',
        'mt-1',
        'ring-lime-200',
        'ring-gray-200',
        'ring-8'
    ]
}

