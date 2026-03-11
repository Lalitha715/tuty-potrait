const PLACEHOLDER = "/assets/Product/placeholder.jpg"; // fallback image

export const product = [
  {
    category: "Drinkware & Mugs",
    items: [
      {
        name: "Ceramic Coffee Mugs (325ml)", 
        image:"Type/Ceramic-Coffe-350ml/WHITE.png",
        types: [
          { name: "White", image: "Type/Ceramic-Coffe-350ml/WHITE.png" },
          { name: "Blue", image: "Type/Ceramic-Coffe-350ml/BLUE.png" },
          { name: "Yellow", image: "Type/Ceramic-Coffe-350ml/YELLOW.png" },
          { name: "Brown", image: "Type/Ceramic-Coffe-350ml/BROWN.png" },
          { name: "Pink", image: "Type/Ceramic-Coffe-350ml/PINK.png" },
          { name: "Orange", image: "Type/Ceramic-Coffe-350ml/ORANGE.png" },
          { name: "Red", image: "Type/Ceramic-Coffe-350ml/RED.png" },
          { name: "Light Blue", image: "Type/Ceramic-Coffe-350ml/BLUE.png" },
          { name: "Dark Blue", image: "Type/Ceramic-Coffe-350ml/DARKBLUE.png" },
          { name: "Dark Green", image: "Type/Ceramic-Coffe-350ml/DARKGREEN.png" },
          { name: "Light Green", image: "Type/Ceramic-Coffe-350ml/LIGHTGREEN.png" },
          { name: "Black", image: "Type/Ceramic-Coffe-350ml/BLACK.png" }
        ]
      },
      {
        name: "Tea Cups (180ml)",
        image:"Type/Ceramic-Tea-180ml/WHITE.png",
        types: [
          { name: "White", image: "Type/Ceramic-Tea-180ml/WHITE.png" },
          { name: "Red", image: "Type/Ceramic-Tea-180ml/RED.png" },
          { name: "Yellow", image: "Type/Ceramic-Tea-180ml/YELLOW.png" }
        ]
      },
      {
        name: "Large Mugs (450ml)",
        image:"Type/Large-Mug-450ml/BLUE.png",
        types: [
          { name: "Red", image: "Type/Large-Mug-450ml/RED.png" },
          { name: "Blue", image: "Type/Large-Mug-450ml/BLUE.png" }
        ]
      },
      {
        name: "Magic Mugs",
        image:"Type/Magic-Mugs/BLUE.png",
        types: [
          { name: "Black (Heat Sensitive With Photo)", image: "Type/Magic-Mugs/BLACK.png" },
          { name: "Blue (Heat Sensitive)", image: "Type/Magic-Mugs/BLUE.png" }
        ]
      },
      {
        name: "Specialty Shape Mugs",
        image:"Type/Shape-Mugs/BLACKHHANDLE.png",
        types: [
          { name: "Heart Handle Magic Mug - Black", image: "Type/Shape-Mugs/BLACKHHANDLE.png" },
          { name: "Heart Handle Magic Mug - Blue", image: "Type/Shape-Mugs/BLUEHHANDLE.png" },
          { name: "Heart Shape Magic Mug - Black", image: "Type/Shape-Mugs/BLACKHEART.png" },
          { name: "Heart Shape Magic Mug - Blue", image: "Type/Shape-Mugs/BLUEHEART.png" },
          { name: "Heart Handle White Mug", image: "Type/Shape-Mugs/WHITEHHANDLE.png" },
          { name: "Heart Handle Red Mug", image: "Type/Shape-Mugs/REDHHANDLE.png" },
          { name: "Heart Shape White Mug", image: "Type/Shape-Mugs/WHITEHEART.png" }
        ]
      },
      {
        name: "Theme Mugs",
        image:"Type/Theme-Mugs/BIRTHDAY.png",
        types: [
          { name: "Happy Birthday Mug", image: "Type/Theme-Mugs/BIRTHDAY.png" },
          { name: "Love You Forever Mug", image: "Type/Theme-Mugs/FOREVER.png" },
          { name: "Happy Anniversary Mug", image: "Type/Theme-Mugs/ANNIVERSARY.png" }
        ]
      }
    ]
  },

  {
    category: "Water Bottles & Metal Gifts",
    items: [
      {
        name: "Water Bottles",
        image:"Type/Water-Bottle/BOTTLE-750R.png",
        types: [
          { name: "Sublimation Bottle 750ml", image: "Type/Water-Bottle/BOTTLE-750.png" },
          { name: "Sublimation Bottle 600ml", image: "Type/Water-Bottle/BOTTLE-600.png" },
          { name: "Engraved SS Bottle 750ml", image: "Type/Water-Bottle/BOTTLE-750R.png" },
          { name: "Engraved SS Bottle 1000ml", image: "Type/Water-Bottle/BOTTLE-1000.png" },
          { name: "Bamboo SS Bottle 500ml", image: "Type/Water-Bottle/BOTTLE-500.png" }
        ]
      },
      {
        name: "Personalized Jewelry",
        image:"Type/Jewellery/NAMEBRACE.png",
        types: [
          { name: "Press & Lock Bracelet", image: "Type/Jewellery/BRACELET.png" ,color:["Silver","Gold", "Black"]},
          { name: "SS Bracelet", image: "Type/Jewellery/NAMEBRACE.png",sizes:["2.08,2.10,2.12,2.14,2.16"] },
        ]
      },
      {
        name: "Dining & Utility",
        image:"Type/Dining/PLATE.png",
        types: [
          { name: "SS Plate 7x7 inch", image: "Type/Dining/PLATE.png" },
          { name: "SS Tiffin Box", image: "Type/Dining/TIFFINBOX.png" },
        ]
      }
    ]
  },

  {
    category: "Personalized Pillows & Textiles",
    items: [
      {
        name: "Fur Pillows",
        image:"Type/Fur-Pillow/SQUARERED.png",
        types: [
          { name: "Square - Red", image: "Type/Fur-Pillow/SQUARERED.png" },
          { name: "Square - Rainbow", image: "Type/Fur-Pillow/SQUARERAINBOW.png" },
          { name: "Square - White", image: "Type/Fur-Pillow/SQUAREWHITE.png" },
          { name: "Heart - Red", image: "Type/Fur-Pillow/REDHEART.png" },
          { name: "Heart - Rainbow", image: "Type/Fur-Pillow/RAINBOWHEART.png" },
          { name: "Heart - White", image: "Type/Fur-Pillow/WHITEHEART.png" },
          { name: "Heart - Pink", image: "Type/Fur-Pillow/PINKHEART.png" },
          { name: "Heart - Blue", image: "Type/Fur-Pillow/BLUEHEART.png" },
          { name: "Heart - Yellow", image: "Type/Fur-Pillow/YELLOWHEART.png" }
        ]
      },
      {
        name: "Small Fur Pillows",
        image:"Type/Small-Fur-Pillow/REDHEART.png",
        types: [
          { name: "Red", image: "Type/Small-Fur-Pillow/REDHEART.png" },
          { name: "Blue", image: "Type/Small-Fur-Pillow/BLUEHEART.png" },
          { name: "Pink", image: "Type/Small-Fur-Pillow/PINKHEART.png" },
          { name: "Yellow", image: "Type/Small-Fur-Pillow/YELLOWHEART.png" },
          { name: "White", image: "Type/Small-Fur-Pillow/WHITEHEART.png" }
        ]
      },
      {
        name: "Velvet & Satin Pillows",
        image:"Type/Velvet/REDSAT.png",
        types: [
          { name: "Velvet Rectangle - Yellow", image: "Type/Velvet/YELLOWVEL.png" },
          { name: "Velvet Rectangle - Magenta", image: "Type/Velvet/MAGENTAVEL.png" },
          { name: "Velvet Rectangle - Black", image: "Type/Velvet/BLACKVEL.png" },
          { name: "Velvet Heart", image: "Type/Velvet/HEARTVEL.png" },
          { name: "Satin Heart", image: "Type/Velvet/HEARTSAT.png" },
          { name: "Satin Square", image: "Type/Velvet/REDSAT.png" }
        ]
      },
      {
        name: "Themed Pillows",
        image:"Type/Themed/3HVEL.png",
        types: [
          { name: "Couple Pillow", image: "Type/Themed/COUPLE.png" },
          { name: "3-Heart Velvet Pillow", image: "Type/Themed/3HVEL.png" },
          { name: "Wedding Theme Pillow", image: "Type/Themed/WEDDING.png" },
          { name: "BirthDay Theme Pillow", image: "Type/Themed/BIRTHDAY.png" ,available:["Anniversary Theme","Love Theme"]},
        ]
      },
      {
        name: "Kids Educational Pillows",
        types: [
          { name: "Transport Theme", image: PLACEHOLDER },
          { name: "Numbers Theme", image: PLACEHOLDER },
          { name: "Fruits Theme", image: PLACEHOLDER },
          { name: "Vegetables Theme", image: PLACEHOLDER }
        ]
      },
      {
        name: "Apparel",
        types: [
          { name: "T-Shirt", image: PLACEHOLDER },
          { name: "Sash", image: PLACEHOLDER },
          { name: "Zipper Pouch", image: PLACEHOLDER }
        ]
      }
    ]
  },

  {
    category: "Frames & Wall Decor",
    items: [
      {
        name: "Photo Frames",
        types: [
          { name: "Embossing Frame", image: PLACEHOLDER },
          { name: "Imported LED Frame", image: PLACEHOLDER },
          { name: "Alloy Frame", image: PLACEHOLDER },
          { name: "Aluminum Frame", image: PLACEHOLDER },
          { name: "Collage Frame", image: PLACEHOLDER }
        ]
      },
      {
        name: "Specialty Prints",
        types: [
          { name: "Acrylic Print 4mm", image: PLACEHOLDER },
          { name: "Canvas Print", image: PLACEHOLDER },
          { name: "Metal Sheet Print", image: PLACEHOLDER },
          { name: "Tile Print", image: PLACEHOLDER },
          { name: "Rock Print", image: PLACEHOLDER }
        ]
      },
      {
        name: "Themed Frames",
        types: [
          { name: "Baby Frame", image: PLACEHOLDER },
          { name: "Miniature Frame", image: PLACEHOLDER },
          { name: "Sublimation MDF Frame", image: PLACEHOLDER },
          { name: "Multi-Hearts MDF Frame", image: PLACEHOLDER }
        ]
      },
      {
        name: "Custom Lighting",
        types: [
          { name: "LED Back Light Frame", image: PLACEHOLDER },
          { name: "Magic Mirror", image: PLACEHOLDER },
          { name: "Acrylic Bed Lamp", image: PLACEHOLDER }
        ]
      }
    ]
  },

  {
    category: "Awards, Mementos & Corporate Gifts",
    items: [
      {
        name: "Recognition",
        types: [
          { name: "Memento", image: PLACEHOLDER },
          { name: "3D Crystal Small", image: PLACEHOLDER },
          { name: "3D Crystal Medium", image: PLACEHOLDER },
          { name: "3D Crystal Large", image: PLACEHOLDER }
        ]
      },
      {
        name: "Desktop Accessories",
        types: [
          { name: "Table Top Calendar", image: PLACEHOLDER },
          { name: "Mouse Pad", image: PLACEHOLDER },
          { name: "Acrylic Table Top", image: PLACEHOLDER },
          { name: "Pen", image: PLACEHOLDER },
          { name: "Pen Set", image: PLACEHOLDER }
        ]
      },
      {
        name: "Personal Accessories",
        types: [
          { name: "Customized Wallet", image: PLACEHOLDER },
          { name: "Keychain - Metal", image: PLACEHOLDER },
          { name: "Keychain - Acrylic", image: PLACEHOLDER },
          { name: "Keychain - Photo", image: PLACEHOLDER }
        ]
      }
    ]
  },

  {
    category: "Creative Arts & Novelties",
    items: [
      {
        name: "Custom Art",
        types: [
          { name: "Resin Art", image: PLACEHOLDER },
          { name: "Caricature", image: PLACEHOLDER },
          { name: "Wood Engraving", image: PLACEHOLDER }
        ]
      },
      {
        name: "Clocks",
        types: [
          { name: "Standard Clock", image: PLACEHOLDER },
          { name: "Acrylic Clock", image: PLACEHOLDER }
        ]
      },
      {
        name: "Small Keepsakes",
        types: [
          { name: "Fridge Magnet", image: PLACEHOLDER },
          { name: "Badge", image: PLACEHOLDER },
          { name: "3D Flip Photo", image: PLACEHOLDER }
        ]
      },
      {
        name: "Event Specific",
        types: [
          { name: "1st Birthday Cutout", image: PLACEHOLDER },
          { name: "Standy Display", image: PLACEHOLDER },
          { name: "Personalized Chocolate Box", image: PLACEHOLDER }
        ]
      }
    ]
  }
];