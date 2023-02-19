/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
      // ### Primary
      Lightred: 'hsl(0, 100%, 67%)',
      LightredBg: 'hsl(0, 100%, 98%)',
      Orangeyyellow: 'hsl(39, 100%, 56%)',
      OrangeyyellowBg: 'hsl(39, 100%, 97%)',
      Greenteal: 'hsl(166, 100%, 37%)',
      GreentealBg: 'hsl(166, 100%, 97%)',
      Cobaltblue: 'hsl(234, 85%, 45%)',
      CobaltblueBg: 'hsl(234, 85%, 96%)',

      // ## Gradients
      buttonBg: 'hsl(252, 100%, 55%)',
      LightslateblueBg: 'hsl(252, 100%, 67%)',
      LightroyalblueBg: 'hsl(241, 81%, 54%)',
      VioletBlueCircle: 'hsla(256, 72%, 46%, 1)',
      PersianBlueCircle: 'hsla(241, 72%, 46%, 0)',

      // ### Neutral
      PaleBlue: 'hsl(221, 100%, 96%)',
      LightLavender: 'hsl(241, 100%, 89%)',
      DarkGrayBlue: 'hsl(224, 30%, 27%)',
      },
      fontFamily: {
        hanken: ['Hanken Grotesk', 'sans-serif'],
      },
      backgroundColor: {
        bgColor: 'linear-gradient(to bottom, hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0));'
      }
    },
  },
  plugins: [],
}
