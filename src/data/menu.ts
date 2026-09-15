export interface MenuItem {
  name: string
  price: string
  description: string
  image: string
}

export interface MenuCategory {
  id: string
  title: string
  items: MenuItem[]
}

const thumb = (file: string) => `/images/thumb/${file}`

export const menu: MenuCategory[] = [
  {
    id: 'pho',
    title: 'Phở',
    items: [
      {
        name: 'P1: Deluxe Beef Phở',
        price: '$15.49',
        description: 'Our house special — rare steak, brisket, tendon, tripe, and beef ball',
        image: thumb('deluxe_pho.jpg'),
      },
      {
        name: 'P2: Rare Steak, Tendon, Beef ball Phở',
        price: '$13.49',
        description: 'House beef broth, rice noodles, rare steak, tendon, and beef ball.',
        image: thumb('rar_steak_beef_ball_tendon.jpg'),
      },
      {
        name: 'P3: Rare Steak, Brisket, Tripe Phở',
        price: '$13.49',
        description: 'House beef broth, rice noodles, rare steak, brisket, and tripe.',
        image: thumb('rare_steak_brisket_tripe.jpg')
      },
      {
        name: 'P4: Brisket, Tripe & Tendon Phở',
        price: '$13.49',
        description: 'House beef broth, rice noodles, brisket, tripe, and tendon.',
        image: thumb('brisket_tripe_tendon.jpg'),
      },
      {
        name: 'P5: Rare Steak & Brisket Phở',
        price: '$13.49',
        description: 'House beef broth, rice noodles, with rare steak and brisket.',
        image: thumb('rare_steak_brisket.jpg'),
      },
      {
        name: 'P6: Brisket & Tendon Phở',
        price: '$13.49',
        description: 'House beef broth, rice noodles, with brisket and tendon.',
        image: thumb(''),
      },
      {
        name: 'P7: Rare Steak & Beef ball Phở',
        price: '$13.49',
        description: 'House beef broth, rice noodles, with rare steak and beef ball.',
        image: thumb(''),
      },
      {
        name: 'P8: Rare Steak Phở',
        price: '$13.49',
        description: 'House beef broth, rice noodles, thin-sliced rare steak that cooks in the bowl.',
        image: thumb('rate_steak.jpg'),
      },
      {
        name: 'P9: Brisket Phở',
        price: '$13.49',
        description: 'House beef broth, rice noodles, beef brisket.',
        image: thumb('brisket_pho.jpg'),
      },
      {
        name: 'P10: Spicy Beef Phở',
        price: '$13.49',
        description: 'House beef broth, rice noodles, served with beef brisket, Vietnamese pork sausage, and our house made chili oil.',
        image: thumb(''),
      },
      {
        name: 'P11: Chicken Phở',
        price: '$12.49',
        description: 'House beef broth, rice noodles, served with sliced chicken.',
        image: thumb('chicken_pho.jpg'),
      },
      {
        name: 'P12: Seafood Phở',
        price: '$15.99',
        description: 'House beef broth, rice noodles, served with shrimp, fish balls, and crab sticks.',
        image: thumb('seafood_pho.jpg'),
      },
      {
        name: 'P13: Vegetarian Phở',
        price: '$12.49',
        description: 'House mushroom-vegetable broth, rice noodles, tofu, seasonal vegetables.',
        image: thumb('vegetarian_pho.jpg'),
      },
      {
        name: 'P14: No Protein Phở',
        price: '$9.99',
        description: 'House beef bone broth with rice noodles.',
        image: thumb(''),
      },  
    ],
  },
  {
    id: 'bun',
    title: 'Vermicelli Bowls',
    items: [
      {
        name: 'V1: Grilled Chicken Vermicelli',
        price: '$13.99',
        description: 'Grilled chicken over cold vermicelli noodles, lettuce, cucumber, pickled carrot, scallion oil, fried onions, crushed peanuts.',
        image: thumb('grilled_chicken_vermicelli.jpg'),
      },
      {
        name: 'V2: Sweet Chili Grilled Chicken Vermicelli',
        price: '$13.99',
        description: 'Grilled chicken over cold vermicelli noodles, lettuce, cucumber, pickled carrot, scallion oil, fried onions, crushed peanuts, and sweet chili sauce.',
        image: thumb(''),
      },
      {
        name: 'V3: Grilled Pork Vermicelli',
        price: '$13.99',
        description: 'Grilled pork over cold vermicelli noodles, lettuce, cucumber, pickled carrot, scallion oil, fried onions, crushed peanuts.',
        image: thumb('grilled_pork_vermicelli.jpg'),
      },
      {
        name: 'V4: Sweet Chili Grilled Pork Vermicelli',
        price: '$13.99',
        description: 'Grilled pork over cold vermicelli noodles, lettuce, cucumber, pickled carrot, scallion oil, fried onions, crushed peanuts, and sweet chili sauce.',
        image: thumb('sweet_chili_pork_vermicelli.jpg'),
      },
      {
        name: 'V5: Shrimp Vermicelli',
        price: '$14.99',
        description: 'Shrimp over cold vermicelli noodles, lettuce, cucumber, pickled carrot, scallion oil, fried onions, and crushed peanuts.',
        image: thumb('shrimp_vermicelli.jpg'),
      },
      {
        name: 'V6: Tofu Vermicelli',
        price: '$13.99',
        description: 'Crispy fried tofu over cold vermicelli noodles, lettuce, cucumbers, pickled carrot, scallion oil, fried onions, and crushed peanuts.',
        image: thumb('tofu_vermicelli.jpg'),
      },
      {
        name: 'V7: Spring Roll Vermicelli',
        price: '$13.49',
        description: 'Pork spring roll over cold vermicelli noodles, lettuce, cucumbers, pickled carrot, scallion oil, fried onions, and crushed peanuts.',
        image: thumb(''),
      },
      {
        name: 'V8: Char Siu Vermicelli',
        price: '$13.99',
        description: 'Char Siu over cold vermicelli noodles, lettuce, cucumbers, pickled carrot, scallion oil, fried onions, and crushed peanuts.',
        image: thumb(''),
      },
    ],
  },
  {
    id: 'banh-mi',
    title: 'Bánh Mì',
    items: [
      {
        name: 'B1: Traditional Bánh Mì',
        price: '$9.49',
        description: 'Smoked Ham, Vietnamese sausage, pâté, pickled carrot, cilantro, jalapeño, and house mayo on a toasted baguette.',
        image: thumb('traditional_banh_mi.jpg'),
      },
      {
        name: 'B2: Char Siu Bánh Mì',
        price: '$9.49',
        description: 'Char Siu, pâté, pickled carrot, cilantro, jalapeño, and house mayo on a toasted baguette.',
        image: thumb('char_siu_banh_mi.jpg'),
      },
      {
        name: 'B3: Vegetarian Bánh Mì',
        price: '$9.49',
        description: 'Fried tofu, pickled carrot, cilantro, jalapeño, house mayo, on a toasted baguette.',
        image: thumb('vegetarian_banh_mi.jpg'),
      },
    ],
  },
  {
    id: 'rolls',
    title: 'Spring Rolls',
    items: [
      {
        name: 'Fresh Shrimp Spring Rolls',
        price: '$6.95',
        description: 'Shrimp, vermicelli, lettuce, and herbs wrapped in rice paper, peanut sauce.',
        image: thumb('fsr_shrimp.jpg'),
      },
      {
        name: 'Pork Spring Rolls',
        price: '$6.95',
        description: 'Grilled pork, vermicelli, lettuce, and herbs wrapped in rice paper, peanut sauce.',
        image: thumb('pork_spring_rolls.jpg'),
      },
      {
        name: 'Vegetable Spring Rolls',
        price: '$6.50',
        description: 'Tofu, vermicelli, lettuce, and herbs wrapped in rice paper, peanut sauce.',
        image: thumb('vegetable_spring_rolls.jpg'),
      },
    ],
  },
  {
    id: 'rice',
    title: 'Rice Plates',
    items: [
      {
        name: 'Grilled Chicken over White Rice',
        price: '$12.95',
        description: 'Grilled lemongrass chicken, steamed white rice, cucumber, pickled carrot, nước chấm.',
        image: thumb('grilled_chicken_white_rice.jpg'),
      },
    ],
  },
]
