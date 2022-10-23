/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    fontFamily: { 
      'Poppins-ExtraBold': [
        'Poppins-ExtraBold',
        // Font-Weight: 800
      ],
      'Poppins-Bold': [
        'Poppins-Bold',
        // Font-Weight: 700
      ],
      'Poppins-Medium': [
        'Poppins-Medium'
        // Font-Weight: 500
      ],
      'Poppins-Regular': [
        'Poppins-Regular'
        // Font-Weight: 400
      ],
      'Poppins-SemiBold': [
        'Poppins-SemiBold'
        // Font-Weight: 600
      ],
    },
    extend: {},
  },
  plugins: [],
}
