/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    // themes: ['light'],
    // Only include the light theme - dobavih go, zashtoto nz zashto beshe na cherna tema
    // UROK za temi. Neshto, koeto instruktoryt MNOGO haresva v daisyUI. Dobavihme winter i sunset. Vsyshtnost vtorata na instruktora ne e sunset, no negovata vtora ne mi haresa i slozhih
    // tazi. So now we just need to go back to our nav bar and set up the change theme functionality.
    themes: ['winter', 'sunset'],
  },
};