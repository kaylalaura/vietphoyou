export const site = {
  name: 'Viet Phở You',
  phone: '(540) 315-9126',
  phoneHref: 'tel:+15403159126',
  address: {
    line1: '126 Jackson St NE',
    line2: 'Blacksburg, VA 24060',
  },
  orderUrl:
    'https://order.mealkeyway.com/customer/release/index?mid=48476b46646f3057527733645567432f7355724772413d3d#/main',
  directionsUrl:
    'https://www.google.com/maps/search/?api=1&query=126+Jackson+St+NE+Blacksburg+VA+24060',
} as const

export const hours = [
  { day: 'Monday', time: 'Closed', closed: true },
  { day: 'Tuesday', time: '11 AM–9 PM', closed: false },
  { day: 'Wednesday', time: '11 AM–9 PM', closed: false },
  { day: 'Thursday', time: '11 AM–9 PM', closed: false },
  { day: 'Friday', time: '11 AM–9 PM', closed: false },
  { day: 'Saturday', time: '11 AM–9 PM', closed: false },
  { day: 'Sunday', time: '11 AM–9 PM', closed: false },
] as const
