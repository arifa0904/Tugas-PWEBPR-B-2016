/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily : {
        'sans' : ['Poppins', 'sans-serif']
      },
      colors : {
        bgNavbar : '#D9D9D9',
        bgLuffy : '#FFF4DC',
        buttonLuffy : '#E29A00',
        bgZoro : '#E1FFDC',
        buttonZoro : '#7EB782',
        bgNami : '#FFCED7',
        buttonNami : '#FF5573',
        bgSanji : '#E2F2FF',
        buttonSanji : '#3279AF',
        bgUsopp : '#E9E8E2',
        buttonUsop : '#CAC8B3',
        bgChopper : '#E9E8E2',
        buttonChopper : '#CAC8B3',
        bgRobin :'#E9E8E2',
        buttonRobin :'#CAC8B3',
        bgBrook : '#FFDBC5',
        buttonBrook : '#E36415',
        bgJinbe : '#8FC5ED',
        buttonJinbe : '#275E87',
        bgFrame: '#F4F4F4;',
        borderFrame : '#D8D6C1'

      },
      fontWeight : {
        medium : '500'
      }
    },
  },
  plugins: [],
}

