export default {
  CIRCLE: {
    easing: 'easeInOut',
    color: '#FFC107',
    strokeWidth: 7,
    trailColor: '#191922',
    step: (state:unknown, circle:any) => {
      const value = Math.round(circle.value() * 100)
      if (value === 0) circle.setText('')
      else circle.setText(`${value}%`)
    },
  },
  LINE: {
    easing: 'easeInOut',
    color: '#FFC107',
    trailColor: '#191922',
    strokeWidth: 2,
    step: (state:unknown, line:any) => {
      line.setText('')
    },
  },
}
