export interface Game {
  id: string;
  title: string;
  caption: string;
  category: Category;
  icon: string;
  href: string;
  searchTerms?: string;
}

export type Category =
  | "Multiplayer"
  | "Flash"
  | "Emulator"
  | "Platformer"
  | "Puzzle"
  | "Sports"
  | "Driving"
  | "Fighting"
  | "Horror"
  | "2D"
  | "Other";

export const CATEGORIES: Category[] = [
  "Multiplayer",
  "Flash",
  "Emulator",
  "Platformer",
  "Puzzle",
  "Sports",
  "Driving",
  "Fighting",
  "Horror",
  "2D",
  "Other",
];

export const games: Game[] = [
  { id: "retro-bowl", title: "Retro Bowl", caption: "Retro Bowl", category: "Sports", icon: "/img/icons/retro_bowl_icon.webp", href: "/games/retro-bowl", searchTerms: "Retro Bowl" },
  { id: "cookie-clicker", title: "Cookie Clicker", caption: "Cookie Clicker", category: "Other", icon: "/img/icons/cookieclicker.webp", href: "/games/cookie-clicker", searchTerms: "Cookie Clicker" },
  { id: "geometry-dash", title: "Geometry Dash", caption: "Geometry Dash", category: "Platformer", icon: "/img/icons/geometrydash.webp", href: "/games/geometry-dash", searchTerms: "Geometry Dash" },
  { id: "fireboy-watergirl", title: "Fireboy & Watergirl", caption: "Fireboy & Watergirl", category: "Puzzle", icon: "/img/icons/fireboy.webp", href: "/games/fireboy-watergirl", searchTerms: "Fireboy and Watergirl" },
  { id: "combat-reloaded", title: "Combat Arms", caption: "Combat Arms", category: "Multiplayer", icon: "/img/icons/combatreloaded.avif", href: "/games/combat-reloaded", searchTerms: "Combat Reloaded" },
  { id: "crossy-roads", title: "Crossy Roads", caption: "Crossy Roads", category: "Platformer", icon: "/img/icons/crossyroad.webp", href: "/games/crossy-roads", searchTerms: "Crossy Roads" },
  { id: "raft-wars-1", title: "Raft Wars", caption: "Raft Wars", category: "Flash", icon: "/img/icons/rw1.webp", href: "/games/flash-games/raft-wars-1", searchTerms: "Raft Wars 1" },
  { id: "raft-wars-2", title: "Raft Wars 2", caption: "Raft Wars 2", category: "Flash", icon: "/img/icons/rw2.webp", href: "/games/flash-games/raft-wars-2", searchTerms: "Raft Wars 2" },
  { id: "subway-surfers", title: "Subway Surfers", caption: "Subway Surfers", category: "Platformer", icon: "/img/icons/subway.webp", href: "/games/subway-surfers", searchTerms: "Subway Surfers" },
  { id: "1v1-lol", title: "1v1.LOL", caption: "1v1.LOL", category: "Multiplayer", icon: "/img/icons/1v1.webp", href: "/games/1v1-lol", searchTerms: "1v1.lol" },
  { id: "minecraft", title: "Minecraft", caption: "Minecraft", category: "Multiplayer", icon: "/img/icons/minecraft.webp", href: "/games/minecraft/", searchTerms: "Minecraft MC" },
  { id: "paper-io", title: "Paper.io", caption: "Paper.io", category: "Multiplayer", icon: "/img/icons/paper.webp", href: "/games/paper-io", searchTerms: "Paper.io" },
  { id: "super-mario-64", title: "Super Mario 64", caption: "Super Mario 64", category: "Emulator", icon: "/img/icons/supermario64.webp", href: "/games/super-mario-64", searchTerms: "Super Mario 64" },
  { id: "drift-boss", title: "Drift Boss", caption: "Drift Boss", category: "Driving", icon: "/img/icons/driftboss.webp", href: "/games/drift-boss", searchTerms: "Driftboss" },
  { id: "fnaf", title: "FNAF", caption: "FNAF", category: "Horror", icon: "/img/icons/fnaf.webp", href: "/games/fnaf", searchTerms: "Five Nights at Freddys FNAF" },
  { id: "super-star-car", title: "Super Star Car", caption: "Super Star Car", category: "Driving", icon: "/img/icons/superstarcar.avif", href: "/games/super-star-car", searchTerms: "Super Star Car" },
  { id: "alien-hominid", title: "Alien Hominid", caption: "Alien Hominid", category: "Flash", icon: "/img/icons/alien.webp", href: "/games/flash-games/alien-hominid", searchTerms: "Alien Hominid" },
  { id: "bloonstd", title: "BloonsTD", caption: "BloonsTD", category: "Flash", icon: "/img/icons/bloons1.webp", href: "/games/flash-games/bloonstd", searchTerms: "BloonsTD" },
  { id: "bloonstd-2", title: "BloonsTD 2", caption: "BloonsTD 2", category: "Flash", icon: "/img/icons/bloons2.webp", href: "/games/flash-games/bloonstd-2", searchTerms: "BloonsTD 2" },
  { id: "bloonstd-3", title: "BloonsTD 3", caption: "BloonsTD 3", category: "Flash", icon: "/img/icons/bloons3.webp", href: "/games/flash-games/bloonstd-3", searchTerms: "BloonsTD 3" },
  { id: "bloxorz", title: "Bloxorz", caption: "Bloxorz", category: "Flash", icon: "/img/icons/bloxorz.webp", href: "/games/flash-games/bloxorz", searchTerms: "Bloxorz" },
  { id: "breaking-the-bank", title: "Breaking the Bank", caption: "Breaking the Bank", category: "Flash", icon: "/img/icons/breakbank.webp", href: "/games/flash-games/breaking-the-bank", searchTerms: "Breaking the Bank" },
  { id: "escaping-the-prison", title: "Escaping The Prison", caption: "Escaping The Prison", category: "Flash", icon: "/img/icons/escapeprison.webp", href: "/games/flash-games/escaping-the-prison", searchTerms: "Escaping the Prison" },
  { id: "stealing-the-diamond", title: "Stealing the Diamond", caption: "Stealing the Diamond", category: "Flash", icon: "/img/icons/stealdiamond.webp", href: "/games/flash-games/stealing-the-diamond", searchTerms: "Stealing the Diamond" },
  { id: "infiltrating-the-airship", title: "Infiltrating the Airship", caption: "Infiltrating the Airship", category: "Flash", icon: "/img/icons/airship.webp", href: "/games/flash-games/infiltrating-the-airship", searchTerms: "Infiltrating the Airship" },
  { id: "fleeing-the-complex", title: "Fleeing the Complex", caption: "Fleeing the Complex", category: "Flash", icon: "/img/icons/complex.webp", href: "/games/flash-games/fleeing-the-complex", searchTerms: "Fleeing the Complex" },
  { id: "meat-boy", title: "Meat Boy", caption: "Meat Boy", category: "Flash", icon: "/img/icons/meat.webp", href: "/games/flash-games/meat-boy", searchTerms: "Meat Boy" },
  { id: "electric-man-2", title: "Electric Man 2", caption: "Electric Man 2", category: "Flash", icon: "/img/icons/electric.webp", href: "/games/flash-games/electric-man-2", searchTerms: "Electric Man 2" },
  { id: "fancy-pants", title: "Fancy Pants", caption: "Fancy Pants", category: "Flash", icon: "/img/icons/fancy.avif", href: "/games/flash-games/fancy-pants", searchTerms: "Fancy Pants Adventures" },
  { id: "binding-of-isaac", title: "The Binding of Isaac", caption: "The Binding of Isaac", category: "Flash", icon: "/img/icons/isaac.webp", href: "/games/flash-games/binding-of-isaac", searchTerms: "The Binding of Isaac" },
  { id: "impossible-quiz", title: "The Impossible Quiz", caption: "The Impossible Quiz", category: "Flash", icon: "/img/icons/impossible.avif", href: "/games/flash-games/impossible-quiz", searchTerms: "The Impossible Quiz" },
  { id: "impossible-quiz-2", title: "The Impossible Quiz 2", caption: "The Impossible Quiz 2", category: "Flash", icon: "/img/icons/impossible2.avif", href: "/games/flash-games/impossible-quiz-2", searchTerms: "The Impossible Quiz 2" },
  { id: "worlds-hardest-game", title: "The World's Hardest Game", caption: "The World's Hardest Game", category: "Flash", icon: "/img/icons/hardgame1.webp", href: "/games/flash-games/worlds-hardest-game", searchTerms: "The Worlds Hardest game" },
  { id: "worlds-hardest-game-2", title: "The World's Hardest Game 2", caption: "The World's Hardest Game 2", category: "Flash", icon: "/img/icons/hardgame2.webp", href: "/games/flash-games/worlds-hardest-game-2", searchTerms: "The Worlds Hardest game 2" },
  { id: "2048", title: "2048", caption: "2048", category: "Puzzle", icon: "/img/icons/2048.webp", href: "/games/2048", searchTerms: "2048" },
  { id: "tetris", title: "Tetris", caption: "Tetris", category: "Puzzle", icon: "/img/icons/tetris.webp", href: "/games/tetris", searchTerms: "Tetris" },
  { id: "friday-night-funkin", title: "Friday Night Funkin", caption: "Friday Night Funkin", category: "Puzzle", icon: "/img/icons/friday.webp", href: "/games/friday-night-funkin", searchTerms: "Friday Night Funking FNF" },
  { id: "swords-and-sandals-2", title: "Swords and Sandals 2", caption: "Swords and Sandals 2", category: "Flash", icon: "/img/icons/sas2.webp", href: "/games/flash-games/swords-and-sandals-2", searchTerms: "Swords and Sandals 2" },
  { id: "agar-io", title: "Agar.io", caption: "Agar.io", category: "Multiplayer", icon: "/img/icons/agar.webp", href: "/games/agar-io", searchTerms: "agar.io" },
  { id: "mini-golf", title: "Mini Golf", caption: "Mini Golf", category: "Sports", icon: "/img/icons/golfmini.webp", href: "/games/mini-golf", searchTerms: "Mini Golf" },
  { id: "run-3", title: "Run 3", caption: "Run 3", category: "Platformer", icon: "/img/icons/run3.webp", href: "/games/run-3", searchTerms: "Run 3" },
  { id: "uno", title: "Uno", caption: "Uno", category: "Puzzle", icon: "/img/icons/uno.webp", href: "/games/uno", searchTerms: "Uno" },
  { id: "flappy-bird", title: "Flappy Bird", caption: "Flappy Bird", category: "Platformer", icon: "/img/icons/bird.webp", href: "/games/flappy-bird", searchTerms: "Flappy Bird" },
  { id: "duck-life", title: "Duck Life", caption: "Duck Life", category: "Puzzle", icon: "/img/icons/dl1.webp", href: "/games/duck-life", searchTerms: "Duck Life 1" },
  { id: "duck-life-2", title: "Duck Life 2", caption: "Duck Life 2", category: "Puzzle", icon: "/img/icons/dl2.avif", href: "/games/duck-life-2", searchTerms: "Duck Life 2" },
  { id: "duck-life-3", title: "Duck Life 3", caption: "Duck Life 3", category: "Puzzle", icon: "/img/icons/dl3.avif", href: "/games/duck-life-3", searchTerms: "Duck Life 3" },
  { id: "duck-life-4", title: "Duck Life 4", caption: "Duck Life 4", category: "Puzzle", icon: "/img/icons/dl4.avif", href: "/games/duck-life-4", searchTerms: "Duck Life 4" },
  { id: "pizza-party", title: "Pizza Party", caption: "Pizza Party", category: "Other", icon: "/img/icons/pizzaparty.webp", href: "/games/pizza-party", searchTerms: "Pizza Party" },
  { id: "yohoho-io", title: "Yohoho.io", caption: "Yohoho.io", category: "Multiplayer", icon: "/img/icons/yohoho.webp", href: "/games/yohoho-io", searchTerms: "Yohoho.io" },
  { id: "moto-x3m", title: "Moto X3M", caption: "Moto X3M", category: "Sports", icon: "/img/icons/motox3m.webp", href: "/games/moto-x3m", searchTerms: "Moto X3M" },
  { id: "stickman-peacekeeper", title: "Stickman Peacekeeper", caption: "Stickman Peacekeeper", category: "Fighting", icon: "/img/icons/stickmanpeace.webp", href: "/games/stickman-peacekeeper", searchTerms: "Stickman Peacekeeper" },
  { id: "endless-lake", title: "Endless Lake", caption: "Endless Lake", category: "Platformer", icon: "/img/icons/endlesslake.webp", href: "/games/endless-lake", searchTerms: "Endless Lake" },
  { id: "cs-surf", title: "CS Surf", caption: "CS Surf", category: "Platformer", icon: "/img/icons/cssurf.webp", href: "/games/cs-surf", searchTerms: "CS Surf" },
  { id: "habbo-clicker", title: "Habbo Clicker", caption: "Habbo Clicker", category: "Other", icon: "/img/icons/habboclicker.webp", href: "/games/habbo-clicker", searchTerms: "Habbo Clicker" },
  { id: "money-movers", title: "Money Movers", caption: "Money Movers", category: "Puzzle", icon: "/img/icons/moneymovers1.webp", href: "/games/money-movers", searchTerms: "Money Movers" },
  { id: "bingo", title: "Bingo", caption: "Bingo", category: "Puzzle", icon: "/img/icons/Bingo.webp", href: "/games/bingo", searchTerms: "Bingo" },
  { id: "castle-defender", title: "Castle Defender", caption: "Castle Defender", category: "Puzzle", icon: "/img/icons/castledefender.webp", href: "/games/castle-defender", searchTerms: "Castle Defender" },
  { id: "slope", title: "Slope", caption: "Slope", category: "Platformer", icon: "/img/icons/slope.webp", href: "/games/slope", searchTerms: "Slope" },
  { id: "madalin-stunt-cars-2", title: "Madalin Stunt Cars 2", caption: "Madalin Stunt Cars 2", category: "Driving", icon: "/img/icons/madalin.webp", href: "/games/madalin-stunt-cars-2", searchTerms: "Madalin Stunt Cars 2" },
  { id: "doodle-jump", title: "Doodle Jump", caption: "Doodle Jump", category: "Platformer", icon: "/img/icons/doodle.webp", href: "/games/doodle-jump", searchTerms: "Doodle Jump" },
  { id: "rooftop-snipers", title: "Rooftop Snipers", caption: "Rooftop Snipers", category: "Multiplayer", icon: "/img/icons/rooftop.webp", href: "/games/rooftop-snipers", searchTerms: "Rooftop Snipers" },
  { id: "tanuki-sunset", title: "Tanuki Sunset", caption: "Tanuki Sunset", category: "Driving", icon: "/img/icons/tanuki.webp", href: "/games/tanuki-sunset", searchTerms: "Tanuki Sunset" },
  { id: "getting-over-it", title: "Getting Over It", caption: "Getting Over It", category: "Driving", icon: "/img/icons/gettingoverit.webp", href: "/games/getting-over-it", searchTerms: "Getting Over it" },
  { id: "2d-fortnite", title: "2D Fortnite", caption: "2D Fortnite", category: "Fighting", icon: "/img/icons/fortnite.webp", href: "/games/2d-fortnite", searchTerms: "2D Fortnite" },
  { id: "spiral-roll", title: "Spiral Roll", caption: "Spiral Roll", category: "Other", icon: "/img/icons/spiralroll.webp", href: "/games/spiral-roll", searchTerms: "Spiral Roll" },
  { id: "zombs-royale", title: "Zombs Royale", caption: "Zombs Royale", category: "Multiplayer", icon: "/img/icons/zombs.webp", href: "/games/zombs-royale", searchTerms: "Zombs Royale Zombs.io" },
  { id: "digital-museum", title: "Digital Museum", caption: "Digital Museum", category: "Other", icon: "/img/icons/digital.webp", href: "/games/digital-museum", searchTerms: "Digital Museum Mario Super Kart 64" },
  { id: "ssb64", title: "SSB64", caption: "SSB64", category: "Emulator", icon: "/img/icons/smash.webp", href: "/games/ssb64", searchTerms: "Super Smash Bros 64 SSB64" },
  { id: "cs-1-6", title: "CS 1.6 Online", caption: "CS 1.6 Online", category: "Multiplayer", icon: "/img/icons/1.6.webp", href: "/games/cs-1-6", searchTerms: "CS 1.6 CSGO CS2 CS1.6" },
  { id: "among-us", title: "Among Us", caption: "Among Us", category: "Puzzle", icon: "/img/icons/amongus.webp", href: "/games/among-us", searchTerms: "Among Us Amogus" },
  { id: "papas-pizzeria", title: "Papas Pizzeria", caption: "Papas Pizzeria", category: "Flash", icon: "/img/icons/papapizza.webp", href: "/games/flash-games/papas-pizzeria", searchTerms: "Papas Pizzeria Pizza" },
  { id: "papas-burgeria", title: "Papas Burgeria", caption: "Papas Burgeria", category: "Flash", icon: "/img/icons/burger.webp", href: "/games/flash-games/papas-burgeria", searchTerms: "Papas Burgeria" },
  { id: "papas-tacomia", title: "Papas Tacomia", caption: "Papas Tacomia", category: "Flash", icon: "/img/icons/taco.webp", href: "/games/flash-games/papas-tacomia", searchTerms: "Papas Tacomia" },
  { id: "papas-freezeria", title: "Papas Freezeria", caption: "Papas Freezeria", category: "Flash", icon: "/img/icons/icecream.webp", href: "/games/flash-games/papas-freezeria", searchTerms: "Papas Freezeria" },
  { id: "freeway-fury-2", title: "Freeway Fury 2", caption: "Freeway Fury 2", category: "Flash", icon: "/img/icons/freewayfury2.avif", href: "/games/flash-games/freeway-fury-2", searchTerms: "Freeway Fury 2 1 3" },
  { id: "tiny-castle", title: "Tiny Castle", caption: "Tiny Castle", category: "Flash", icon: "/img/icons/tinycastle.webp", href: "/games/flash-games/tiny-castle", searchTerms: "Tiny Castle" },
  { id: "baldis-basics", title: "Baldi's Basics", caption: "Baldi's Basics", category: "Horror", icon: "/img/icons/baldis.webp", href: "/games/baldis-basics", searchTerms: "Baldis Basics Baldi's" },
  { id: "granny", title: "Granny", caption: "Granny", category: "Horror", icon: "/img/icons/granny.webp", href: "/games/granny", searchTerms: "Granny" },
  { id: "gunball-emperor-revenge", title: "Gunball Emperor Revenge", caption: "Gunball Emperors Revenge", category: "Flash", icon: "/img/icons/gunball.webp", href: "/games/flash-games/gunball-emperor-revenge", searchTerms: "Gunball Emperors Revenger" },
  { id: "yeti-sensation", title: "Yeti Sensation", caption: "Yeti Sensation", category: "Platformer", icon: "/img/icons/yetidash.webp", href: "/games/yeti-sensation", searchTerms: "Yeti Sensation Dash" },
  { id: "angry-birds", title: "Angry Birds", caption: "Angry Birds", category: "Platformer", icon: "/img/icons/birdangry.webp", href: "/games/angry-birds", searchTerms: "Angry Birds Halloween Bird Christmas Star Wars" },
  { id: "papa-louie-2", title: "Papa Louie 2", caption: "Papa Louie 2: When Burgers Attack", category: "Flash", icon: "/img/icons/papalouie2_100x100%20(1).webp", href: "/games/flash-games/papa-louie-2", searchTerms: "Papa Louie 2: When Burgers Attack" },
  { id: "club-penguin", title: "Club Penguin", caption: "Club Penguin", category: "Multiplayer", icon: "/img/icons/clubpenguin.webp", href: "/games/club-penguin", searchTerms: "Club Penguin CP" },
  { id: "plants-vs-zombies", title: "Plants vs Zombies", caption: "Plants vs Zombies", category: "Puzzle", icon: "/img/icons/pvz.webp", href: "/games/plants-vs-zombies", searchTerms: "Plants vs Zombies pvz PVZ" },
  { id: "venge-io", title: "Venge.io", caption: "Venge.io", category: "Multiplayer", icon: "/img/icons/venge.io.webp", href: "/games/venge-io", searchTerms: "Venge.io venge .io io ." },
  { id: "roblox", title: "Roblox", caption: "Roblox", category: "Multiplayer", icon: "/img/icons/roblox.webp", href: "/games/roblox", searchTerms: "Roblox" },
  { id: "krunker-io", title: "Krunker.io", caption: "Krunker.io", category: "Multiplayer", icon: "/img/icons/krunker.io.webp", href: "/games/krunker-io", searchTerms: "Krunker.io Krunker io ." },
  { id: "pokemon-ruby", title: "Pokemon Ruby", caption: "Pokemon Ruby", category: "Emulator", icon: "/img/icons/pokemonruby.webp", href: "/games/pokemon-ruby", searchTerms: "Pokemon Ruby Pokémon" },
  { id: "geforce-now", title: "Geforce Now", caption: "Geforce Now", category: "Multiplayer", icon: "/img/icons/geforcenow.webp", href: "/games/geforce-now", searchTerms: "Geforce Now Geforcenow" },
  { id: "awesome-tanks", title: "Awesome Tanks", caption: "Awesome Tanks", category: "Puzzle", icon: "/img/icons/awesometanks1.webp", href: "/games/flash-games/awesome-tanks", searchTerms: "Awesome Tanks Tank 1" },
  { id: "awesome-tanks-2", title: "Awesome Tanks 2", caption: "Awesome Tanks 2", category: "Puzzle", icon: "/img/icons/awesome-tanks-2.webp", href: "/games/flash-games/awesome-tanks-2", searchTerms: "Awesome Tanks Tank 2" },
  { id: "only-up", title: "Only Up", caption: "Only Up", category: "Platformer", icon: "/img/icons/onlyup.webp", href: "/games/only-up", searchTerms: "Only Up Onlyup" },
  { id: "storm-the-house", title: "Storm the House", caption: "Storm the House", category: "Flash", icon: "/img/icons/stormthehouse.webp", href: "/games/flash-games/storm-the-house", searchTerms: "Storm the House 1 Army 1" },
  { id: "storm-the-house-2", title: "Storm the House 2", caption: "Storm the House 2", category: "Flash", icon: "/img/icons/storm-the-house-2.webp", href: "/games/flash-games/storm-the-house-2", searchTerms: "Storm the House 2 Army 2" },
  { id: "storm-the-house-3", title: "Storm the House 3", caption: "Storm the House 3", category: "Flash", icon: "/img/icons/storm-house-3.webp", href: "/games/flash-games/storm-the-house-3", searchTerms: "Storm the House 3 Army 3" },
  { id: "slither-io", title: "Slither.io", caption: "Slither.io", category: "2D", icon: "/img/icons/slither.io.webp", href: "/games/slither-io", searchTerms: "Slither.io Slither io ." },
  { id: "pixel-gun-3d", title: "Pixel Gun 3D", caption: "Pixel Gun 3D", category: "Multiplayer", icon: "/img/icons/pixelgun3d.webp", href: "/games/pixel-gun-3d", searchTerms: "Pixel Gun 3D" },
  { id: "hole-io", title: "Hole.io", caption: "Hole.io", category: "Multiplayer", icon: "/img/icons/hole.io.webp", href: "/games/hole-io", searchTerms: "Hole.io .io Hole ." },
  { id: "funny-shooter", title: "Funny Sh00ter", caption: "Funny Sh00ter", category: "Multiplayer", icon: "/img/icons/funntshooes.webp", href: "/games/funny-shooter", searchTerms: "Funny Sh00ter Shoo" },
  { id: "shellshock", title: "ShellShock.io", caption: "ShellShock.io", category: "Multiplayer", icon: "/img/icons/shellshock.webp", href: "/games/shellshock", searchTerms: "ShellShockers ShellShock" },
  { id: "call-of-duty", title: "Call of Duty", caption: "Call of Duty", category: "Multiplayer", icon: "/img/icons/cod.webp", href: "/games/call-of-duty", searchTerms: "Call of Duty COD" },
  { id: "fighter-aircraft-pilot", title: "Fighter Aircraft Pilot", caption: "Fighter Aircraft Pilot", category: "Fighting", icon: "/img/icons/fighter-aircraft-pilotb.avif", href: "/games/fighter-aircraft-pilot", searchTerms: "Fighter Aircraft Pilot" },
  { id: "monkey-mart", title: "Monkey Mart", caption: "Monkey Mart", category: "2D", icon: "/img/icons/monkey-mart.webp", href: "/games/monkey-mart", searchTerms: "Monkey Mart" },
  { id: "rally-point", title: "Rally Point", caption: "Rally Point", category: "Driving", icon: "/img/icons/rallypoint.webp", href: "/games/rally-point", searchTerms: "Rally point" },
  { id: "fortnite-z", title: "Fortnite Z", caption: "Fortnite Z", category: "2D", icon: "/img/icons/fortnite-z.webp", href: "/games/fortnite-z", searchTerms: "Fortnite Z Fortnite-z" },
];

export const RECOMMENDED_GAME_IDS = ["retro-bowl", "cookie-clicker", "tanuki-sunset"];

export const getRecommendedGames = (): Game[] =>
  RECOMMENDED_GAME_IDS
    .map((id) => games.find((g) => g.id === id))
    .filter((g): g is Game => g !== undefined);
