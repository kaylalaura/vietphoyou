export interface MenuItem {
  name: string
  price: string
  description: string
  image?: string
}

export interface MenuCategory {
  id: string
  title: string
  items: MenuItem[]
}

const thumb = (file: string) => `/images/thumb/${file}`

export const menu: MenuCategory[] = [
  {
    id: 'apps',
    title: 'Appetizers',
    items: [
      {
        name: 'Fresh Shrimp Spring Rolls',
        price: '$4.99',
        description: 'Shrimp, vermicelli, lettuce, cucumber, and carrots wrapped in rice paper. Served with peanut hoisin sauce.',
        image: thumb('fsr_shrimp.jpg'),
      },
      {
        name: 'Pork Spring Rolls',
        price: '$5.49',
        description: 'Pork, glass noodles, wood-ear mushrooms, and carrots wrapped in crispy fried rice paper. Served with sweet chili sauce.',
        image: thumb('pork_spring_rolls.jpg'),
      },
      {
        name: 'Vegetable Spring Rolls',
        price: '$4.99',
        description: 'Cabbage, glass noodles, wood-ear mushrooms, and carrots wrapped in crispy fried rice paper. Served with sweet chili sauce.',
        image: thumb('vegetable_spring_rolls.jpg'),
      },
      {
        name: 'Fried Chicken Wings',
        price: '$4.99',
        description: 'Marinated fried chicken wins served with our house dipping sauce.',
        image: thumb('chicken_wings.jpg'),
      },
      {
        name: 'Fried Tofu',
        price: '$4.99',
        description: 'Crispy fried tofu served with sweet chili sauce.',
        image: thumb('fried_tofu.jpg'),
      },
      {
        name: 'Shrimp Chips',
        price: '$2.49',
        description: 'Crispy shrimp chips served with our house dipping sauce.',
        image: thumb('shrimp_chips.jpg'),
      },
    ],
  },
  
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
      },
      {
        name: 'P7: Rare Steak & Beef ball Phở',
        price: '$13.49',
        description: 'House beef broth, rice noodles, with rare steak and beef ball.',
        image: thumb('rare_steak_beefball.jpg'),
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
        image: thumb('spicy_pho.jpg'),
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
      },
      {
        name: 'V8: Char Siu Vermicelli',
        price: '$13.99',
        description: 'Char Siu over cold vermicelli noodles, lettuce, cucumbers, pickled carrot, scallion oil, fried onions, and crushed peanuts.',
        image: thumb('char_siu_vermicelli.jpg'),
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
    id: 'rice',
    title: 'White Rice Dishes',
    items: [
      {
        name: 'W1: Grilled Chicken with Rice',
        price: '$13.99',
        description: 'Grilled chicken, steamed white rice, cucumber, pickled carrot, house fish sauce, and scallion oil.',
        image: thumb('grilled_chicken_white_rice.jpg'),
      },
      {
        name: 'W2: Sweet Chili Grilled Chicken with Rice',
        price: '$13.99',
        description: 'Grilled chicken, steamed white rice, cucumber, pickled carrot, house fish sauce, scallion oil, and sweet chili sauce.',
      },
      {
        name: 'W3: Grilled Pork with Rice',
        price: '$13.99',
        description: 'Grilled pork, steamed white rice, cucumber, pickled carrot, house fish sauce, and scallion oil.',
      },
      {
        name: 'W4: Sweet Chili Grilled Pork with Rice',
        price: '$13.99',
        description: 'Grilled pork, steamed white rice, cucumber, pickled carrot, house fish sauce, scallion oil, and sweet chili sauce.',
      },
      {
        name: 'W5: Char Siu with Rice',
        price: '$13.99',
        description: 'Char siu, steamed white rice, cucumber, pickled carrot, house fish sauce, and scallion oil.',
        image: thumb('grilled_chicken_white_rice.jpg'),
      },
    ],
  },
  {
    id: 'dessert',
    title: 'Desserts',
    items: [
      {
        name: 'Mango Sticky Rice',
        price: '$13.99',
        description: 'Sweet sticky rice with coconut sauce and juicy mangoes.',
        image: thumb('mango_sticky_rice.jpg'),
      },
      {
        name: 'Red Bean Rolls',
        price: '$13.99',
        description: 'Red bean paste and rice stick wrapped in crispy fried rice paper.',
        image: thumb('redbean_rolls.jpg'),
      },
    ],
  },
  {
    id: 'drinks',
    title: 'Drinks',
    items: [
      {
        name: 'Vietnamese Coffee',
        price: '$5.49',
        description: 'Freshly brewed vietnamese coffee sweetened with condensed milk.',
      },
      {
        name: 'Coconut Vietnamese Coffee',
        price: '$5.99',
        description: 'Freshly brewed vietnamese coffee sweetened with condensed milk and coconut cream, topped with coconut shavings.',
      },
      {
        name: 'Iced Jasmine Tea',
        price: '$2.49',
        description: 'Freshly brewed jasmine tea sweetened with simple syrup.',
      },
      {
        name: 'Golden Lime',
        price: '$3.99',
        description: 'Freshly squeezed lime, house mango syrup, topped off with sprite.',
      },

    ],
  },
]
