import { useState, useCallback } from "react";

const palettes = [
  {
    id: 1, // Adjust the id based on your sequence
    name: "Super Mario",
    colors: [
      "#CE3A3E", // Mario Red
      "#306EFF", // Mario Blue
      "#FF4A4A", // Super Mushroom
      "#FFD84D", // Question Block Yellow
      "#B36B28", // Brick Block Brown
      "#3BBC4C", // Luigi Green
      "#FFA53E", // Fire Flower Orange
      "#FFC700", // Coin Gold
      "#76B1FF", // Sky Blue
      "#7C4A1E", // Goomba Brown
      "#FFD700", // Starman Yellow
      "#FAEBD7", // Princess Peach's Dress Pink
      "#0066CC", // Bowser Shell Blue
      "#FF6347", // Toad's Spots Red
      "#8B4513", // Warp Pipe Green
      "#B03060", // Wario Purple
      "#FF4500", // Lava Orange
      "#8FBC8F", // Yoshi Green
      "#800000", // Donkey Kong Brown
      "#B22222", // Koopa Troopa Red
    ],
  },

  {
    id: 2, // Adjust the id based on your sequence
    name: "Legend of Zelda",
    colors: [
      "#2A7F62", // Link's Tunic Green
      "#FFD700", // Triforce Gold
      "#C7C5B4", // Hylian Shield Silver
      "#7C4C00", // Master Sword Handle Brown
      "#A4DDED", // Navi Blue
      "#B22222", // Ganondorf Red
      "#5C4033", // Deku Tree Brown
      "#8A8A8A", // Ancient Stone Grey
      "#24445C", // Twilight Princess Blue
      "#E5E5E5", // Light World Sky
      "#3B5323", // Kokiri Forest Green
      "#DAA520", // Rupee Gold
      "#4B0082", // Dark World Purple
      "#4682B4", // Zora’s Domain Blue
      "#FF69B4", // Heart Container Pink
      "#808000", // Gerudo Desert Olive
      "#D2691E", // Goron Tunic Orange
      "#708090", // Shadow Temple Grey
      "#F5DEB3", // Sand of Time Tan
      "#6B8E23", // Korok Leaf Green
    ],
  },
  {
    id: 3, // Adjust the id based on your sequence
    name: "Donkey Kong",
    colors: [
      "#8B4513", // Donkey Kong Brown
      "#A52A2A", // Diddy Kong Cap Red
      "#DEB887", // Barrel Beige
      "#228B22", // Jungle Green
      "#FFD700", // Banana Yellow
      "#696969", // Cranky Kong's Cane Grey
      "#F4A460", // Tree Trunk Tan
      "#8FBC8F", // Jungle Leaves Green
      "#2F4F4F", // Dark Jungle Green
      "#D2691E", // Rambi the Rhino Brown
      "#CD5C5C", // Diddy Kong Shirt Red
      "#FFE4B5", // Dixie Kong Hair Blonde
      "#556B2F", // Vine Green
      "#C0C0C0", // Silver Minecart Grey
      "#808000", // Kremling Army Green
      "#B22222", // Kremling Eyes Red
      "#8A3324", // DK Tie Red
      "#F0E68C", // Banana Peel Yellow
      "#A9A9A9", // Stone Slab Grey
      "#BDB76B", // Sandy Beach Tan
    ],
  },
  {
    id: 4, // Adjust the id based on your sequence
    name: "Sonic",
    colors: [
      "#0F52BA", // Sonic Blue
      "#FFD700", // Ring Gold
      "#FF4500", // Knuckles Red
      "#32CD32", // Emerald Green
      "#87CEEB", // Sky Blue
      "#FFFFFF", // Sonic's Glove White
      "#FF6347", // Tails Orange
      "#8B4513", // Dr. Robotnik Brown
      "#B22222", // Dr. Robotnik's Mustache Red
      "#2F4F4F", // Shadow the Hedgehog Black
      "#D3D3D3", // Silver the Hedgehog Grey
      "#4682B4", // Water Zone Blue
      "#FFDAB9", // Amy Rose Pink
      "#FFDAB9", // Tails Fur Yellow
      "#A9A9A9", // Metal Sonic Silver
      "#228B22", // Green Hill Zone Grass Green
      "#D2691E", // Dirt Brown
      "#FFDEAD", // Sand Yellow
      "#8A2BE2", // Chaos Emerald Purple
      "#DC143C", // Speed Boost Red
    ],
  },
  {
    id: 5, // Adjust the id based on your sequence
    name: "Pokemon",
    colors: [
      "#FF0000", // Poké Ball Red
      "#FFFFFF", // Poké Ball White
      "#000000", // Poké Ball Black
      "#FFD700", // Pikachu Yellow
      "#4169E1", // Water Type Blue
      "#32CD32", // Grass Type Green
      "#FF4500", // Fire Type Orange
      "#8A2BE2", // Psychic Type Purple
      "#DAA520", // Ground Type Brown
      "#FF69B4", // Fairy Type Pink
      "#C0C0C0", // Steel Type Grey
      "#B22222", // Dragon Type Red
      "#696969", // Dark Type Grey
      "#D3D3D3", // Normal Type Grey
      "#8B4513", // Fighting Type Brown
      "#4682B4", // Flying Type Blue
      "#6A5ACD", // Ghost Type Purple
      "#FF6347", // Fire Type Red
      "#87CEEB", // Ice Type Blue
      "#708090", // Rock Type Slate Grey
    ],
  },
  {
    id: 6, // Adjust the id based on your sequence
    name: "Metroid",
    colors: [
      "#FF4500", // Samus' Suit Orange
      "#FFD700", // Power Suit Yellow
      "#228B22", // Zebes Jungle Green
      "#4682B4", // Phazon Blue
      "#8B0000", // Space Pirate Red
      "#2F4F4F", // Chozo Statue Grey
      "#4B0082", // Energy Beam Purple
      "#DC143C", // Ridley Crimson
      "#8A2BE2", // Varia Suit Violet
      "#000000", // Dark Samus Black
      "#556B2F", // Brinstar Green
      "#483D8B", // Gravity Suit Indigo
      "#CD853F", // Norfair Lava Brown
      "#7FFF00", // Energy Tank Green
      "#1E90FF", // Ice Beam Blue
      "#FFDAB9", // Chozo Artifact Beige
      "#D2691E", // Morph Ball Brown
      "#A9A9A9", // Space Station Grey
      "#9400D3", // Kraid Purple
      "#FF8C00", // Plasma Beam Orange
    ],
  },
  {
    id: 7, // Adjust the id based on your sequence
    name: "Castlevania",
    colors: [
      "#4B0082", // Dracula's Cloak Purple
      "#8B0000", // Blood Red
      "#2F4F4F", // Castle Stone Grey
      "#FFD700", // Vampire Killer Whip Gold
      "#000000", // Darkness Black
      "#696969", // Silver Cross Grey
      "#8A2BE2", // Magic Spell Violet
      "#DAA520", // Candlelight Gold
      "#B22222", // Vampire Fangs Crimson
      "#800000", // Coffin Wood Brown
      "#708090", // Graveyard Slate Grey
      "#D2691E", // Leather Whip Brown
      "#556B2F", // Haunted Forest Green
      "#483D8B", // Midnight Blue
      "#FF4500", // Flame Orange
      "#9400D3", // Dark Sorcery Purple
      "#A9A9A9", // Skeleton Bone Grey
      "#FF6347", // Blood Moon Red
      "#2E8B57", // Alucard's Coat Green
      "#F5DEB3", // Ancient Scroll Tan
    ],
  },
  {
    id: 8, // Adjust the id based on your sequence
    name: "MegaMan",
    colors: [
      "#1E90FF", // MegaMan Blue
      "#FFD700", // Power Up Yellow
      "#FF4500", // Blaster Fire Orange
      "#00CED1", // Energy Beam Cyan
      "#4682B4", // Ice Man Blue
      "#8B0000", // ProtoMan Red
      "#696969", // Metal Man Grey
      "#32CD32", // Leaf Shield Green
      "#FF6347", // Heat Man Red
      "#A9A9A9", // Robot Master Grey
      "#7FFF00", // Energy Tank Green
      "#D2691E", // Wood Man Brown
      "#B22222", // Quick Man Crimson
      "#808000", // Guts Man Olive
      "#DC143C", // Dr. Wily Red
      "#2F4F4F", // Shadow Man Grey
      "#4B0082", // Gravity Man Purple
      "#00FF7F", // Spark Man Green
      "#FF1493", // Charge Beam Pink
      "#FFA500", // Flame Man Orange
    ],
  },
  {
    id: 9, // Adjust the id based on your sequence
    name: "Teenage Mutant Ninja Turtles",
    colors: [
      "#008000", // Turtle Green
      "#FF4500", // Michelangelo's Bandana Orange
      "#800080", // Donatello's Bandana Purple
      "#0000FF", // Leonardo's Bandana Blue
      "#FF0000", // Raphael's Bandana Red
      "#A9A9A9", // Shredder's Armor Grey
      "#FFD700", // Sewer Lid Yellow
      "#8B4513", // Splinter's Robe Brown
      "#696969", // Sewer Grate Grey
      "#2F4F4F", // Urban Night Green
      "#8B0000", // Foot Clan Red
      "#D2691E", // Pizza Crust Brown
      "#FFFF00", // Pizza Cheese Yellow
      "#483D8B", // Mutagen Purple
      "#4682B4", // Water Tower Blue
      "#556B2F", // Alleyway Green
      "#FFA500", // Nunchaku Orange
      "#B22222", // Sai Red
      "#A52A2A", // Bo Staff Brown
      "#C0C0C0", // Katana Silver
    ],
  },
  {
    id: 10, // Adjust the id based on your sequence
    name: "Batman",
    colors: [
      "#000000", // Batman Suit Black
      "#FFD700", // Bat-Signal Yellow
      "#2F4F4F", // Gotham City Grey
      "#8B4513", // Wayne Manor Brown
      "#708090", // Batcave Slate Grey
      "#DC143C", // Robin's Cape Red
      "#696969", // Joker's Hair Green
      "#8A2BE2", // Joker's Suit Purple
      "#556B2F", // Poison Ivy Green
      "#B22222", // Blood Red
      "#483D8B", // Nightwing Blue
      "#A9A9A9", // Commissioner Gordon Grey
      "#9400D3", // Catwoman's Suit Purple
      "#8B0000", // Red Hood Crimson
      "#A52A2A", // Scarecrow Brown
      "#4682B4", // Arkham Asylum Blue
      "#FFD700", // Riddler's Cane Gold
      "#D2691E", // Batarang Brown
      "#FF4500", // Harley Quinn Red
      "#4B0082", // Gotham Night Indigo
    ],
  },
  {
    id: 11, // Adjust the id based on your sequence
    name: "Star Wars",
    colors: [
      "#000000", // Darth Vader Black
      "#FFFFFF", // Stormtrooper White
      "#4682B4", // Lightsaber Blue
      "#FF4500", // Lightsaber Red
      "#32CD32", // Lightsaber Green
      "#FFD700", // C-3PO Gold
      "#A9A9A9", // Millennium Falcon Grey
      "#8B4513", // Chewbacca Brown
      "#800000", // Tatooine Sand Red
      "#2F4F4F", // Death Star Grey
      "#8A2BE2", // Emperor's Cloak Purple
      "#B22222", // Sith Eyes Red
      "#DAA520", // Rebel Alliance Gold
      "#696969", // Jedi Robe Brown
      "#008080", // Boba Fett Green
      "#483D8B", // Space Blue
      "#D2691E", // Tatooine Sand Brown
      "#556B2F", // Yoda Green
      "#FFA500", // X-Wing Orange
      "#FF6347", // Kylo Ren Red
    ],
  },
  {
    id: 12, // Adjust the id based on your sequence
    name: "Harry Potter",
    colors: [
      "#4A2E19", // Hogwarts Castle Brown
      "#FFD700", // Golden Snitch Gold
      "#800000", // Gryffindor Red
      "#DAA520", // Gryffindor Gold
      "#006400", // Slytherin Green
      "#A9A9A9", // Slytherin Silver
      "#000080", // Ravenclaw Blue
      "#8B4513", // Ravenclaw Bronze
      "#FFD700", // Hufflepuff Yellow
      "#696969", // Hufflepuff Grey
      "#000000", // Death Eater Black
      "#D3D3D3", // Dumbledore's Beard Grey
      "#483D8B", // Forbidden Forest Indigo
      "#FF4500", // Fawkes the Phoenix Red
      "#B22222", // Weasley Hair Red
      "#556B2F", // Dark Mark Green
      "#708090", // Hogwarts Express Grey
      "#8A2BE2", // Ministry of Magic Purple
      "#9400D3", // Potion Purple
      "#FAEBD7", // Parchment Paper Beige
    ],
  },
  {
    id: 13, // Adjust the id based on your sequence
    name: "Legend of Zelda: Link",
    colors: [
      "#2A7F62", // Link's Tunic Green
      "#FFD700", // Triforce Gold
      "#FFFFFF", // Link's Undershirt White
      "#A9A9A9", // Chainmail Silver
      "#8B4513", // Leather Belt Brown
      "#FFDAB9", // Skin Tone Beige
      "#1E90FF", // Master Sword Blue
      "#B22222", // Boots Brown
      "#DAA520", // Hylian Shield Trim Gold
      "#4682B4", // Hylian Shield Blue
      "#CD5C5C", // Red Potion Red
      "#7CFC00", // Fairy Glow Green
      "#8B0000", // Hookshot Chain Red
      "#556B2F", // Korok Leaf Green
      "#483D8B", // Shadow Purple
      "#FF4500", // Fire Arrow Red
      "#2F4F4F", // Dark Tunic Green
      "#B03060", // Bomb Flower Pink
      "#D2691E", // Bow String Brown
      "#FFFFE0", // Light Arrow Yellow
    ],
  },
  {
    id: 14, // Adjust the id based on your sequence
    name: "Legend of Zelda: Zelda",
    colors: [
      "#FFD700", // Triforce Gold
      "#DDA0DD", // Princess Zelda's Dress Purple
      "#FFFFFF", // Royal Gloves White
      "#A9A9A9", // Silver Tiara
      "#800080", // Gown Trim Purple
      "#8B4513", // Leather Boots Brown
      "#FFFAF0", // Gown Fabric Ivory
      "#FF69B4", // Lipstick Pink
      "#2F4F4F", // Shadow Grey
      "#D2691E", // Leather Belt Brown
      "#4169E1", // Sapphire Blue
      "#B22222", // Ruby Red
      "#DAA520", // Hylian Crest Gold
      "#7CFC00", // Magical Aura Green
      "#4682B4", // Wisdom's Light Blue
      "#FAEBD7", // Parchment Scroll Beige
      "#FF4500", // Courage’s Flame Red
      "#556B2F", // Sacred Grove Green
      "#A52A2A", // Wooden Bow Brown
      "#E6E6FA", // Light Spirit Lavender
    ],
  },
  {
    id: 15, // Adjust the id based on your sequence
    name: "Legend of Zelda: Ganondorf",
    colors: [
      "#8B0000", // Ganondorf's Armor Red
      "#2F4F4F", // Dark Armor Grey
      "#FFD700", // Triforce of Power Gold
      "#800000", // Cloak Burgundy
      "#000000", // Evil Aura Black
      "#A9A9A9", // Iron Boots Silver
      "#B22222", // Glowing Eyes Crimson
      "#8A2BE2", // Sorcery Purple
      "#D2691E", // Leather Belt Brown
      "#FF6347", // Fire Magic Red
      "#556B2F", // Dark Forest Green
      "#B8860B", // Gerudo Desert Sand
      "#4B0082", // Twilight Purple
      "#CD853F", // Fortress Stone Brown
      "#708090", // Shadow Grey
      "#DAA520", // Golden Armor Trim
      "#D3D3D3", // Steel Weapon Grey
      "#483D8B", // Dark Magic Indigo
      "#FFA07A", // Cursed Flame Orange
      "#2E8B57", // Gerudo Green
    ],
  },
  {
    id: 16, // Adjust the id based on your sequence
    name: "Legend of Zelda: Deku",
    colors: [
      "#556B2F", // Deku Scrub Green
      "#8B4513", // Tree Bark Brown
      "#A52A2A", // Deku Nut Brown
      "#D2B48C", // Leafy Tan
      "#228B22", // Forest Canopy Green
      "#2E8B57", // Deep Forest Green
      "#CD853F", // Wooden Mask Brown
      "#8FBC8F", // Leaf Veins Green
      "#6B8E23", // Mossy Green
      "#D2691E", // Tree Trunk Brown
      "#A9A9A9", // Stone Grey
      "#FFD700", // Deku Flower Gold
      "#DAA520", // Autumn Leaf Gold
      "#B8860B", // Fallen Leaves Brown
      "#32CD32", // Fresh Grass Green
      "#808000", // Forest Floor Olive
      "#B22222", // Deku Sap Red
      "#8A2BE2", // Magical Essence Purple
      "#FAFAD2", // Sunlit Leaf Yellow
      "#FFE4B5", // Deku Shell Beige
    ],
  },
  {
    id: 17, // Adjust the id based on your sequence
    name: "Legend of Zelda: Goron",
    colors: [
      "#8B4513", // Goron Skin Brown
      "#D2691E", // Volcanic Rock Brown
      "#FFA500", // Lava Orange
      "#FF4500", // Fire Element Red
      "#A52A2A", // Boulder Brown
      "#CD853F", // Rocky Terrain Tan
      "#FFD700", // Gold Bracelet
      "#808080", // Stone Grey
      "#B22222", // Magma Vein Red
      "#D3D3D3", // Ash Grey
      "#556B2F", // Mountain Green
      "#2F4F4F", // Dark Stone Grey
      "#FFA07A", // Heated Stone Orange
      "#8B0000", // Molten Lava Red
      "#A9A9A9", // Iron Gauntlets Grey
      "#B8860B", // Earthen Brown
      "#708090", // Cooled Lava Grey
      "#DAA520", // Amber Gemstone Gold
      "#FF6347", // Ember Glow Red
      "#6B8E23", // Volcanic Moss Green
    ],
  },
  {
    id: 18, // Adjust the id based on your sequence
    name: "Legend of Zelda: Zora",
    colors: [
      "#1E90FF", // Zora Skin Blue
      "#87CEEB", // Water Surface Light Blue
      "#4682B4", // Deep Ocean Blue
      "#5F9EA0", // Aquatic Green-Blue
      "#B0C4DE", // Water Reflection Light Grey
      "#00CED1", // Turquoise Water
      "#7FFFD4", // Aquamarine Glow
      "#468499", // Riverbed Grey-Blue
      "#2E8B57", // Seaweed Green
      "#ADD8E6", // Shallow Water Blue
      "#708090", // Rocky Shore Grey
      "#40E0D0", // Oceanic Turquoise
      "#5F9EA0", // Coral Reef Teal
      "#B0E0E6", // Misty Water Light Blue
      "#AFEEEE", // Light Aqua
      "#F0F8FF", // Icy Surface White
      "#00BFFF", // Clear Water Blue
      "#D3D3D3", // Polished Stone Grey
      "#6495ED", // Zora Armor Blue
      "#4682B4", // Twilight River Blue
    ],
  },
  {
    id: 19, // Adjust the id based on your sequence
    name: "Legend of Zelda: Sheikah",
    colors: [
      "#2F4F4F", // Sheikah Cloak Grey
      "#000000", // Shadow Black
      "#B22222", // Sheikah Eye Red
      "#8B0000", // Ancient Blood Red
      "#D3D3D3", // Sacred Technology Silver
      "#8A2BE2", // Mystical Purple
      "#DAA520", // Ancient Relic Gold
      "#708090", // Stone Slate Grey
      "#483D8B", // Twilight Indigo
      "#556B2F", // Hidden Forest Green
      "#FFD700", // Triforce of Wisdom Gold
      "#8B4513", // Leather Strap Brown
      "#696969", // Stealth Gear Grey
      "#4682B4", // Water's Edge Blue
      "#4B0082", // Secret Passage Purple
      "#A9A9A9", // Ruined Shrine Grey
      "#CD5C5C", // Guardian’s Warning Red
      "#9400D3", // Enigmatic Magic Purple
      "#778899", // Ancient Ruins Grey
      "#FF6347", // Fire of Knowledge Red
    ],
  },
  {
    id: 20, // Adjust the id based on your sequence
    name: "Legend of Zelda: Ocarina of Time",
    colors: [
      "#228B22", // Kokiri Forest Green
      "#FFD700", // Triforce Gold
      "#1E90FF", // Ocarina of Time Blue
      "#DAA520", // Hylian Shield Gold
      "#8B4513", // Temple of Time Brown
      "#87CEEB", // Lake Hylia Sky Blue
      "#6B8E23", // Lost Woods Moss Green
      "#CD5C5C", // Fire Temple Red
      "#A9A9A9", // Stone Tower Grey
      "#FF4500", // Goron Tunic Red
      "#8A2BE2", // Shadow Temple Purple
      "#4682B4", // Zora's Domain Blue
      "#2F4F4F", // Graveyard Grey
      "#FF6347", // Din's Fire Orange
      "#556B2F", // Forest Temple Green
      "#FFE4B5", // Desert Colossus Sand
      "#B22222", // Ganondorf's Cloak Red
      "#FFDAB9", // Epona's Coat Beige
      "#808080", // Iron Boots Grey
      "#9400D3", // Spiritual Stone Purple
    ],
  },
  {
    id: 21, // Adjust the id based on your sequence
    name: "Legend of Zelda: Majora's Mask",
    colors: [
      "#8B008B", // Majora's Mask Purple
      "#FFD700", // Majora's Mask Gold Accents
      "#FF4500", // Majora's Mask Red Eyes
      "#8B0000", // Termina Moon Red
      "#483D8B", // Twilight Indigo
      "#FF6347", // Clock Town Sunset Red
      "#6B8E23", // Woodfall Temple Green
      "#DAA520", // Deku Mask Gold
      "#2F4F4F", // Ikana Canyon Grey
      "#8A2BE2", // Spirit Temple Purple
      "#CD5C5C", // Stone Tower Red
      "#FFDAB9", // Goron Mask Beige
      "#4169E1", // Zora Mask Blue
      "#D2691E", // Great Bay Temple Brown
      "#B22222", // Fierce Deity Mask Red
      "#7CFC00", // Fairy Glow Green
      "#A52A2A", // Romani Ranch Brown
      "#FFD700", // Bombers' Notebook Yellow
      "#B8860B", // Southern Swamp Brown
      "#000000", // Moon's Shadow Black
    ],
  },
  {
    id: 22, // Adjust the id based on your sequence
    name: "Batman: Batman",
    colors: [
      "#000000", // Batsuit Black
      "#1C1C1C", // Cape and Cowl Dark Grey
      "#FFD700", // Bat-Symbol Yellow
      "#696969", // Utility Belt Grey
      "#2F4F4F", // Batmobile Armor Grey
      "#A9A9A9", // Grapple Gun Silver
      "#708090", // Batcave Slate Grey
      "#2E2E2E", // Tactical Armor Dark Grey
      "#2F4F4F", // Batmobile Interior Grey
      "#1E90FF", // Computer Interface Blue
      "#4682B4", // Batwing Blue
      "#B0C4DE", // Flashbang White
      "#808080", // Batarang Silver
      "#D3D3D3", // Utility Belt Buckles Light Grey
      "#4B0082", // Deep Indigo Blue
      "#5F9EA0", // Gadget Screen Blue
      "#C0C0C0", // Smoke Bomb Silver
      "#DAA520", // Tactical Gear Gold Accents
      "#778899", // Batcave Technology Grey
      "#F0E68C", // Bat-Signal Light Yellow
    ],
  },
  {
    id: 23, // Adjust the id based on your sequence
    name: "Batman: Robin",
    colors: [
      "#FF0000", // Robin's Tunic Red
      "#008000", // Robin's Sleeves Green
      "#FFD700", // Robin's Cape Yellow
      "#000000", // Utility Belt Black
      "#696969", // Gauntlets Grey
      "#1C1C1C", // Mask Dark Grey
      "#8B4513", // Boots Brown
      "#D3D3D3", // Utility Buckles Light Grey
      "#2F4F4F", // Stealth Suit Grey
      "#800000", // Combat Gear Maroon
      "#DAA520", // Gold Emblem
      "#4B0082", // Night Patrol Indigo
      "#556B2F", // Tactical Green
      "#A9A9A9", // Smoke Bomb Silver
      "#B22222", // Robin's Symbol Crimson
      "#2E8B57", // Utility Belt Green
      "#D2691E", // Leather Straps Brown
      "#708090", // Stealth Tech Grey
      "#F0E68C", // Signal Light Yellow
      "#A52A2A", // Combat Boots Brown
    ],
  },
  {
    id: 24, // Adjust the id based on your sequence
    name: "Batman: Nightwing",
    colors: [
      "#000000", // Nightwing Suit Black
      "#1C1C1C", // Tactical Armor Dark Grey
      "#1E90FF", // Nightwing Emblem Blue
      "#2F4F4F", // Utility Belt Grey
      "#A9A9A9", // Escrima Sticks Silver
      "#4682B4", // Nightwing Gliding Gear Blue
      "#696969", // Gauntlets Grey
      "#708090", // Stealth Tech Grey
      "#B0C4DE", // Flashbang White
      "#2E2E2E", // Boots Dark Grey
      "#4B0082", // Night Patrol Indigo
      "#2F4F4F", // Mask Grey
      "#778899", // Batcomputer Interface Grey
      "#00008B", // Night Vision Deep Blue
      "#5F9EA0", // Gadget Screen Blue
      "#C0C0C0", // Grapple Hook Silver
      "#B0E0E6", // Reflective Armor Light Blue
      "#2A3D66", // Night Sky Blue
      "#8B9DC3", // Stealth Mode Blue-Grey
      "#D3D3D3", // Utility Belt Buckles Light Grey
    ],
  },
  {
    id: 25, // Adjust the id based on your sequence
    name: "Batman: Joker",
    colors: [
      "#800080", // Joker's Suit Purple
      "#32CD32", // Joker's Hair Green
      "#FF0000", // Joker's Lipstick Red
      "#FFFFFF", // Joker's Face White
      "#FFD700", // Teeth Yellow
      "#000000", // Eye Makeup Black
      "#8B0000", // Blood Red
      "#4B0082", // Nightshade Purple
      "#556B2F", // Poison Green
      "#A9A9A9", // Gunmetal Grey
      "#DC143C", // Smile Carving Crimson
      "#2F4F4F", // Shadow Grey
      "#FF4500", // Explosive Orange
      "#B22222", // Chaos Red
      "#DAA520", // Gold Chains
      "#696969", // Smoke Bomb Grey
      "#A52A2A", // Leather Gloves Brown
      "#8A2BE2", // Dark Violet
      "#FFDAB9", // Pale Skin Peach
      "#7CFC00", // Toxic Green
    ],
  },
  {
    id: 26, // Adjust the id based on your sequence
    name: "Batman: Bane",
    colors: [
      "#000000", // Bane's Mask Black
      "#2F4F4F", // Tactical Gear Dark Grey
      "#556B2F", // Venom Tube Green
      "#8B4513", // Leather Straps Brown
      "#A9A9A9", // Steel Buckles Grey
      "#B22222", // Combat Vest Red
      "#4B0082", // Night Indigo
      "#696969", // Gauntlets Grey
      "#8A2BE2", // Venom Vial Purple
      "#D3D3D3", // Mask Tubes Silver
      "#808080", // Utility Belt Grey
      "#A52A2A", // Combat Boots Brown
      "#DAA520", // Gold Accents
      "#2E2E2E", // Boots Dark Grey
      "#4682B4", // Tactical Armor Blue
      "#708090", // Stealth Tech Grey
      "#5F9EA0", // Gadget Screen Blue
      "#C0C0C0", // Grapple Hook Silver
      "#556B2F", // Military Green
      "#CD5C5C", // Blood Red
    ],
  },
  {
    id: 27, // Adjust the id based on your sequence
    name: "Super Mario: Bowser",
    colors: [
      "#FF4500", // Bowser's Fire Breath Orange
      "#228B22", // Bowser's Shell Green
      "#FFD700", // Spike Tips Gold
      "#8B0000", // Bowser's Hair Red
      "#D3D3D3", // Shell Spikes Silver
      "#A9A9A9", // Wrist Cuffs Grey
      "#B22222", // Bowser's Eyes Red
      "#000000", // Spiked Collar Black
      "#FF6347", // Lava Pit Red
      "#2F4F4F", // Fortress Stone Grey
      "#DAA520", // Belly Scales Gold
      "#8B4513", // Horns Brown
      "#2E2E2E", // Shell Rim Dark Grey
      "#FFE4B5", // Bowser's Skin Beige
      "#FFDAB9", // Flame Glow Peach
      "#8B3E2F", // Volcano Rock Brown
      "#FFA500", // Fireball Orange
      "#2F4F4F", // Dungeon Grey
      "#FF0000", // Firestorm Red
      "#708090", // Shadowy Armor Grey
    ],
  },
  {
    id: 28, // Adjust the id based on your sequence
    name: "Super Mario: Peach",
    colors: [
      "#FFDAB9", // Peach's Dress Pink
      "#FFB6C1", // Cheeks Blush Pink
      "#FF69B4", // Gown Trim Hot Pink
      "#FFF8DC", // Crown Gold
      "#4169E1", // Sapphire Earrings Blue
      "#FFFFFF", // Gloves White
      "#FFE4E1", // Parasol Pink
      "#FFD700", // Crown Jewel Yellow
      "#F0E68C", // Blonde Hair Light Yellow
      "#FF6347", // Lipstick Red
      "#FFFACD", // Castle Walls Cream
      "#DDA0DD", // Castle Carpet Lavender
      "#E6E6FA", // Flower Petal Light Purple
      "#FFA07A", // Heels Peach
      "#FFC0CB", // Bowtie Pink
      "#B0E0E6", // Sky Blue
      "#F5DEB3", // Tea Time Beige
      "#FFEBCD", // Parlor Ivory
      "#F08080", // Heart Emblem Coral
      "#FAFAD2", // Light Crown Gold
    ],
  },
  {
    id: 29, // Adjust the id based on your sequence
    name: "Super Mario: Luigi",
    colors: [
      "#32CD32", // Luigi's Hat Green
      "#006400", // Luigi's Overalls Dark Green
      "#FFD700", // Shirt Buttons Gold
      "#FFFFFF", // Gloves White
      "#000080", // Overall Straps Navy Blue
      "#90EE90", // Luigi's L Emblem Light Green
      "#B0E0E6", // Sky Blue
      "#808080", // Shoe Soles Grey
      "#2F4F4F", // Shadow Grey
      "#8B4513", // Boots Brown
      "#A9A9A9", // Poltergust Silver
      "#696969", // Poltergust Straps Dark Grey
      "#FFFAF0", // Flashlight Ivory
      "#228B22", // Pipe Green
      "#4682B4", // Mansion Blue
      "#FFDAB9", // Skin Tone Peach
      "#32CD32", // Fire Flower Green
      "#FAFAD2", // Light Yellow
      "#D3D3D3", // Ghost Light Grey
      "#B22222", // Fearful Red
    ],
  },
  {
    id: 30, // Adjust the id based on your sequence
    name: "Sonic: Tails",
    colors: [
      "#FFA500", // Tails' Fur Orange
      "#FFFFFF", // Tails' Muzzle and Tail Tips White
      "#FFD700", // Tool Belt Gold
      "#000000", // Shoes Straps Black
      "#FF4500", // Shoe Accents Red
      "#808080", // Wrench Grey
      "#B0C4DE", // Sky Blue
      "#696969", // Mechanical Parts Dark Grey
      "#A52A2A", // Shoe Soles Brown
      "#FFDAB9", // Skin Tone Peach
      "#4682B4", // Flight Goggles Blue
      "#FFE4B5", // Work Gloves Beige
      "#D3D3D3", // Robot Parts Silver
      "#F5F5F5", // Tail Spin White
      "#FF6347", // Tool Handles Red
      "#D2B48C", // Workshop Tan
      "#708090", // Gear Metal Grey
      "#87CEEB", // High Sky Blue
      "#2F4F4F", // Shadow Grey
      "#F0E68C", // Light Yellow
    ],
  },
  {
    id: 31, // Adjust the id based on your sequence
    name: "Sonic: Knuckles",
    colors: [
      "#FF0000", // Knuckles' Fur Red
      "#FFFFFF", // Knuckles' Gloves White
      "#FFD700", // Shoe Buckles Gold
      "#008000", // Shoe Straps Green
      "#A9A9A9", // Spiked Knuckles Grey
      "#000000", // Shoe Soles Black
      "#2F4F4F", // Shadow Grey
      "#8B4513", // Rugged Terrain Brown
      "#B22222", // Strength Red
      "#FF4500", // Lava Orange
      "#708090", // Stone Grey
      "#696969", // Metal Spikes Dark Grey
      "#D2691E", // Earthy Brown
      "#CD5C5C", // Canyon Red
      "#B0C4DE", // Sky Blue
      "#4682B4", // River Blue
      "#FFDAB9", // Skin Tone Peach
      "#A52A2A", // Grounded Brown
      "#F4A460", // Sandy Terrain Tan
      "#DAA520", // Emerald Gold
    ],
  },
  {
    id: 32, // Adjust the id based on your sequence
    name: "Sonic: Shadow",
    colors: [
      "#000000", // Shadow's Fur Black
      "#FF0000", // Shadow's Red Stripes
      "#FFD700", // Golden Rings
      "#2F4F4F", // Shadow Grey
      "#A9A9A9", // Shoe Accents Silver
      "#FFFFFF", // Shoe Soles White
      "#696969", // Glove Details Dark Grey
      "#8B0000", // Chaos Energy Crimson
      "#B22222", // Jet Boosters Red
      "#708090", // Tech Armor Grey
      "#4B0082", // Night Indigo
      "#FF4500", // Fire Trail Orange
      "#B0C4DE", // Mystic Blue
      "#1C1C1C", // Stealth Armor Dark Grey
      "#DC143C", // Rage Red
      "#D3D3D3", // High-Tech Silver
      "#8A2BE2", // Chaos Control Purple
      "#5F9EA0", // Energy Blast Blue
      "#808080", // Metal Claws Grey
      "#FFDAB9", // Skin Tone Peach
    ],
  },
  {
    id: 33, // Adjust the id based on your sequence
    name: "Star Wars: Light Side",
    colors: [
      "#FFFFFF", // Jedi Robes White
      "#87CEEB", // Skywalker Lightsaber Blue
      "#32CD32", // Yoda's Lightsaber Green
      "#FFD700", // Light Side Aura Gold
      "#F0E68C", // Jedi Temple Sandstone
      "#B0C4DE", // Force Ghost Blue
      "#ADD8E6", // Tatooine Sky Light Blue
      "#F5F5DC", // Jedi Robes Beige
      "#4682B4", // Calm Ocean Blue
      "#DAA520", // Anakin's Podracer Yellow
      "#FAFAD2", // Light Aura Pale Yellow
      "#00CED1", // Hologram Cyan
      "#A9A9A9", // Lightsaber Hilt Grey
      "#FFE4B5", // Tatooine Desert Sand
      "#7FFFD4", // Healing Waters Aqua
      "#808080", // Starship Grey
      "#90EE90", // Peaceful Meadow Green
      "#D3D3D3", // R2-D2 Silver
      "#B8860B", // Wookiee Bowcaster Bronze
      "#FFFACD", // Light Side Energy Light Yellow
    ],
  },
  {
    id: 34, // Adjust the id based on your sequence
    name: "Star Wars: Dark Side",
    colors: [
      "#000000", // Sith Robes Black
      "#FF0000", // Sith Lightsaber Red
      "#8B0000", // Dark Side Aura Crimson
      "#2F4F4F", // Death Star Grey
      "#696969", // Imperial Armor Dark Grey
      "#B22222", // Vader's Helmet Reflection Red
      "#800000", // Palpatine's Cloak Maroon
      "#4B0082", // Dark Force Energy Indigo
      "#708090", // Star Destroyer Grey
      "#A9A9A9", // Lightsaber Hilt Silver
      "#D3D3D3", // Stormtrooper Armor Silver
      "#DC143C", // Rage Red
      "#8B4513", // Darkside Temple Brown
      "#2E2E2E", // Kylo Ren's Mask Dark Grey
      "#B22222", // Imperial Guard Red
      "#A52A2A", // Darth Maul Skin Brown
      "#C71585", // Dark Side Lightning Magenta
      "#556B2F", // Dark Forest Green
      "#8B0000", // Sith Holocron Blood Red
      "#DAA520", // Gold Accents on Armor
    ],
  },

  // Add more palettes as needed
];

