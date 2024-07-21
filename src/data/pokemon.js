 const pokemon =[
    {
      "id": 1,
      "name": "Bulbasaur",
      "genus": "Seed Pokémon",
      "description": "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/1.webp",
      "types": ["Grass", "Poison"],
      "abilities": [
        {
          "name": "Overgrow",
          "effect": "When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage.",
          "description": "Ups GRASS moves in a pinch."
        },
        {
          "name": "Chlorophyll",
          "effect": "This Pokémon's Speed is doubled during strong sunlight.  This bonus does not count as a stat modifier.",
          "description": "Raises SPEED in sunshine."
        }
      ],
      "stats": {
        "HP": 45,
        "Attack": 49,
        "Defense": 49,
        "Special Attack": 65,
        "Special Defense": 65,
        "Speed": 45
      },
      "locations": ["Cerulean City", "Pallet Town", "Lumiose City"],
      "color": "#d1e8dd"
    },
    {
      "id": 2,
      "name": "Ivysaur",
      "genus": "Seed Pokémon",
      "description": "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/2.webp",
      "types": ["Grass", "Poison"],
      "abilities": [
        {
          "name": "Overgrow",
          "effect": "When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage.",
          "description": "Ups GRASS moves in a pinch."
        },
        {
          "name": "Chlorophyll",
          "effect": "This Pokémon's Speed is doubled during strong sunlight.  This bonus does not count as a stat modifier.",
          "description": "Raises SPEED in sunshine."
        }
      ],
      "stats": {
        "HP": 60,
        "Attack": 62,
        "Defense": 63,
        "Special Attack": 80,
        "Special Defense": 80,
        "Speed": 60
      },
      "locations": [],
      "color": "#bbd4db"
    },
    {
      "id": 3,
      "name": "Venusaur",
      "genus": "Seed Pokémon",
      "description": "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/3.webp",
      "types": ["Grass", "Poison"],
      "abilities": [
        {
          "name": "Overgrow",
          "effect": "When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage.",
          "description": "Ups GRASS moves in a pinch."
        },
        {
          "name": "Chlorophyll",
          "effect": "This Pokémon's Speed is doubled during strong sunlight.  This bonus does not count as a stat modifier.",
          "description": "Raises SPEED in sunshine."
        }
      ],
      "stats": {
        "HP": 80,
        "Attack": 82,
        "Defense": 83,
        "Special Attack": 100,
        "Special Defense": 100,
        "Speed": 80
      },
      "locations": [],
      "color": "#dbd4d8"
    },
    {
      "id": 4,
      "name": "Charmander",
      "genus": "Lizard Pokémon",
      "description": "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/4.webp",
      "types": ["Fire"],
      "abilities": [
        {
          "name": "Blaze",
          "effect": "When this Pokémon has 1/3 or less of its HP remaining, its fire-type moves inflict 1.5× as much regular damage.",
          "description": "Ups FIRE moves in a pinch."
        },
        {
          "name": "Solar Power",
          "effect": "During strong sunlight, this Pokémon has 1.5× its Special Attack but takes 1/8 of its maximum HP in damage after each turn.",
          "description": "Boosts Sp. Atk, but lowers HP in sunshine."
        }
      ],
      "stats": {
        "HP": 39,
        "Attack": 52,
        "Defense": 43,
        "Special Attack": 60,
        "Special Defense": 50,
        "Speed": 65
      },
      "locations": ["Pallet Town", "Route 24", "Lumiose City"],
      "color": "#f6ddcb"
    },
    {
      "id": 5,
      "name": "Charmeleon",
      "genus": "Flame Pokémon",
      "description": "When it swings its burning tail, it elevates the temperature to unbearably high levels.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/5.webp",
      "types": ["Fire"],
      "abilities": [
        {
          "name": "Blaze",
          "effect": "When this Pokémon has 1/3 or less of its HP remaining, its fire-type moves inflict 1.5× as much regular damage.",
          "description": "Ups FIRE moves in a pinch."
        },
        {
          "name": "Solar Power",
          "effect": "During strong sunlight, this Pokémon has 1.5× its Special Attack but takes 1/8 of its maximum HP in damage after each turn.",
          "description": "Boosts Sp. Atk, but lowers HP in sunshine."
        }
      ],
      "stats": {
        "HP": 58,
        "Attack": 64,
        "Defense": 58,
        "Special Attack": 80,
        "Special Defense": 65,
        "Speed": 80
      },
      "locations": [],
      "color": "#f3cbc5"
    },
    {
      "id": 6,
      "name": "Charizard",
      "genus": "Flame Pokémon",
      "description": "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/6.webp",
      "types": ["Fire", "Flying"],
      "abilities": [
        {
          "name": "Blaze",
          "effect": "When this Pokémon has 1/3 or less of its HP remaining, its fire-type moves inflict 1.5× as much regular damage.",
          "description": "Ups FIRE moves in a pinch."
        },
        {
          "name": "Solar Power",
          "effect": "During strong sunlight, this Pokémon has 1.5× its Special Attack but takes 1/8 of its maximum HP in damage after each turn.",
          "description": "Boosts Sp. Atk, but lowers HP in sunshine."
        }
      ],
      "stats": {
        "HP": 78,
        "Attack": 84,
        "Defense": 78,
        "Special Attack": 109,
        "Special Defense": 85,
        "Speed": 100
      },
      "locations": [],
      "color": "#b8d4da"
    },
    {
      "id": 7,
      "name": "Squirtle",
      "genus": "Tiny Turtle Pokémon",
      "description": "Shoots water at prey while in the water. Withdraws into its shell when in danger.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/7.webp",
      "types": ["Water"],
      "abilities": [
        {
          "name": "Torrent",
          "effect": "When this Pokémon has 1/3 or less of its HP remaining, its water-type moves inflict 1.5× as much regular damage.",
          "description": "Ups WATER moves in a pinch."
        },
        {
          "name": "Rain Dish",
          "effect": "This Pokémon heals for 1/16 of its maximum HP after each turn during rain.",
          "description": "The Pokémon gradually recovers HP in rain."
        }
      ],
      "stats": {
        "HP": 44,
        "Attack": 48,
        "Defense": 65,
        "Special Attack": 50,
        "Special Defense": 64,
        "Speed": 43
      },
      "locations": ["Vermilion City", "Pallet Town", "Lumiose City"],
      "color": "#c1d7de"
    },
    {
      "id": 8,
      "name": "Wartortle",
      "genus": "Turtle Pokémon",
      "description": "When tapped, this POKéMON will pull in its head, but its tail will still stick out a little bit.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/8.webp",
      "types": ["Water"],
      "abilities": [
        {
          "name": "Torrent",
          "effect": "When this Pokémon has 1/3 or less of its HP remaining, its water-type moves inflict 1.5× as much regular damage.",
          "description": "Ups WATER moves in a pinch."
        },
        {
          "name": "Rain Dish",
          "effect": "This Pokémon heals for 1/16 of its maximum HP after each turn during rain.",
          "description": "The Pokémon gradually recovers HP in rain."
        }
      ],
      "stats": {
        "HP": 59,
        "Attack": 63,
        "Defense": 80,
        "Special Attack": 65,
        "Special Defense": 80,
        "Speed": 58
      },
      "locations": [],
      "color": "#dfe4f0"
    },
    {
      "id": 9,
      "name": "Blastoise",
      "genus": "Shellfish Pokémon",
      "description": "It deliberately makes itself heavy so it can withstand the recoil of the water jets it fires.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/9.webp",
      "types": ["Water"],
      "abilities": [
        {
          "name": "Torrent",
          "effect": "When this Pokémon has 1/3 or less of its HP remaining, its water-type moves inflict 1.5× as much regular damage.",
          "description": "Ups WATER moves in a pinch."
        },
        {
          "name": "Rain Dish",
          "effect": "This Pokémon heals for 1/16 of its maximum HP after each turn during rain.",
          "description": "The Pokémon gradually recovers HP in rain."
        }
      ],
      "stats": {
        "HP": 79,
        "Attack": 83,
        "Defense": 100,
        "Special Attack": 85,
        "Special Defense": 105,
        "Speed": 78
      },
      "locations": [],
      "color": "#d1dceb"
    },
    {
      "id": 10,
      "name": "Caterpie",
      "genus": "Worm Pokémon",
      "description": "It releases a stench from its red antenna to repel enemies. It grows by molting repeatedly.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/10.webp",
      "types": ["Bug"],
      "abilities": [
        {
          "name": "Shield Dust",
          "effect": "This Pokémon is immune to the extra effects of moves used against it.  An extra effect is a move's chance, listed as an \"effect chance\", to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect.  For example, thunder shock's paralysis is an extra effect, but thunder wave's is not, nor are knock off's item removal and air cutter's increased critical hit rate.",
          "description": "Prevents added effects."
        },
        {
          "name": "Run Away",
          "effect": "This Pokémon is always successful fleeing from wild battles, even if trapped by a move or ability.",
          "description": "Makes escaping easier."
        }
      ],
      "stats": {
        "HP": 45,
        "Attack": 30,
        "Defense": 35,
        "Special Attack": 20,
        "Special Defense": 20,
        "Speed": 45
      },
      "locations": [
        "Eterna Forest",
        "Route 204",
        "Route 30",
        "Route 31",
        "Ilex Forest",
        "Route 34",
        "Route 35",
        "National Park",
        "Unknown; all bugs",
        "Route 36",
        "Route 37",
        "Route 38",
        "Route 39",
        "Lake of Rage",
        "Route 26",
        "Route 27",
        "Route 2",
        "Route 24",
        "Route 25",
        "Viridian Forest",
        "Pattern Bush",
        "Santalune Forest",
        "Azalea Town"
      ],
      "color": "#d0e9c9"
    },
    {
      "id": 11,
      "name": "Metapod",
      "genus": "Cocoon Pokémon",
      "description": "This POKéMON is vulnerable to attack while its shell is soft, exposing its weak and tender body.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/11.webp",
      "types": ["Bug"],
      "abilities": [
        {
          "name": "Shed Skin",
          "effect": "After each turn, this Pokémon has a 33% of being cured of any major status ailment.",
          "description": "Heals the body by shedding."
        }
      ],
      "stats": {
        "HP": 50,
        "Attack": 20,
        "Defense": 55,
        "Special Attack": 25,
        "Special Defense": 25,
        "Speed": 30
      },
      "locations": [
        "Eterna Forest",
        "Route 30",
        "Route 31",
        "Ilex Forest",
        "Route 34",
        "Route 35",
        "National Park",
        "Route 36",
        "Route 37",
        "Route 38",
        "Route 39",
        "Lake of Rage",
        "Route 26",
        "Route 27",
        "Route 2",
        "Route 24",
        "Route 25",
        "Viridian Forest",
        "Pattern Bush",
        "Route 12",
        "Santalune Forest",
        "Azalea Town"
      ],
      "color": "#cddbb9"
    },
    {
      "id": 12,
      "name": "Butterfree",
      "genus": "Butterfly Pokémon",
      "description": "In battle, it flaps its wings at high speed to release highly toxic dust into the air.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/12.webp",
      "types": ["Bug", "Flying"],
      "abilities": [
        {
          "name": "Compound Eyes",
          "effect": "This Pokémon's moves have 1.3× their accuracy.  This ability has no effect on the one-hit KO moves (fissure, guillotine, horn drill, and sheer cold).  Overworld: If the first Pokémon in the party has this ability, the chance of a wild Pokémon holding a particular item is raised from 50%, 5%, or 1% to 60%, 20%, or 5%, respectively.",
          "description": "Raises accuracy."
        },
        {
          "name": "Tinted Lens",
          "effect": "This Pokémon deals twice as much damage with moves that are not very effective against the target.",
          "description": "Powers up “not very effective” moves."
        }
      ],
      "stats": {
        "HP": 60,
        "Attack": 45,
        "Defense": 50,
        "Special Attack": 90,
        "Special Defense": 80,
        "Speed": 70
      },
      "locations": [
        "Ilex Forest",
        "Route 34",
        "Route 35",
        "Route 36",
        "Route 37",
        "Route 38",
        "Route 39",
        "Lake of Rage",
        "Route 26",
        "Route 27",
        "Route 2",
        "Route 24",
        "Route 25",
        "Viridian Forest",
        "Route 12",
        "Azalea Town"
      ],
      "color": "#f9fafd"
    },
    {
      "id": 13,
      "name": "Weedle",
      "genus": "Hairy Bug Pokémon",
      "description": "Often found in forests, eating leaves. It has a sharp venomous stinger on its head.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/13.webp",
      "types": ["Bug", "Poison"],
      "abilities": [
        {
          "name": "Shield Dust",
          "effect": "This Pokémon is immune to the extra effects of moves used against it.  An extra effect is a move's chance, listed as an \"effect chance\", to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect.  For example, thunder shock's paralysis is an extra effect, but thunder wave's is not, nor are knock off's item removal and air cutter's increased critical hit rate.",
          "description": "Prevents added effects."
        },
        {
          "name": "Run Away",
          "effect": "This Pokémon is always successful fleeing from wild battles, even if trapped by a move or ability.",
          "description": "Makes escaping easier."
        }
      ],
      "stats": {
        "HP": 40,
        "Attack": 35,
        "Defense": 30,
        "Special Attack": 20,
        "Special Defense": 20,
        "Speed": 50
      },
      "locations": [
        "Eterna Forest",
        "Route 204",
        "Route 30",
        "Route 31",
        "Ilex Forest",
        "Route 34",
        "Route 35",
        "National Park",
        "Unknown; all bugs",
        "Route 36",
        "Route 37",
        "Route 38",
        "Route 39",
        "Lake of Rage",
        "Route 26",
        "Route 27",
        "Route 2",
        "Route 24",
        "Route 25",
        "Viridian Forest",
        "Pattern Bush",
        "Santalune Forest",
        "Azalea Town"
      ],
      "color": "#dfcfbc"
    },
    {
      "id": 14,
      "name": "Kakuna",
      "genus": "Cocoon Pokémon",
      "description": "Almost incapable of moving, this POKéMON can only harden its shell to protect itself from predators.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/14.webp",
      "types": ["Bug", "Poison"],
      "abilities": [
        {
          "name": "Shed Skin",
          "effect": "After each turn, this Pokémon has a 33% of being cured of any major status ailment.",
          "description": "Heals the body by shedding."
        }
      ],
      "stats": {
        "HP": 45,
        "Attack": 25,
        "Defense": 50,
        "Special Attack": 25,
        "Special Defense": 25,
        "Speed": 35
      },
      "locations": [
        "Eterna Forest",
        "Route 30",
        "Route 31",
        "Ilex Forest",
        "Route 34",
        "Route 35",
        "National Park",
        "Route 36",
        "Route 37",
        "Route 38",
        "Route 39",
        "Lake of Rage",
        "Route 26",
        "Route 27",
        "Route 2",
        "Route 24",
        "Route 25",
        "Viridian Forest",
        "Pattern Bush",
        "Route 12",
        "Santalune Forest",
        "Azalea Town"
      ],
      "color": "#ece3c3"
    },
    {
      "id": 15,
      "name": "Beedrill",
      "genus": "Poison Bee Pokémon",
      "description": "Flies at high speed and attacks using its large venomous stingers on its forelegs and tail.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/15.webp",
      "types": ["Bug", "Poison"],
      "abilities": [
        {
          "name": "Swarm",
          "effect": "When this Pokémon has 1/3 or less of its HP remaining, its bug-type moves inflict 1.5× as much regular damage.  Overworld: If the lead Pokémon has this ability, the wild encounter rate is increased.",
          "description": "Ups BUG moves in a pinch."
        },
        {
          "name": "Sniper",
          "effect": "This Pokémon inflicts triple damage with critical hits, rather than the usual double damage.",
          "description": "Powers up moves if they become critical hits."
        }
      ],
      "stats": {
        "HP": 65,
        "Attack": 90,
        "Defense": 40,
        "Special Attack": 45,
        "Special Defense": 80,
        "Speed": 75
      },
      "locations": [
        "Ilex Forest",
        "Route 34",
        "Route 35",
        "Route 36",
        "Route 37",
        "Route 38",
        "Route 39",
        "Lake of Rage",
        "Route 26",
        "Route 27",
        "Route 2",
        "Viridian Forest",
        "Route 12",
        "Azalea Town"
      ],
      "color": "#e6d7ba"
    },
    {
      "id": 16,
      "name": "Pidgey",
      "genus": "Tiny Bird Pokémon",
      "description": "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/16.webp",
      "types": ["Normal", "Flying"],
      "abilities": [
        {
          "name": "Keen Eye",
          "effect": "This Pokémon cannot have its accuracy lowered.  This ability does not prevent any accuracy losses other than stat modifiers, such as the accuracy cut from fog; nor does it prevent other Pokémon's evasion from making this Pokémon's moves less accurate.  This Pokémon can still be passed negative accuracy modifiers through heart swap.  Overworld: If the first Pokémon in the party has this ability, any random encounter with a Pokémon five or more levels lower than it has a 50% chance of being skipped.",
          "description": "Prevents loss of accuracy."
        },
        {
          "name": "Tangled Feet",
          "effect": "When this Pokémon is confused, it has twice its evasion.",
          "description": "Raises evasion if the Pokémon is confused."
        },
        {
          "name": "Big Pecks",
          "effect": "This Pokémon's Defense cannot be lowered by other Pokémon.  This Pokémon can still be passed negative Defense modifiers through heart swap or guard swap.",
          "description": "Protects the Pokémon from Defense-lowering attacks."
        }
      ],
      "stats": {
        "HP": 40,
        "Attack": 45,
        "Defense": 40,
        "Special Attack": 35,
        "Special Defense": 35,
        "Speed": 56
      },
      "locations": [
        "Route 229",
        "Route 29",
        "Route 30",
        "Route 31",
        "Route 32",
        "Ilex Forest",
        "Route 34",
        "Route 35",
        "National Park",
        "Route 36",
        "Route 37",
        "Route 12",
        "Route 1",
        "Route 2",
        "Route 3",
        "Route 5",
        "Route 6",
        "Route 7",
        "Route 8",
        "Route 11",
        "Route 13",
        "Route 14",
        "Route 15",
        "Sea Route 21",
        "Route 24",
        "Route 25",
        "Viridian Forest",
        "Berry Forest",
        "Bond Bridge",
        "Five Isle Meadow"
      ],
      "color": "#e5d5bf"
    },
    {
      "id": 17,
      "name": "Pidgeotto",
      "genus": "Bird Pokémon",
      "description": "Very protective of its sprawling territorial area, this POKéMON will fiercely peck at any intruder.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/17.webp",
      "types": ["Normal", "Flying"],
      "abilities": [
        {
          "name": "Keen Eye",
          "effect": "This Pokémon cannot have its accuracy lowered.  This ability does not prevent any accuracy losses other than stat modifiers, such as the accuracy cut from fog; nor does it prevent other Pokémon's evasion from making this Pokémon's moves less accurate.  This Pokémon can still be passed negative accuracy modifiers through heart swap.  Overworld: If the first Pokémon in the party has this ability, any random encounter with a Pokémon five or more levels lower than it has a 50% chance of being skipped.",
          "description": "Prevents loss of accuracy."
        },
        {
          "name": "Tangled Feet",
          "effect": "When this Pokémon is confused, it has twice its evasion.",
          "description": "Raises evasion if the Pokémon is confused."
        },
        {
          "name": "Big Pecks",
          "effect": "This Pokémon's Defense cannot be lowered by other Pokémon.  This Pokémon can still be passed negative Defense modifiers through heart swap or guard swap.",
          "description": "Protects the Pokémon from Defense-lowering attacks."
        }
      ],
      "stats": {
        "HP": 63,
        "Attack": 60,
        "Defense": 55,
        "Special Attack": 50,
        "Special Defense": 50,
        "Speed": 71
      },
      "locations": [
        "Route 37",
        "Route 38",
        "Route 39",
        "Route 43",
        "Route 12",
        "Route 2",
        "Route 5",
        "Route 6",
        "Route 7",
        "Route 8",
        "Route 11",
        "Route 13",
        "Route 14",
        "Route 15",
        "Sea Route 21",
        "Route 24",
        "Route 25",
        "Viridian Forest",
        "Berry Forest",
        "Bond Bridge",
        "Five Isle Meadow"
      ],
      "color": "#e7d8dc"
    },
    {
      "id": 18,
      "name": "Pidgeot",
      "genus": "Bird Pokémon",
      "description": "When hunting, it skims the surface of water at high speed to pick off unwary prey such as MAGIKARP.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/18.webp",
      "types": ["Normal", "Flying"],
      "abilities": [
        {
          "name": "Keen Eye",
          "effect": "This Pokémon cannot have its accuracy lowered.  This ability does not prevent any accuracy losses other than stat modifiers, such as the accuracy cut from fog; nor does it prevent other Pokémon's evasion from making this Pokémon's moves less accurate.  This Pokémon can still be passed negative accuracy modifiers through heart swap.  Overworld: If the first Pokémon in the party has this ability, any random encounter with a Pokémon five or more levels lower than it has a 50% chance of being skipped.",
          "description": "Prevents loss of accuracy."
        },
        {
          "name": "Tangled Feet",
          "effect": "When this Pokémon is confused, it has twice its evasion.",
          "description": "Raises evasion if the Pokémon is confused."
        },
        {
          "name": "Big Pecks",
          "effect": "This Pokémon's Defense cannot be lowered by other Pokémon.  This Pokémon can still be passed negative Defense modifiers through heart swap or guard swap.",
          "description": "Protects the Pokémon from Defense-lowering attacks."
        }
      ],
      "stats": {
        "HP": 83,
        "Attack": 80,
        "Defense": 75,
        "Special Attack": 70,
        "Special Defense": 70,
        "Speed": 101
      },
      "locations": [],
      "color": "#f8f3e2"
    },
    {
      "id": 19,
      "name": "Rattata",
      "genus": "Mouse Pokémon",
      "description": "Bites anything when it attacks. Small and very quick, it is a common sight in many places.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/19.webp",
      "types": ["Normal"],
      "abilities": [
        {
          "name": "Run Away",
          "effect": "This Pokémon is always successful fleeing from wild battles, even if trapped by a move or ability.",
          "description": "Makes escaping easier."
        },
        {
          "name": "Guts",
          "effect": "Whenever this Pokémon is asleep, burned, paralyzed, or poisoned, it has 1.5× its Attack.  This Pokémon is not affected by the usual Attack cut from a burn.  This bonus does not count as a stat modifier.",
          "description": "Ups ATTACK if suffering."
        },
        {
          "name": "Hustle",
          "effect": "This Pokémon's physical moves do 1.5× as much regular damage, but have 0.8× their usual accuracy.  Special moves are unaffected.  Moves that do set damage, such as seismic toss, have their accuracy affected, but not their damage.  Overworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
          "description": "Trades accuracy for power."
        }
      ],
      "stats": {
        "HP": 30,
        "Attack": 56,
        "Defense": 35,
        "Special Attack": 25,
        "Special Defense": 35,
        "Speed": 72
      },
      "locations": [
        "Route 225",
        "Sea Route 226",
        "Route 29",
        "Route 30",
        "Route 31",
        "Sprout Tower",
        "Route 32",
        "Union Cave",
        "Route 33",
        "Route 34",
        "Burned Tower",
        "Bell Tower",
        "Route 38",
        "Route 39",
        "Route 42",
        "Mt. Mortar",
        "Route 46",
        "Unknown; all Rattata",
        "Route 1",
        "Route 2",
        "Route 3",
        "Route 4",
        "Route 5",
        "Route 6",
        "Route 7",
        "Route 8",
        "Route 9",
        "Route 10",
        "Route 11",
        "Route 16",
        "Route 17",
        "Route 18",
        "Sea Route 21",
        "Route 22",
        "Tohjo Falls",
        "Pokémon Mansion",
        "Castelia City",
        "Castelia Sewers",
        "Relic Passage"
      ],
      "color": "#d8ccdd"
    },
    {
      "id": 20,
      "name": "Raticate",
      "genus": "Mouse Pokémon",
      "description": "It uses its whiskers to maintain its balance. It apparently slows down if they are cut off.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/20.webp",
      "types": ["Normal"],
      "abilities": [
        {
          "name": "Run Away",
          "effect": "This Pokémon is always successful fleeing from wild battles, even if trapped by a move or ability.",
          "description": "Makes escaping easier."
        },
        {
          "name": "Guts",
          "effect": "Whenever this Pokémon is asleep, burned, paralyzed, or poisoned, it has 1.5× its Attack.  This Pokémon is not affected by the usual Attack cut from a burn.  This bonus does not count as a stat modifier.",
          "description": "Ups ATTACK if suffering."
        },
        {
          "name": "Hustle",
          "effect": "This Pokémon's physical moves do 1.5× as much regular damage, but have 0.8× their usual accuracy.  Special moves are unaffected.  Moves that do set damage, such as seismic toss, have their accuracy affected, but not their damage.  Overworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
          "description": "Trades accuracy for power."
        }
      ],
      "stats": {
        "HP": 55,
        "Attack": 81,
        "Defense": 60,
        "Special Attack": 50,
        "Special Defense": 70,
        "Speed": 97
      },
      "locations": [
        "Route 225",
        "Sea Route 226",
        "Union Cave",
        "Burned Tower",
        "Route 38",
        "Route 39",
        "Route 42",
        "Mt. Mortar",
        "Route 43",
        "Route 47",
        "Route 26",
        "Route 27",
        "Route 1",
        "Route 3",
        "Route 4",
        "Route 6",
        "Route 7",
        "Route 9",
        "Route 10",
        "Route 11",
        "Route 16",
        "Route 17",
        "Route 18",
        "Sea Route 21",
        "Tohjo Falls",
        "Pokémon Mansion",
        "Dreamyard",
        "Strange House",
        "Relic Passage"
      ],
      "color": "#d3c2b0"
    },
    {
      "id": 21,
      "name": "Spearow",
      "genus": "Tiny Bird Pokémon",
      "description": "Eats bugs in grassy areas. It has to flap its short wings at high speed to stay airborne.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/21.webp",
      "types": ["Normal", "Flying"],
      "abilities": [
        {
          "name": "Keen Eye",
          "effect": "This Pokémon cannot have its accuracy lowered.  This ability does not prevent any accuracy losses other than stat modifiers, such as the accuracy cut from fog; nor does it prevent other Pokémon's evasion from making this Pokémon's moves less accurate.  This Pokémon can still be passed negative accuracy modifiers through heart swap.  Overworld: If the first Pokémon in the party has this ability, any random encounter with a Pokémon five or more levels lower than it has a 50% chance of being skipped.",
          "description": "Prevents loss of accuracy."
        },
        {
          "name": "Sniper",
          "effect": "This Pokémon inflicts triple damage with critical hits, rather than the usual double damage.",
          "description": "Powers up moves if they become critical hits."
        }
      ],
      "stats": {
        "HP": 40,
        "Attack": 60,
        "Defense": 30,
        "Special Attack": 31,
        "Special Defense": 31,
        "Speed": 70
      },
      "locations": [
        "Route 225",
        "Sea Route 226",
        "Route 29",
        "Route 30",
        "Route 31",
        "Route 32",
        "Route 33",
        "Route 42",
        "Route 43",
        "Route 44",
        "Route 45",
        "Route 46",
        "Route 47",
        "Route 3",
        "Route 4",
        "Route 7",
        "Route 9",
        "Route 10",
        "Route 11",
        "Route 16",
        "Route 17",
        "Route 18",
        "Route 22",
        "Route 23",
        "Mt. Ember",
        "Kindle Road",
        "Treasure Beach",
        "Cape Brink",
        "Water Path",
        "Ruin Valley",
        "Canyon Entrance",
        "Goldenrod City",
        "Azalea Town"
      ],
      "color": "#edc5c3"
    },
    {
      "id": 22,
      "name": "Fearow",
      "genus": "Beak Pokémon",
      "description": "With its huge and magnificent wings, it can keep aloft without ever having to land for rest.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/22.webp",
      "types": ["Normal", "Flying"],
      "abilities": [
        {
          "name": "Keen Eye",
          "effect": "This Pokémon cannot have its accuracy lowered.  This ability does not prevent any accuracy losses other than stat modifiers, such as the accuracy cut from fog; nor does it prevent other Pokémon's evasion from making this Pokémon's moves less accurate.  This Pokémon can still be passed negative accuracy modifiers through heart swap.  Overworld: If the first Pokémon in the party has this ability, any random encounter with a Pokémon five or more levels lower than it has a 50% chance of being skipped.",
          "description": "Prevents loss of accuracy."
        },
        {
          "name": "Sniper",
          "effect": "This Pokémon inflicts triple damage with critical hits, rather than the usual double damage.",
          "description": "Powers up moves if they become critical hits."
        }
      ],
      "stats": {
        "HP": 65,
        "Attack": 90,
        "Defense": 65,
        "Special Attack": 61,
        "Special Defense": 61,
        "Speed": 100
      },
      "locations": [
        "Stark Mountain",
        "Route 225",
        "Route 227",
        "Sea Route 226",
        "Route 42",
        "Route 47",
        "Route 48",
        "Route 9",
        "Route 10",
        "Route 16",
        "Route 17",
        "Route 18",
        "Route 22",
        "Route 23",
        "Mt. Ember",
        "Kindle Road",
        "Treasure Beach",
        "Cape Brink",
        "Water Path",
        "Ruin Valley",
        "Canyon Entrance",
        "Sevault Canyon",
        "Route 15"
      ],
      "color": "#dcc8b8"
    },
    {
      "id": 23,
      "name": "Ekans",
      "genus": "Snake Pokémon",
      "description": "Moves silently and stealthily. Eats the eggs of birds, such as PIDGEY and SPEAROW, whole.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/23.webp",
      "types": ["Poison"],
      "abilities": [
        {
          "name": "Intimidate",
          "effect": "When this Pokémon enters battle, the opponent's Attack is lowered by one stage.  In a double battle, both opponents are affected.  This ability also takes effect when acquired during a battle, but will not take effect again if lost and reobtained without leaving battle.  This ability has no effect on an opponent that has a substitute.  Overworld: If the first Pokémon in the party has this ability, any random encounter with a Pokémon five or more levels lower than it has a 50% chance of being skipped.",
          "description": "Lowers the foe's ATTACK."
        },
        {
          "name": "Shed Skin",
          "effect": "After each turn, this Pokémon has a 33% of being cured of any major status ailment.",
          "description": "Heals the body by shedding."
        },
        {
          "name": "Unnerve",
          "effect": "Opposing Pokémon cannot eat held Berries while this Pokémon is in battle.  Affected Pokémon can still use bug bite or pluck to eat a target's Berry.",
          "description": "Makes the foe nervous and unable to eat Berries."
        }
      ],
      "stats": {
        "HP": 35,
        "Attack": 60,
        "Defense": 44,
        "Special Attack": 40,
        "Special Defense": 54,
        "Speed": 55
      },
      "locations": [
        "Route 212",
        "Route 32",
        "Route 33",
        "Route 42",
        "Route 26",
        "Route 27",
        "Route 3",
        "Route 4",
        "Route 8",
        "Route 9",
        "Route 10",
        "Route 11",
        "Route 23",
        "Azalea Town"
      ],
      "color": "#cfbfcb"
    },
    {
      "id": 24,
      "name": "Arbok",
      "genus": "Cobra Pokémon",
      "description": "It is rumored that the ferocious warning markings on its belly differ from area to area.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/24.webp",
      "types": ["Poison"],
      "abilities": [
        {
          "name": "Intimidate",
          "effect": "When this Pokémon enters battle, the opponent's Attack is lowered by one stage.  In a double battle, both opponents are affected.  This ability also takes effect when acquired during a battle, but will not take effect again if lost and reobtained without leaving battle.  This ability has no effect on an opponent that has a substitute.  Overworld: If the first Pokémon in the party has this ability, any random encounter with a Pokémon five or more levels lower than it has a 50% chance of being skipped.",
          "description": "Lowers the foe's ATTACK."
        },
        {
          "name": "Shed Skin",
          "effect": "After each turn, this Pokémon has a 33% of being cured of any major status ailment.",
          "description": "Heals the body by shedding."
        },
        {
          "name": "Unnerve",
          "effect": "Opposing Pokémon cannot eat held Berries while this Pokémon is in battle.  Affected Pokémon can still use bug bite or pluck to eat a target's Berry.",
          "description": "Makes the foe nervous and unable to eat Berries."
        }
      ],
      "stats": {
        "HP": 60,
        "Attack": 95,
        "Defense": 69,
        "Special Attack": 65,
        "Special Defense": 79,
        "Speed": 80
      },
      "locations": [
        "Great Marsh",
        "Route 42",
        "Mt. Silver",
        "Route 26",
        "Route 27",
        "Route 28",
        "Route 3",
        "Route 4",
        "Cerulean Cave",
        "Route 23",
        "Victory Road"
      ],
      "color": "#c7c3c7"
    },
    {
      "id": 25,
      "name": "Pikachu",
      "genus": "Mouse Pokémon",
      "description": "When several of these POKéMON gather, their electricity could build and cause lightning storms.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/25.webp",
      "types": ["Electric"],
      "abilities": [
        {
          "name": "Static",
          "effect": "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being paralyzed.  Pokémon that are immune to electric-type moves can still be paralyzed by this ability.  Overworld: If the lead Pokémon has this ability, there is a 50% chance that encounters will be with an electric Pokémon, if applicable.",
          "description": "Paralyzes on contact."
        },
        {
          "name": "Lightning Rod",
          "effect": "All other Pokémon's single-target electric-type moves are redirected to this Pokémon if it is an eligible target.  Other Pokémon's Electric moves raise this Pokémon's Special Attack one stage, negating any other effect on it, and cannot miss it.  If the move's intended target also has this ability, the move is not redirected.  When multiple Pokémon with this ability are possible targets for redirection, the move is redirected to the one with the highest Speed stat, or, in the case of a tie, to a random tied Pokémon.  follow me takes precedence over this ability.  If the Pokémon is a ground-type and thus immune to Electric moves, its immunity prevents the Special Attack boost.",
          "description": "Draws electrical moves."
        }
      ],
      "stats": {
        "HP": 35,
        "Attack": 55,
        "Defense": 40,
        "Special Attack": 50,
        "Special Defense": 50,
        "Speed": 90
      },
      "locations": [
        "Trophy Garden",
        "Pallet Town",
        "Route 2",
        "Viridian Forest",
        "Power Plant",
        "Safari Zone",
        "Route 3",
        "Santalune Forest",
        "Slateport City",
        "Verdanturf Town",
        "Fallarbor Town",
        "Lilycove City"
      ],
      "color": "#faefca"
    },
    {
      "id": 26,
      "name": "Raichu",
      "genus": "Mouse Pokémon",
      "description": "Its tail discharges electricity into the ground, protecting it from getting shocked.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/26.webp",
      "types": ["Electric"],
      "abilities": [
        {
          "name": "Static",
          "effect": "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being paralyzed.  Pokémon that are immune to electric-type moves can still be paralyzed by this ability.  Overworld: If the lead Pokémon has this ability, there is a 50% chance that encounters will be with an electric Pokémon, if applicable.",
          "description": "Paralyzes on contact."
        },
        {
          "name": "Lightning Rod",
          "effect": "All other Pokémon's single-target electric-type moves are redirected to this Pokémon if it is an eligible target.  Other Pokémon's Electric moves raise this Pokémon's Special Attack one stage, negating any other effect on it, and cannot miss it.  If the move's intended target also has this ability, the move is not redirected.  When multiple Pokémon with this ability are possible targets for redirection, the move is redirected to the one with the highest Speed stat, or, in the case of a tie, to a random tied Pokémon.  follow me takes precedence over this ability.  If the Pokémon is a ground-type and thus immune to Electric moves, its immunity prevents the Special Attack boost.",
          "description": "Draws electrical moves."
        }
      ],
      "stats": {
        "HP": 60,
        "Attack": 90,
        "Defense": 55,
        "Special Attack": 90,
        "Special Defense": 80,
        "Speed": 110
      },
      "locations": ["Cerulean Cave", "Power Plant"],
      "color": "#f8e3be"
    },
    {
      "id": 27,
      "name": "Sandshrew",
      "genus": "Mouse Pokémon",
      "description": "Burrows deep underground in arid locations far from water. It only emerges to hunt for food.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/27.webp",
      "types": ["Ground"],
      "abilities": [
        {
          "name": "Sand Veil",
          "effect": "During a sandstorm, this Pokémon has 1.25× its evasion, and it does not take sandstorm damage regardless of type.  The evasion bonus does not count as a stat modifier.  Overworld: If the lead Pokémon has this ability, the wild encounter rate is halved in a sandstorm.",
          "description": "Ups evasion in a sandstorm."
        },
        {
          "name": "Sand Rush",
          "effect": "This Pokémon's Speed is doubled during a sandstorm, and it does not take sandstorm damage, regardless of type.",
          "description": "Boosts the Pokémon's Speed in a sandstorm."
        }
      ],
      "stats": {
        "HP": 50,
        "Attack": 75,
        "Defense": 85,
        "Special Attack": 20,
        "Special Defense": 30,
        "Speed": 40
      },
      "locations": [
        "Wayward Cave",
        "Union Cave",
        "Mt. Moon",
        "Route 3",
        "Route 4",
        "Route 8",
        "Route 9",
        "Route 10",
        "Route 11",
        "Route 23",
        "Route 111",
        "Route 113",
        "Mirage Tower",
        "Desert Resort",
        "Relic Castle"
      ],
      "color": "#f5e9c9"
    },
    {
      "id": 28,
      "name": "Sandslash",
      "genus": "Mouse Pokémon",
      "description": "Curls up into a spiny ball when threatened. It can roll while curled up to attack or escape.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/28.webp",
      "types": ["Ground"],
      "abilities": [
        {
          "name": "Sand Veil",
          "effect": "During a sandstorm, this Pokémon has 1.25× its evasion, and it does not take sandstorm damage regardless of type.  The evasion bonus does not count as a stat modifier.  Overworld: If the lead Pokémon has this ability, the wild encounter rate is halved in a sandstorm.",
          "description": "Ups evasion in a sandstorm."
        },
        {
          "name": "Sand Rush",
          "effect": "This Pokémon's Speed is doubled during a sandstorm, and it does not take sandstorm damage, regardless of type.",
          "description": "Boosts the Pokémon's Speed in a sandstorm."
        }
      ],
      "stats": {
        "HP": 75,
        "Attack": 100,
        "Defense": 110,
        "Special Attack": 45,
        "Special Defense": 55,
        "Speed": 65
      },
      "locations": [
        "Route 228",
        "Route 26",
        "Route 27",
        "Mt. Moon",
        "Victory Road",
        "Cerulean Cave",
        "Route 23",
        "Relic Castle",
        "Route 15",
        "Route 18",
        "Terminus Cave"
      ],
      "color": "#f3e5c4"
    },
    {
      "id": 29,
      "name": "Nidoran♀",
      "genus": "Poison Pin Pokémon",
      "description": "Although small, its venomous barbs render this POKéMON dangerous. The female has smaller horns.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/29.webp",
      "types": ["Poison"],
      "abilities": [
        {
          "name": "Poison Point",
          "effect": "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being poisoned.",
          "description": "Poisons foe on contact."
        },
        {
          "name": "Rivalry",
          "effect": "This Pokémon inflicts 1.25× as much regular damage against Pokémon of the same gender and 0.75× as much regular damage against Pokémon of the opposite gender.  If either Pokémon is genderless, damage is unaffected.",
          "description": "Raises Attack if the foe is of the same gender."
        },
        {
          "name": "Hustle",
          "effect": "This Pokémon's physical moves do 1.5× as much regular damage, but have 0.8× their usual accuracy.  Special moves are unaffected.  Moves that do set damage, such as seismic toss, have their accuracy affected, but not their damage.  Overworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
          "description": "Trades accuracy for power."
        }
      ],
      "stats": {
        "HP": 55,
        "Attack": 47,
        "Defense": 52,
        "Special Attack": 40,
        "Special Defense": 40,
        "Speed": 41
      },
      "locations": [
        "Route 201",
        "Route 35",
        "National Park",
        "Route 36",
        "Route 2",
        "Route 3",
        "Route 9",
        "Route 10",
        "Route 22",
        "Safari Zone"
      ],
      "color": "#e4e9f5"
    },
    {
      "id": 30,
      "name": "Nidorina",
      "genus": "Poison Pin Pokémon",
      "description": "The female's horn develops slowly. Prefers physical attacks such as clawing and biting.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/30.webp",
      "types": ["Poison"],
      "abilities": [
        {
          "name": "Poison Point",
          "effect": "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being poisoned.",
          "description": "Poisons foe on contact."
        },
        {
          "name": "Rivalry",
          "effect": "This Pokémon inflicts 1.25× as much regular damage against Pokémon of the same gender and 0.75× as much regular damage against Pokémon of the opposite gender.  If either Pokémon is genderless, damage is unaffected.",
          "description": "Raises Attack if the foe is of the same gender."
        },
        {
          "name": "Hustle",
          "effect": "This Pokémon's physical moves do 1.5× as much regular damage, but have 0.8× their usual accuracy.  Special moves are unaffected.  Moves that do set damage, such as seismic toss, have their accuracy affected, but not their damage.  Overworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
          "description": "Trades accuracy for power."
        }
      ],
      "stats": {
        "HP": 70,
        "Attack": 62,
        "Defense": 67,
        "Special Attack": 55,
        "Special Defense": 55,
        "Speed": 56
      },
      "locations": [
        "Valor Lakefront",
        "Route 221",
        "Route 9",
        "Route 13",
        "Route 14",
        "Route 15",
        "Route 23",
        "Safari Zone",
        "Route 11"
      ],
      "color": "#e6eff1"
    },
    {
      "id": 31,
      "name": "Nidoqueen",
      "genus": "Drill Pokémon",
      "description": "Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/31.webp",
      "types": ["Poison", "Ground"],
      "abilities": [
        {
          "name": "Poison Point",
          "effect": "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being poisoned.",
          "description": "Poisons foe on contact."
        },
        {
          "name": "Rivalry",
          "effect": "This Pokémon inflicts 1.25× as much regular damage against Pokémon of the same gender and 0.75× as much regular damage against Pokémon of the opposite gender.  If either Pokémon is genderless, damage is unaffected.",
          "description": "Raises Attack if the foe is of the same gender."
        },
        {
          "name": "Sheer Force",
          "effect": "This Pokémon's moves with extra effects have 1.3× their power, but lose their extra effects.  An effect chance is a move's chance to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect. For example, thunder shock's paralysis is an extra effect, but thunder wave's is not, nor are knock off's item removal and air cutter's increased critical hit rate.  Moves that lower the user's stats are unaffected.",
          "description": "Removes added effects to increase move damage."
        }
      ],
      "stats": {
        "HP": 90,
        "Attack": 92,
        "Defense": 87,
        "Special Attack": 75,
        "Special Defense": 85,
        "Speed": 76
      },
      "locations": [],
      "color": "#c1d0de"
    },
    {
      "id": 32,
      "name": "Nidoran♂",
      "genus": "Poison Pin Pokémon",
      "description": "Stiffens its ears to sense danger. The larger its horns, the more powerful its secreted venom.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/32.webp",
      "types": ["Poison"],
      "abilities": [
        {
          "name": "Poison Point",
          "effect": "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being poisoned.",
          "description": "Poisons foe on contact."
        },
        {
          "name": "Rivalry",
          "effect": "This Pokémon inflicts 1.25× as much regular damage against Pokémon of the same gender and 0.75× as much regular damage against Pokémon of the opposite gender.  If either Pokémon is genderless, damage is unaffected.",
          "description": "Raises Attack if the foe is of the same gender."
        },
        {
          "name": "Hustle",
          "effect": "This Pokémon's physical moves do 1.5× as much regular damage, but have 0.8× their usual accuracy.  Special moves are unaffected.  Moves that do set damage, such as seismic toss, have their accuracy affected, but not their damage.  Overworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
          "description": "Trades accuracy for power."
        }
      ],
      "stats": {
        "HP": 46,
        "Attack": 57,
        "Defense": 40,
        "Special Attack": 40,
        "Special Defense": 40,
        "Speed": 50
      },
      "locations": [
        "Route 201",
        "Route 35",
        "National Park",
        "Route 36",
        "Route 2",
        "Route 3",
        "Route 9",
        "Route 10",
        "Route 22",
        "Safari Zone"
      ],
      "color": "#d7c6d7"
    },
    {
      "id": 33,
      "name": "Nidorino",
      "genus": "Poison Pin Pokémon",
      "description": "An aggressive POKéMON that is quick to attack. The horn on its head secretes a powerful venom.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/33.webp",
      "types": ["Poison"],
      "abilities": [
        {
          "name": "Poison Point",
          "effect": "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being poisoned.",
          "description": "Poisons foe on contact."
        },
        {
          "name": "Rivalry",
          "effect": "This Pokémon inflicts 1.25× as much regular damage against Pokémon of the same gender and 0.75× as much regular damage against Pokémon of the opposite gender.  If either Pokémon is genderless, damage is unaffected.",
          "description": "Raises Attack if the foe is of the same gender."
        },
        {
          "name": "Hustle",
          "effect": "This Pokémon's physical moves do 1.5× as much regular damage, but have 0.8× their usual accuracy.  Special moves are unaffected.  Moves that do set damage, such as seismic toss, have their accuracy affected, but not their damage.  Overworld: If the lead Pokémon has this ability, higher-levelled Pokémon have their encounter rate increased.",
          "description": "Trades accuracy for power."
        }
      ],
      "stats": {
        "HP": 61,
        "Attack": 72,
        "Defense": 57,
        "Special Attack": 55,
        "Special Defense": 55,
        "Speed": 65
      },
      "locations": [
        "Valor Lakefront",
        "Route 221",
        "Route 9",
        "Route 13",
        "Route 14",
        "Route 15",
        "Route 23",
        "Safari Zone",
        "Route 11"
      ],
      "color": "#e6d9e8"
    },
    {
      "id": 34,
      "name": "Nidoking",
      "genus": "Drill Pokémon",
      "description": "One swing of its mighty tail can snap a telephone pole as if it were a matchstick.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/34.webp",
      "types": ["Poison", "Ground"],
      "abilities": [
        {
          "name": "Poison Point",
          "effect": "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being poisoned.",
          "description": "Poisons foe on contact."
        },
        {
          "name": "Rivalry",
          "effect": "This Pokémon inflicts 1.25× as much regular damage against Pokémon of the same gender and 0.75× as much regular damage against Pokémon of the opposite gender.  If either Pokémon is genderless, damage is unaffected.",
          "description": "Raises Attack if the foe is of the same gender."
        },
        {
          "name": "Sheer Force",
          "effect": "This Pokémon's moves with extra effects have 1.3× their power, but lose their extra effects.  An effect chance is a move's chance to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect. For example, thunder shock's paralysis is an extra effect, but thunder wave's is not, nor are knock off's item removal and air cutter's increased critical hit rate.  Moves that lower the user's stats are unaffected.",
          "description": "Removes added effects to increase move damage."
        }
      ],
      "stats": {
        "HP": 81,
        "Attack": 102,
        "Defense": 77,
        "Special Attack": 85,
        "Special Defense": 75,
        "Speed": 85
      },
      "locations": [],
      "color": "#decbde"
    },
    {
      "id": 35,
      "name": "Clefairy",
      "genus": "Fairy Pokémon",
      "description": "Its magical and cute appeal has many admirers. It is rare and found only in certain areas.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/35.webp",
      "types": ["Fairy"],
      "abilities": [
        {
          "name": "Cute Charm",
          "effect": "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being infatuated.  Overworld: If the first Pokémon in the party has this ability, any wild Pokémon whose species can be either gender has a 2/3 chance of being set to the opposite gender, and a 1/3 chance of having a random gender as usual.",
          "description": "Infatuates on contact."
        },
        {
          "name": "Magic Guard",
          "effect": "This Pokémon is immune to damage not directly caused by a move.  For example, this Pokémon takes no damage from from weather, recoil, status ailments, or spikes, but it still suffers from the Attack cut when burned, and a life orb will still power up this Pokémon's moves without damaging it.  Anything that directly depends on such damage will also not happen; for example, leech seed will neither hurt this Pokémon nor heal the opponent, and Pokémon with a jaboca berry or rowap berry will not consume the berry when hit by this Pokémon.  The following are unaffected: struggle, pain split (whether used by or against this Pokémon), belly drum, substitute, curse, moves that knock the user out, and damage from confusion.  This Pokémon will neither lose nor regain HP if it drains HP from a Pokémon with liquid ooze.  If this Pokémon is badly poisoned, the poison counter is still increased each turn; if the Pokémon loses this ability, it will begin taking as much damage as it would be if it had been taking increasing damage each turn.",
          "description": "The Pokémon only takes damage from attacks."
        },
        {
          "name": "Friend Guard",
          "effect": "All friendly Pokémon take 0.75× as much direct damage from moves while this Pokémon is in battle.  This effect stacks if multiple allied Pokémon have it.",
          "description": "Reduces damage done to allies."
        }
      ],
      "stats": {
        "HP": 70,
        "Attack": 45,
        "Defense": 48,
        "Special Attack": 60,
        "Special Defense": 65,
        "Speed": 35
      },
      "locations": [
        "Mt. Coronet",
        "Mt. Moon",
        "Route 3",
        "Route 4",
        "Giant Chasm"
      ],
      "color": "#fcebed"
    },
    {
      "id": 36,
      "name": "Clefable",
      "genus": "Fairy Pokémon",
      "description": "A timid fairy POKéMON that is rarely seen. It will run and hide the moment it senses people.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/36.webp",
      "types": ["Fairy"],
      "abilities": [
        {
          "name": "Cute Charm",
          "effect": "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being infatuated.  Overworld: If the first Pokémon in the party has this ability, any wild Pokémon whose species can be either gender has a 2/3 chance of being set to the opposite gender, and a 1/3 chance of having a random gender as usual.",
          "description": "Infatuates on contact."
        },
        {
          "name": "Magic Guard",
          "effect": "This Pokémon is immune to damage not directly caused by a move.  For example, this Pokémon takes no damage from from weather, recoil, status ailments, or spikes, but it still suffers from the Attack cut when burned, and a life orb will still power up this Pokémon's moves without damaging it.  Anything that directly depends on such damage will also not happen; for example, leech seed will neither hurt this Pokémon nor heal the opponent, and Pokémon with a jaboca berry or rowap berry will not consume the berry when hit by this Pokémon.  The following are unaffected: struggle, pain split (whether used by or against this Pokémon), belly drum, substitute, curse, moves that knock the user out, and damage from confusion.  This Pokémon will neither lose nor regain HP if it drains HP from a Pokémon with liquid ooze.  If this Pokémon is badly poisoned, the poison counter is still increased each turn; if the Pokémon loses this ability, it will begin taking as much damage as it would be if it had been taking increasing damage each turn.",
          "description": "The Pokémon only takes damage from attacks."
        },
        {
          "name": "Unaware",
          "effect": "This Pokémon ignores other Pokémon's stat modifiers for the purposes of damage and accuracy calculation.  Effectively, this affects modifiers of every stat except Speed.  The power of punishment and stored power is calculated as usual.  When this Pokémon hurts itself in confusion, its stat modifiers affect damage as usual.",
          "description": "Ignores any change in ability by the foe."
        }
      ],
      "stats": {
        "HP": 95,
        "Attack": 70,
        "Defense": 73,
        "Special Attack": 95,
        "Special Defense": 90,
        "Speed": 60
      },
      "locations": ["Giant Chasm"],
      "color": "#faefec"
    },
    {
      "id": 37,
      "name": "Vulpix",
      "genus": "Fox Pokémon",
      "description": "At the time of birth, it has just one tail. The tail splits from its tip as it grows older.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/37.webp",
      "types": ["Fire"],
      "abilities": [
        {
          "name": "Flash Fire",
          "effect": "This Pokémon is immune to fire-type moves.  Once this Pokémon has been hit by a Fire move, its own Fire moves will inflict 1.5× as much damage until it leaves battle.  This ability has no effect while the Pokémon is frozen.  The Fire damage bonus is retained even if the Pokémon is frozen and thawed or the ability is lost or disabled.  Fire moves will ignore this Pokémon's substitute.  This ability takes effect even on non-damaging moves, i.e. will o wisp.",
          "description": "Powers up if hit by fire."
        },
        {
          "name": "Drought",
          "effect": "The weather changes to strong sunlight when this Pokémon enters battle and does not end unless cancelled by another weather condition.  If multiple Pokémon with this ability, drizzle, sand stream, or snow warning are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pokémon will stay.",
          "description": "Summons sunlight in battle."
        }
      ],
      "stats": {
        "HP": 38,
        "Attack": 41,
        "Defense": 40,
        "Special Attack": 50,
        "Special Defense": 65,
        "Speed": 65
      },
      "locations": [
        "Route 209",
        "Route 214",
        "Route 36",
        "Route 37",
        "Route 48",
        "Route 7",
        "Route 8",
        "Pokémon Mansion",
        "Mt. Pyre",
        "Abundant Shrine"
      ],
      "color": "#e6cfc5"
    },
    {
      "id": 38,
      "name": "Ninetales",
      "genus": "Fox Pokémon",
      "description": "Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/38.webp",
      "types": ["Fire"],
      "abilities": [
        {
          "name": "Flash Fire",
          "effect": "This Pokémon is immune to fire-type moves.  Once this Pokémon has been hit by a Fire move, its own Fire moves will inflict 1.5× as much damage until it leaves battle.  This ability has no effect while the Pokémon is frozen.  The Fire damage bonus is retained even if the Pokémon is frozen and thawed or the ability is lost or disabled.  Fire moves will ignore this Pokémon's substitute.  This ability takes effect even on non-damaging moves, i.e. will o wisp.",
          "description": "Powers up if hit by fire."
        },
        {
          "name": "Drought",
          "effect": "The weather changes to strong sunlight when this Pokémon enters battle and does not end unless cancelled by another weather condition.  If multiple Pokémon with this ability, drizzle, sand stream, or snow warning are sent out at the same time, the abilities will activate in order of Speed, respecting trick room.  Each ability's weather will cancel the previous weather, and only the weather summoned by the slowest of the Pokémon will stay.",
          "description": "Summons sunlight in battle."
        }
      ],
      "stats": {
        "HP": 73,
        "Attack": 76,
        "Defense": 75,
        "Special Attack": 81,
        "Special Defense": 100,
        "Speed": 100
      },
      "locations": ["Abundant Shrine"],
      "color": "#f9f4d9"
    },
    {
      "id": 39,
      "name": "Jigglypuff",
      "genus": "Balloon Pokémon",
      "description": "When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/39.webp",
      "types": ["Normal", "Fairy"],
      "abilities": [
        {
          "name": "Cute Charm",
          "effect": "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being infatuated.  Overworld: If the first Pokémon in the party has this ability, any wild Pokémon whose species can be either gender has a 2/3 chance of being set to the opposite gender, and a 1/3 chance of having a random gender as usual.",
          "description": "Infatuates on contact."
        },
        {
          "name": "Competitive",
          "effect": "Raises Special Attack by two stages upon having any stat lowered.",
          "description": "Boosts the Sp. Atk stat when a stat is lowered."
        },
        {
          "name": "Friend Guard",
          "effect": "All friendly Pokémon take 0.75× as much direct damage from moves while this Pokémon is in battle.  This effect stacks if multiple allied Pokémon have it.",
          "description": "Reduces damage done to allies."
        }
      ],
      "stats": {
        "HP": 115,
        "Attack": 45,
        "Defense": 20,
        "Special Attack": 45,
        "Special Defense": 25,
        "Speed": 20
      },
      "locations": [
        "Route 34",
        "Route 35",
        "Route 46",
        "Route 3",
        "Route 4",
        "Route 5",
        "Route 6",
        "Route 7",
        "Route 8",
        "Route 115",
        "Dreamyard",
        "Route 1",
        "Route 2",
        "Route 14",
        "Route 20",
        "Pokémon Village"
      ],
      "color": "#f9ebee"
    },
    {
      "id": 40,
      "name": "Wigglytuff",
      "genus": "Balloon Pokémon",
      "description": "The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/40.webp",
      "types": ["Normal", "Fairy"],
      "abilities": [
        {
          "name": "Cute Charm",
          "effect": "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being infatuated.  Overworld: If the first Pokémon in the party has this ability, any wild Pokémon whose species can be either gender has a 2/3 chance of being set to the opposite gender, and a 1/3 chance of having a random gender as usual.",
          "description": "Infatuates on contact."
        },
        {
          "name": "Competitive",
          "effect": "Raises Special Attack by two stages upon having any stat lowered.",
          "description": "Boosts the Sp. Atk stat when a stat is lowered."
        },
        {
          "name": "Frisk",
          "effect": "When this Pokémon enters battle, it reveals an opposing Pokémon's held item to all participating trainers.  In a double battle, if one opponent has an item, this Pokémon will Frisk that Pokémon; if both have an item, it will Frisk one at random.",
          "description": "The Pokémon can check the foe's held item."
        }
      ],
      "stats": {
        "HP": 140,
        "Attack": 70,
        "Defense": 45,
        "Special Attack": 85,
        "Special Defense": 50,
        "Speed": 45
      },
      "locations": [
        "Cerulean Cave",
        "Dreamyard",
        "Route 1",
        "Route 2",
        "Route 14"
      ],
      "color": "#faf7fa"
    },
    {
      "id": 41,
      "name": "Zubat",
      "genus": "Bat Pokémon",
      "description": "Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/41.webp",
      "types": ["Poison", "Flying"],
      "abilities": [
        {
          "name": "Inner Focus",
          "effect": "This Pokémon cannot flinch.",
          "description": "Prevents flinching."
        },
        {
          "name": "Infiltrator",
          "effect": "This Pokémon's moves ignore light screen, reflect, and safeguard.",
          "description": "Passes through the foe's barrier and strikes."
        }
      ],
      "stats": {
        "HP": 40,
        "Attack": 45,
        "Defense": 35,
        "Special Attack": 30,
        "Special Defense": 40,
        "Speed": 55
      },
      "locations": [
        "Oreburgh Mine",
        "Mt. Coronet",
        "Ravaged Path",
        "Oreburgh Gate",
        "Wayward Cave",
        "Iron Island",
        "Acuity Lakefront",
        "Route 203",
        "Route 204",
        "Route 206",
        "Route 207",
        "Route 208",
        "Route 209",
        "Lost Tower",
        "Route 211",
        "Route 214",
        "Route 216",
        "Route 217",
        "Route 30",
        "Route 31",
        "Route 32",
        "Union Cave",
        "Route 33",
        "Slowpoke Well",
        "Ilex Forest",
        "Burned Tower",
        "Whirl Islands",
        "Route 42",
        "Mt. Mortar",
        "Ice Path",
        "Dark Cave",
        "Seafoam Islands",
        "Route 47",
        "Mt. Moon",
        "Rock Tunnel",
        "Route 3",
        "Route 4",
        "Route 9",
        "Route 10",
        "Tohjo Falls",
        "Victory Road",
        "Meteor Falls",
        "Granite Cave",
        "Seafloor Cavern",
        "Cave of Origin",
        "Shoal Cave",
        "Altering Cave",
        "Icefall Cave",
        "Lost Cave",
        "Castelia Sewers",
        "Connecting Cave"
      ],
      "color": "#dac5db"
    },
    {
      "id": 42,
      "name": "Golbat",
      "genus": "Bat Pokémon",
      "description": "Once it strikes, it will not stop draining energy from the victim even if it gets too heavy to fly.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/42.webp",
      "types": ["Poison", "Flying"],
      "abilities": [
        {
          "name": "Inner Focus",
          "effect": "This Pokémon cannot flinch.",
          "description": "Prevents flinching."
        },
        {
          "name": "Infiltrator",
          "effect": "This Pokémon's moves ignore light screen, reflect, and safeguard.",
          "description": "Passes through the foe's barrier and strikes."
        }
      ],
      "stats": {
        "HP": 75,
        "Attack": 80,
        "Defense": 70,
        "Special Attack": 65,
        "Special Defense": 75,
        "Speed": 90
      },
      "locations": [
        "Mt. Coronet",
        "Victory Road",
        "Ravaged Path",
        "Oreburgh Gate",
        "Stark Mountain",
        "Sendoff Spring",
        "Turnback Cave",
        "Snowpoint Temple",
        "Iron Island",
        "Lost Tower",
        "Route 227",
        "Union Cave",
        "Slowpoke Well",
        "Whirl Islands",
        "Route 42",
        "Mt. Mortar",
        "Ice Path",
        "Dark Cave",
        "Seafoam Islands",
        "Mt. Silver",
        "Route 47",
        "Route 28",
        "Rock Tunnel",
        "Tohjo Falls",
        "Cerulean Cave",
        "Meteor Falls",
        "Seafloor Cavern",
        "Cave of Origin",
        "Shoal Cave",
        "Sky Pillar",
        "Icefall Cave",
        "Lost Cave",
        "Dreamyard",
        "Giant Chasm",
        "Celestial Tower",
        "Route 13",
        "Strange House"
      ],
      "color": "#a6a7a7"
    },
    {
      "id": 43,
      "name": "Oddish",
      "genus": "Weed Pokémon",
      "description": "During the day, it keeps its face buried in the ground. At night, it wanders around sowing its seeds.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/43.webp",
      "types": ["Grass", "Poison"],
      "abilities": [
        {
          "name": "Chlorophyll",
          "effect": "This Pokémon's Speed is doubled during strong sunlight.  This bonus does not count as a stat modifier.",
          "description": "Raises SPEED in sunshine."
        },
        {
          "name": "Run Away",
          "effect": "This Pokémon is always successful fleeing from wild battles, even if trapped by a move or ability.",
          "description": "Makes escaping easier."
        }
      ],
      "stats": {
        "HP": 45,
        "Attack": 50,
        "Defense": 55,
        "Special Attack": 75,
        "Special Defense": 65,
        "Speed": 30
      },
      "locations": [
        "Route 224",
        "Route 229",
        "Sea Route 230",
        "Ilex Forest",
        "Route 12",
        "Route 5",
        "Route 6",
        "Route 7",
        "Route 13",
        "Route 14",
        "Route 15",
        "Route 24",
        "Route 25",
        "Route 110",
        "Route 117",
        "Route 119",
        "Route 120",
        "Route 121",
        "Route 123",
        "Safari Zone",
        "Berry Forest",
        "Cape Brink",
        "Bond Bridge",
        "Water Path"
      ],
      "color": "#b9dbb5"
    },
    {
      "id": 44,
      "name": "Gloom",
      "genus": "Weed Pokémon",
      "description": "It secretes a sticky, drool-like honey. Although sweet, it smells too repulsive to get very close.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/44.webp",
      "types": ["Grass", "Poison"],
      "abilities": [
        {
          "name": "Chlorophyll",
          "effect": "This Pokémon's Speed is doubled during strong sunlight.  This bonus does not count as a stat modifier.",
          "description": "Raises SPEED in sunshine."
        },
        {
          "name": "Stench",
          "effect": "This Pokémon's damaging moves have a 10% chance to make the target flinch with each hit if they do not already cause flinching as a secondary effect.  This ability does not stack with a held item.  Overworld: The wild encounter rate is halved while this Pokémon is first in the party.",
          "description": "Helps repel wild POKéMON."
        }
      ],
      "stats": {
        "HP": 60,
        "Attack": 65,
        "Defense": 70,
        "Special Attack": 85,
        "Special Defense": 75,
        "Speed": 40
      },
      "locations": [
        "Route 224",
        "Route 229",
        "Sea Route 230",
        "Route 47",
        "Route 12",
        "Route 48",
        "Route 5",
        "Route 13",
        "Route 14",
        "Route 15",
        "Route 24",
        "Cerulean Cave",
        "Route 121",
        "Route 123",
        "Safari Zone",
        "Berry Forest",
        "Cape Brink",
        "Bond Bridge",
        "Water Path"
      ],
      "color": "#e3c1b5"
    },
    {
      "id": 45,
      "name": "Vileplume",
      "genus": "Flower Pokémon",
      "description": "It has the world's largest petals. With every step, the petals shake out heavy clouds of toxic pollen.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/45.webp",
      "types": ["Grass", "Poison"],
      "abilities": [
        {
          "name": "Chlorophyll",
          "effect": "This Pokémon's Speed is doubled during strong sunlight.  This bonus does not count as a stat modifier.",
          "description": "Raises SPEED in sunshine."
        },
        {
          "name": "Effect Spore",
          "effect": "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being paralyzed, poisoned, or put to sleep, chosen at random.  Nothing is done to compensate if the move's user is immune to one of these ailments; there is simply a lower chance that the move's user will be affected.",
          "description": "Leaves spores on contact."
        }
      ],
      "stats": {
        "HP": 75,
        "Attack": 80,
        "Defense": 85,
        "Special Attack": 110,
        "Special Defense": 90,
        "Speed": 50
      },
      "locations": [],
      "color": "#f1d6db"
    },
    {
      "id": 46,
      "name": "Paras",
      "genus": "Mushroom Pokémon",
      "description": "Burrows to suck tree roots. The mushrooms on its back grow by drawing nutrients from the bug host.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/46.webp",
      "types": ["Bug", "Grass"],
      "abilities": [
        {
          "name": "Effect Spore",
          "effect": "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being paralyzed, poisoned, or put to sleep, chosen at random.  Nothing is done to compensate if the move's user is immune to one of these ailments; there is simply a lower chance that the move's user will be affected.",
          "description": "Leaves spores on contact."
        },
        {
          "name": "Dry Skin",
          "effect": "This Pokémon takes 1/8 of its maximum HP in damage after each turn during strong sunlight, but it heals for 1/8 of its HP each turn during rain.  This Pokémon takes 1.25× as much damage from fire-type moves, but whenever a water move hits it, it heals for 1/4 its maximum HP instead.",
          "description": "Reduces HP if it is hot. Water restores HP."
        },
        {
          "name": "Damp",
          "effect": "While this Pokémon is in battle, self destruct and explosion will fail and aftermath will not take effect.",
          "description": "Prevents self-destruction."
        }
      ],
      "stats": {
        "HP": 35,
        "Attack": 70,
        "Defense": 55,
        "Special Attack": 45,
        "Special Defense": 55,
        "Speed": 25
      },
      "locations": ["Ilex Forest", "Mt. Moon", "Safari Zone"],
      "color": "#f6d7be"
    },
    {
      "id": 47,
      "name": "Parasect",
      "genus": "Mushroom Pokémon",
      "description": "A host-parasite pair in which the parasite mushroom has taken over the host bug. Prefers damp places.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/47.webp",
      "types": ["Bug", "Grass"],
      "abilities": [
        {
          "name": "Effect Spore",
          "effect": "Whenever a move makes contact with this Pokémon, the move's user has a 30% chance of being paralyzed, poisoned, or put to sleep, chosen at random.  Nothing is done to compensate if the move's user is immune to one of these ailments; there is simply a lower chance that the move's user will be affected.",
          "description": "Leaves spores on contact."
        },
        {
          "name": "Dry Skin",
          "effect": "This Pokémon takes 1/8 of its maximum HP in damage after each turn during strong sunlight, but it heals for 1/8 of its HP each turn during rain.  This Pokémon takes 1.25× as much damage from fire-type moves, but whenever a water move hits it, it heals for 1/4 its maximum HP instead.",
          "description": "Reduces HP if it is hot. Water restores HP."
        },
        {
          "name": "Damp",
          "effect": "While this Pokémon is in battle, self destruct and explosion will fail and aftermath will not take effect.",
          "description": "Prevents self-destruction."
        }
      ],
      "stats": {
        "HP": 60,
        "Attack": 95,
        "Defense": 80,
        "Special Attack": 60,
        "Special Defense": 80,
        "Speed": 30
      },
      "locations": ["Mt. Silver", "Cerulean Cave", "Safari Zone"],
      "color": "#dabfcb"
    },
    {
      "id": 48,
      "name": "Venonat",
      "genus": "Insect Pokémon",
      "description": "Lives in the shadows of tall trees where it eats insects. It is attracted by light at night.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/48.webp",
      "types": ["Bug", "Poison"],
      "abilities": [
        {
          "name": "Compound Eyes",
          "effect": "This Pokémon's moves have 1.3× their accuracy.  This ability has no effect on the one-hit KO moves (fissure, guillotine, horn drill, and sheer cold).  Overworld: If the first Pokémon in the party has this ability, the chance of a wild Pokémon holding a particular item is raised from 50%, 5%, or 1% to 60%, 20%, or 5%, respectively.",
          "description": "Raises accuracy."
        },
        {
          "name": "Tinted Lens",
          "effect": "This Pokémon deals twice as much damage with moves that are not very effective against the target.",
          "description": "Powers up “not very effective” moves."
        },
        {
          "name": "Run Away",
          "effect": "This Pokémon is always successful fleeing from wild battles, even if trapped by a move or ability.",
          "description": "Makes escaping easier."
        }
      ],
      "stats": {
        "HP": 60,
        "Attack": 55,
        "Defense": 50,
        "Special Attack": 40,
        "Special Defense": 55,
        "Speed": 45
      },
      "locations": [
        "Route 229",
        "Ilex Forest",
        "National Park",
        "Route 43",
        "Lake of Rage",
        "Route 12",
        "Route 9",
        "Route 10",
        "Route 13",
        "Route 14",
        "Route 15",
        "Route 24",
        "Route 25",
        "Safari Zone",
        "Berry Forest",
        "Bond Bridge"
      ],
      "color": "#c8c6df"
    },
    {
      "id": 49,
      "name": "Venomoth",
      "genus": "Poison Moth Pokémon",
      "description": "The dust-like scales covering its wings are color coded to indicate the kinds of poison it has.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/49.webp",
      "types": ["Bug", "Poison"],
      "abilities": [
        {
          "name": "Shield Dust",
          "effect": "This Pokémon is immune to the extra effects of moves used against it.  An extra effect is a move's chance, listed as an \"effect chance\", to inflict a status ailment, cause a stat change, or make the target flinch in addition to the move's main effect.  For example, thunder shock's paralysis is an extra effect, but thunder wave's is not, nor are knock off's item removal and air cutter's increased critical hit rate.",
          "description": "Prevents added effects."
        },
        {
          "name": "Tinted Lens",
          "effect": "This Pokémon deals twice as much damage with moves that are not very effective against the target.",
          "description": "Powers up “not very effective” moves."
        },
        {
          "name": "Wonder Skin",
          "effect": "Non-damaging moves have exactly 50% base accuracy against this Pokémon.",
          "description": "Makes status-changing moves more likely to miss."
        }
      ],
      "stats": {
        "HP": 70,
        "Attack": 65,
        "Defense": 60,
        "Special Attack": 90,
        "Special Defense": 75,
        "Speed": 90
      },
      "locations": [
        "Route 229",
        "Route 43",
        "Route 9",
        "Route 10",
        "Route 13",
        "Route 14",
        "Route 15",
        "Route 24",
        "Route 25",
        "Cerulean Cave",
        "Victory Road",
        "Safari Zone",
        "Berry Forest",
        "Dreamyard"
      ],
      "color": "#f4eff7"
    },
    {
      "id": 50,
      "name": "Diglett",
      "genus": "Mole Pokémon",
      "description": "Lives about one yard underground where it feeds on plant roots. It sometimes appears above ground.",
      "imageUrl": "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/50.webp",
      "types": ["Ground"],
      "abilities": [
        {
          "name": "Sand Veil",
          "effect": "During a sandstorm, this Pokémon has 1.25× its evasion, and it does not take sandstorm damage regardless of type.  The evasion bonus does not count as a stat modifier.  Overworld: If the lead Pokémon has this ability, the wild encounter rate is halved in a sandstorm.",
          "description": "Ups evasion in a sandstorm."
        },
        {
          "name": "Arena Trap",
          "effect": "While this Pokémon is in battle, opposing Pokémon cannot flee or switch out.  flying-type Pokémon and Pokémon in the air, e.g. due to levitate or magnet rise, are unaffected.  Pokémon with run away can still flee.  Pokémon can still switch out with the use of a move or item.  Overworld: If the lead Pokémon has this ability, the wild encounter rate is doubled.",
          "description": "Prevents fleeing."
        },
        {
          "name": "Sand Force",
          "effect": "During a sandstorm, this Pokémon's rock-, ground-, and steel-type moves have 1.3× their base power.  This Pokémon does not take sandstorm damage, regardless of type.",
          "description": "Boosts certain moves' power in a sandstorm."
        }
      ],
      "stats": {
        "HP": 10,
        "Attack": 55,
        "Defense": 25,
        "Special Attack": 35,
        "Special Defense": 45,
        "Speed": 95
      },
      "locations": ["Route 228", "Vermilion City", "Route 48", "Diglett's Cave"],
      "color": "#ddd1c9"
    }
]
export default pokemon;