export const fadeUp = {
  hidden: {
    y: '40%',
    opacity: 0,
    rotate: '10deg',
    filter: 'blur(10px)'
  },
  show: (i = 0) => ({
    y: 0,
    opacity: 1,
    rotate: 0,
    filter: 'blur(0)',
    transition: {
      duration: 0.6,
      delay: i,
      // ease: [0.37, 0, 0.63, 1]
    }
  })
}
export const blurOut = {
  hidden: {
    y: '100%',

    filter: 'blur(10px)'
  },
  show: (i = 0) => ({
    y: 0,

    filter: 'blur(0)',
    transition: {
      duration: 0.6,
      delay: i,
      // ease: [0.37, 0, 0.63, 1]
    }
  })
}