// ColorButton component
const ColorButton = ({ color, onClick }) => (
  <div className="flex flex-col items-center m-1 sm:m-2">
    <button
      className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 ease-in-out hover:scale-110 relative group"
      style={{
        backgroundColor: color,
        border: `2px solid ${color}`,
      }}
      onClick={() => onClick(color)}
      title={`Copy ${color}`}
    >
      <span
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out"
        style={{ boxShadow: `inset 0 0 0 2px white, inset 0 0 0 4px ${color}` }}
      ></span>
    </button>
    <span className="mt-1 text-xs sm:text-sm font-mono">{color}</span>
  </div>
);

// Palette component
const Palette = ({ name, colors, onColorClick }) => (
  <div className="bg-white p-2 sm:p-4 rounded-lg border border-gray-200 mb-4">
    <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">{name}</h2>
    <div className="flex flex-wrap justify-start">
      {colors.map((color, index) => (
        <ColorButton key={index} color={color} onClick={onColorClick} />
      ))}
    </div>
  </div>
);

// Main App component
const ColorPickingTool = () => {
  const [copiedColor, setCopiedColor] = useState(null);

  const handleColorClick = useCallback((color) => {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        setCopiedColor(color);
        setTimeout(() => setCopiedColor(null), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        // Fallback method for browsers that don't support clipboard API
        const tempInput = document.createElement("input");
        tempInput.value = color;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        setCopiedColor(color);
        setTimeout(() => setCopiedColor(null), 2000);
      });
  }, []);

  return (
    <div className="container mx-auto p-2 sm:p-4 max-w-4xl">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
        Color Palette Tool
      </h1>
      {palettes.map((palette) => (
        <Palette
          key={palette.id}
          name={palette.name}
          colors={palette.colors}
          onColorClick={handleColorClick}
        />
      ))}
      {copiedColor && (
        <div className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 bg-green-500 text-white p-2 rounded-md flex items-center text-sm sm:text-base">
          Copied: {copiedColor}
        </div>
      )}
    </div>
  );
};

export default ColorPickingTool;
