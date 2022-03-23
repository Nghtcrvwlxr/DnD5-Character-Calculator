import {dataError, dataLoaded, dataRequested} from "../store/slices/service-slice";
import {attributesRequested, attributesLoaded, attributesError} from "../store/slices/attributes-slice";
import {proficienciesError, proficienciesLoaded, proficienciesRequested} from "../store/slices/proficiencies-slice";

import {Race, Class, Background, Attribute, Skill, Tool, Language} from "../utils/types";
import {AppDispatch} from "../store/store";

export default class TestService {
    _races: Race[] = [
        {
            "index": "dragonborn",
            "name": "Dragonborn",
            "bonusStats": {str: 2, chr: 1},
            "proficiencies": {
                "skills": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "tools": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "languages": {
                    "preselected": ["common", "draconic"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        },
        {
            "index": "dwarf",
            "name": "Dwarf",
            "bonusStats": {con: 2},
            "proficiencies": {
                "skills": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "tools": {
                    "preselected": ["craftsmen's-tools"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "languages": {
                    "preselected": ["common", "dwarvish"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        },
        {
            "index": "elf",
            "name": "Elf",
            "bonusStats": {dex: 2},
            "proficiencies": {
                "skills": {
                    "preselected": ["perception"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "tools": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "languages": {
                    "preselected": ["common", "elvish"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        },
        {
            "index": "gnome",
            "name": "Gnome",
            "bonusStats": {int: 2},
            "proficiencies": {
                "skills": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "tools": {
                    "preselected": ["craftsmen's-tools"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "languages": {
                    "preselected": ["common", "gnomish"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        },
        {
            "index": "half-elf",
            "name": "Half-Elf",
            "bonusStats": {chr: 2, unset: 2},
            "proficiencies": {
                "skills": {
                    "preselected": [],
                    "available": {
                        count: 2,
                        items: ["all"],
                    },
                },
                "tools": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "languages": {
                    "preselected": ["common", "elvish"],
                    "available": {
                        count: 1,
                        items: ["all"],
                    },
                },
            },
        },
        {
            "index": "half-orc",
            "name": "Half-Orc",
            "bonusStats": {str: 2, con: 1},
            "proficiencies": {
                "skills": {
                    "preselected": ["intimidation"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "tools": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "languages": {
                    "preselected": ["common", "orc"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        },
        {
            "index": "halfling",
            "name": "Halfling",
            "bonusStats": {dex: 2},
            "proficiencies": {
                "skills": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "tools": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "languages": {
                    "preselected": ["common", "halfling"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        },
        {
            "index": "human",
            "name": "Human",
            "bonusStats": {str: 1, dex: 1, con: 1, int: 1, wis: 1, chr: 1},
            "proficiencies": {
                "skills": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    }
                },
                "tools": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    }
                },
                "languages": {
                    "preselected": ["common"],
                    "available": {
                        count: 1,
                        items: ["all"],
                    },
                },
            },
        },
        {
            "index": "tiefling",
            "name": "Tiefling",
            "bonusStats": {chr: 2, int: 1},
            "proficiencies": {
                "skills": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "tools": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "languages": {
                    "preselected": ["common", "infernal"],
                    "available": {
                        count: 1,
                        items: ["all"],
                    },
                },
            },
        }
    ];

    _classes: Class[] = [
        {
            "index": "barbarian",
            "name": "Barbarian",
            "proficiencies": {
                "skills": {
                    "preselected": [],
                    "available": {
                        count: 2,
                        items: ["athletics", "perception", "survival", "intimidation", "nature", "animal-handling"],
                    },
                },
                "tools": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "languages": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        },
        {
            "index": "bard",
            "name": "Bard",
            "proficiencies": {
                "skills": {
                    "preselected": [],
                    "available": {
                        count: 3,
                        items: ["all"],
                    },
                },
                "tools": {
                    "preselected": [],
                    "available": {
                        count: 3,
                        items: ["musical-instruments"],
                    },
                },
                "languages": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        },
        {
            "index": "cleric",
            "name": "Cleric",
            "proficiencies": {
                "skills": {
                    "preselected": [],
                    "available": {
                        count: 2,
                        items: ["history", "medicine", "insight", "investigation", "religion"],
                    },
                },
                "tools": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "languages": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        },
        {
            "index": "druid",
            "name": "Druid",
            "proficiencies": {
                "skills": {
                    "preselected": [],
                    "available": {
                        count: 2,
                        items: ["perception", "survival", "arcana", "medicine", "animal-handling", "nature", "insight", "religion"],
                    },
                },
                "tools": {
                    "preselected": ["herbalist's-set"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "languages": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        },
        {
            "index": "fighter",
            "name": "Fighter",
            "proficiencies": {
                "skills": {
                    "preselected": [],
                    "available": {
                        count: 2,
                        items: ["acrobatics", "athletics", "perception", "survival", "intimidation", "history", "insight", "animal-handling"],
                    },
                },
                "tools": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "languages": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        },
        {
            "index": "monk",
            "name": "Monk",
            "proficiencies": {
                "skills": {
                    "preselected": [],
                    "available": {
                        count: 2,
                        items: ["acrobatics", "athletics", "history", "insight", "religion", "stealth"],
                    },
                },
                "tools": {
                    "preselected": [],
                    "available": {
                        count: 1,
                        items: ["craftsmen's-tools", "musical-instruments"],
                    },
                },
                "languages": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        },
        {
            "index": "paladin",
            "name": "Paladin",
            "proficiencies": {
                "skills": {
                    "preselected": [],
                    "available": {
                        count: 2,
                        items: ["athletics", "intimidation", "medicine", "insight", "religion", "persuasion"],
                    },
                },
                "tools": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "languages": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        },
        {
            "index": "ranger",
            "name": "Ranger",
            "proficiencies": {
                "skills": {
                    "preselected": [],
                    "available": {
                        count: 3,
                        items: ["athletics", "perception", "survival", "nature", "insight", "investigation", "stealth", "animal-handling"],
                    },
                },
                "tools": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "languages": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        },
        {
            "index": "rogue",
            "name": "Rogue",
            "proficiencies": {
                "skills": {
                    "preselected": [],
                    "available": {
                        count: 4,
                        items: ["acrobatics", "athletics", "perception", "performance", "intimidation", "sleight-of-hand", "deception", "insight", "investigation", "stealth", "persuasion"],
                    },
                },
                "tools": {
                    "preselected": ["thieves'-tools"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "languages": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        },
        {
            "index": "sorcerer",
            "name": "Sorcerer",
            "proficiencies": {
                "skills": {
                    "preselected": [],
                    "available": {
                        count: 2,
                        items: ["intimidation", "arcana", "deception", "insight", "religion", "persuasion"],
                    },
                },
                "tools": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "languages": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        },
        {
            "index": "warlock",
            "name": "Warlock",
            "proficiencies": {
                "skills": {
                    "preselected": [],
                    "available": {
                        count: 2,
                        items: ["intimidation", "history", "arcana", "deception", "nature", "investigation", "religion"],
                    },
                },
                "tools": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "languages": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        },
        {
            "index": "wizard",
            "name": "Wizard",
            "proficiencies": {
                "skills": {
                    "preselected": [],
                    "available": {
                        count: 2,
                        items: ["history", "arcana", "medicine", "insight", "investigation", "religion"],
                    },
                },
                "tools": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "languages": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        }
    ];

    _backgrounds: Background[] = [
        {
            "index": "charlatan",
            "name": "Charlatan",
            "proficiencies": {
                "skills": {
                    "preselected": ["sleight-of-hand", "deception"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "tools": {
                    "preselected": ["makeup-kit", "falsification-kit"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "languages": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        },
        {
            "index": "criminal",
            "name": "Criminal",
            "proficiencies": {
                "skills": {
                    "preselected": ["deception", "stealth"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "tools": {
                    "preselected": ["thieves'-tools"],
                    "available": {
                        count: 1,
                        items: ["game-sets"],
                    },
                },
                "languages": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        },
        {
            "index": "entertainer",
            "name": "Entertainer",
            "proficiencies": {
                "skills": {
                    "preselected": ["acrobatics", "performance"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "tools": {
                    "preselected": ["makeup-kit"],
                    "available": {
                        count: 1,
                        items: ["musical-instruments"],
                    },
                },
                "languages": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        },
        {
            "index": "folk hero",
            "name": "Folk hero",
            "proficiencies": {
                "skills": {
                    "preselected": ["survival", "animal-handling"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "tools": {
                    "preselected": [],
                    "available": {
                        count: 1,
                        items: ["craftsmen's-tools", "herbalist's-set", "falsification-kit"],
                    },
                },
                "languages": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        },
        {
            "index": "guild artisan",
            "name": "Guild artisan",
            "proficiencies": {
                "skills": {
                    "preselected": ["insight", "persuasion"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "tools": {
                    "preselected": [],
                    "available": {
                        count: 1,
                        items: ["craftsmen's-tools", "herbalist's-set", "falsification-kit"],
                    },
                },
                "languages": {
                    "preselected": [],
                    "available": {
                        count: 1,
                        items: ["all"],
                    },
                },
            },
        },
        {
            "index": "hermit",
            "name": "Hermit",
            "proficiencies": {
                "skills": {
                    "preselected": ["medicine", "religion"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "tools": {
                    "preselected": ["herbalist's-set"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "languages": {
                    "preselected": [],
                    "available": {
                        count: 1,
                        items: ["all"],
                    },
                },
            },
        },
        {
            "index": "outlander",
            "name": "Outlander",
            "proficiencies": {
                "skills": {
                    "preselected": ["athletics", "survival"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "tools": {
                    "preselected": [],
                    "available": {
                        count: 1,
                        items: ["musical-instruments"],
                    },
                },
                "languages": {
                    "preselected": [],
                    "available": {
                        count: 1,
                        items: ["all"],
                    },
                },
            },
        },
        {
            "index": "noble",
            "name": "Noble",
            "proficiencies": {
                "skills": {
                    "preselected": ["history", "persuasion"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "tools": {
                    "preselected": [],
                    "available": {
                        count: 1,
                        items: ["game-sets"],
                    },
                },
                "languages": {
                    "preselected": [],
                    "available": {
                        count: 1,
                        items: ["all"],
                    },
                },
            },
        },
        {
            "index": "sage",
            "name": "Sage",
            "proficiencies": {
                "skills": {
                    "preselected": ["history", "arcana"],
                    "available": {
                        count: 2,
                        items: ["all"],
                    },
                },
                "tools": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "languages": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        },
        {
            "index": "sailor",
            "name": "Sailor",
            "proficiencies": {
                "skills": {
                    "preselected": ["athletics", "perception"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "tools": {
                    "preselected": ["navigator's-tools"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "languages": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        },
        {
            "index": "soldier",
            "name": "Soldier",
            "proficiencies": {
                "skills": {
                    "preselected": ["athletics", "intimidation"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "tools": {
                    "preselected": [],
                    "available": {
                        count: 1,
                        items: ["game-sets"],
                    },
                },
                "languages": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        },
        {
            "index": "urchin",
            "name": "Urchin",
            "proficiencies": {
                "skills": {
                    "preselected": ["sleight-of-hand", "stealth"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "tools": {
                    "preselected": ["thieves'-tools", "makeup-kit"],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
                "languages": {
                    "preselected": [],
                    "available": {
                        count: 0,
                        items: [],
                    },
                },
            },
        }
    ];

    _attributes: Attribute[] = [
        {
            "index": "str",
            "name": "Strength",
            "value": 8,
            "modifier": -1
        },
        {
            "index": 'dex',
            "name": 'Dexterity',
            "value": 8,
            "modifier": -1
        },
        {
            "index": 'con',
            "name": 'Constitution',
            "value": 8,
            "modifier": -1
        },
        {
            "index": 'int',
            "name": 'Intelligence',
            "value": 8,
            "modifier": -1
        },
        {
            "index": 'wis',
            "name": 'Wisdom',
            "value": 8,
            "modifier": -1
        },
        {
            "index": 'chr',
            "name": 'Charisma',
            "value": 8,
            "modifier": -1
        }
    ];

    _skills: Skill[] = [
        {
            "index": "acrobatics",
            "name": "Acrobatics",
        },
        {
            "index": "animal-handling",
            "name": "Animal Handling",
        },
        {
            "index": "arcana",
            "name": "Arcana",
        },
        {
            "index": "athletics",
            "name": "Athletics",
        },
        {
            "index": "deception",
            "name": "Deception",
        },
        {
            "index": "history",
            "name": "History",
        },
        {
            "index": "insight",
            "name": "Insight",
        },
        {
            "index": "intimidation",
            "name": "Intimidation",
        },
        {
            "index": "investigation",
            "name": "Investigation",
        },
        {
            "index": "medicine",
            "name": "Medicine",
        },
        {
            "index": "nature",
            "name": "Nature",
        },
        {
            "index": "perception",
            "name": "Perception",
        },
        {
            "index": "performance",
            "name": "Performance",
        },
        {
            "index": "persuasion",
            "name": "Persuasion",
        },
        {
            "index": "religion",
            "name": "Religion",
        },
        {
            "index": "sleight-of-hand",
            "name": "Sleight of Hand",
        },
        {
            "index": "stealth",
            "name": "Stealth",
        },
        {
            "index": "survival",
            "name": "Survival",
        },
    ];

    _tools: Tool[] = [
        {
            "index": "thieves'-tools",
            "name": "Thieves' tools",
        },
        {
            "index": "game-sets",
            "name": "Game sets",
            "items": [
                {"index": "dragon-Chess", "name": "Dragon Chess"},
                {"index": "playing-cards", "name": "Playing cards"},
                {"index": "dice", "name": "Dice"},
                {"index": "three-dragon-bet", "name": "Three dragon bet"},
            ],
        },
        {
            "index": "navigator's-tools",
            "name": "Navigator's tools",
        },
        {
            "index": "poisoner's-Tools",
            "name": "Poisoner's Tools",
        },
        {
            "index": "craftsmen's-tools",
            "name": "Craftsmen's tools",
            "items": [
                {"index": "alchemist's-tools", "name": "Alchemist's tools"},
                {"index": "potter's-tools", "name": "Potter's tools"},
                {"index": "tinsmith's-tools", "name": "Tinsmith's tools"},
                {"index": "calligraphy-tools", "name": "Calligraphy tools"},
                {"index": "bricklayer's-tools", "name": "Bricklayer's tools"},
                {"index": "cartographer's-tools", "name": "Cartographer's tools"},
                {"index": "leatherworker's-tools", "name": "Leatherworker's tools"},
                {"index": "carpenter's-tools", "name": "Carpenter's tools"},
                {"index": "chef's-tools", "name": "Chef's tools"},
                {"index": "woodcarver's", "name": "Woodcarver's tools"},
                {"index": "shoemaker's-tools", "name": "Shoemaker's tools"},
                {"index": "glassblower's-tools", "name": "Glassblower's tools"},
                {"index": "weaver's-tools", "name": "Weaver's tools"},
                {"index": "painter's-tools", "name": "Painter's tools"},
                {"index": "jeweler's-tools", "name": "Jeweler's tools"},
            ],
        },
        {
            "index": "musical-instruments",
            "name": "Musical instruments",
            "items": [
                {"index": "drum", "name": "Drum"},
                {"index": "viol", "name": "Viol"},
                {"index": "bagpipe", "name": "Bagpipe"},
                {"index": "lyre", "name": "Lyre"},
                {"index": "lute", "name": "Lute"},
                {"index": "horn", "name": "Horn"},
                {"index": "reed", "name": "Reed"},
                {"index": "flute", "name": "Flute"},
                {"index": "cymbals", "name": "Cymbals"},
                {"index": "shalmey", "name": "Shalmey"},
            ]
        },
        {
            "index": "makeup-kit",
            "name": "Makeup kit",
        },
        {
            "index": "falsification-kit",
            "name": "Falsification kit",
        },
        {
            "index": "herbalist's-set",
            "name": "Herbalist's set",
        },
    ];

    _languages: Language[] = [
        {
            "index": "abyssal",
            "name": "Abyssal",
        },
        {
            "index": "celestial",
            "name": "Celestial",
        },
        {
            "index": "common",
            "name": "Common",
        },
        {
            "index": "deep-speech",
            "name": "Deep Speech",
        },
        {
            "index": "draconic",
            "name": "Draconic",
        },
        {
            "index": "dwarvish",
            "name": "Dwarvish",
        },
        {
            "index": "elvish",
            "name": "Elvish",
        },
        {
            "index": "giant",
            "name": "Giant",
        },
        {
            "index": "gnomish",
            "name": "Gnomish",
        },
        {
            "index": "goblin",
            "name": "Goblin",
        },
        {
            "index": "halfling",
            "name": "Halfling",
        },
        {
            "index": "infernal",
            "name": "Infernal",
        },
        {
            "index": "orc",
            "name": "Orc",
        },
        {
            "index": "primordial",
            "name": "Primordial",
        },
        {
            "index": "sylvan",
            "name": "Sylvan",
        },
        {
            "index": "undercommon",
            "name": "Undercommon",
        },
    ];

    getRaces(): Promise<Race[]>  {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.99) {
                    reject(new Error('Something bad happened'));
                } else {
                    resolve(this._races)
                }
            }, 1000);
        });
    };
    getClasses(): Promise<Class[]>  {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.99) {
                    reject(new Error('Something bad happened'));
                } else {
                    resolve(this._classes)
                }
            }, 1000);
        });
    };
    getBackgrounds(): Promise<Background[]>  {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.99) {
                    reject(new Error('Something bad happened'));
                } else {
                    resolve(this._backgrounds)
                }
            }, 1000);
        });
    };
    getAttributes(): Promise<Attribute[]>  {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.99) {
                    reject(new Error('Something bad happened'));
                } else {
                    resolve(this._attributes)
                }
            }, 1000);
        });
    };
    getSkills(): Promise<Skill[]>  {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.99) {
                    reject(new Error('Something bad happened'));
                } else {
                    resolve(this._skills)
                }
            }, (Math.random() / 3 * 10000));
        });
    };
    getTools(): Promise<Tool[]>  {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.99) {
                    reject(new Error('Something bad happened'));
                } else {
                    resolve(this._tools)
                }
            }, (Math.random() / 3 * 10000));
        });
    };
    getLanguages(): Promise<Language[]>  {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.99) {
                    reject(new Error('Something bad happened'));
                } else {
                    resolve(this._languages)
                }
            }, (Math.random() / 3 * 10000));
        });
    };

    fetchRaces = (dispatch: AppDispatch) => {
        dispatch(dataRequested());
        this.getRaces()
            .then((data: Race[]) => dispatch(dataLoaded(data)))
            .catch(() => dispatch(dataError()));
    };
    fetchClasses = (dispatch: AppDispatch) => {
        dispatch(dataRequested());
        this.getClasses()
            .then((data: Class[]) => dispatch(dataLoaded(data)))
            .catch(() => dispatch(dataError()));
    };
    fetchBackgrounds = (dispatch: AppDispatch) => {
        dispatch(dataRequested());
        this.getBackgrounds()
            .then((data: Background[]) => dispatch(dataLoaded(data)))
            .catch(() => dispatch(dataError()));
    };
    fetchAttributes = (dispatch: AppDispatch) => {
        dispatch(attributesRequested());
        this.getAttributes()
            .then((data: Attribute[]) => dispatch(attributesLoaded(data)))
            .catch(() => dispatch(attributesError()));
    };
    fetchSkills = (dispatch: AppDispatch) => {
        dispatch(proficienciesRequested('skills'));
        this.getSkills()
            .then((data: Skill[]) => dispatch(proficienciesLoaded({field: 'skills', data: data})))
            .catch(() => dispatch(proficienciesError('skills')));
    };
    fetchTools = (dispatch: AppDispatch) => {
        dispatch(proficienciesRequested('tools'));
        this.getTools()
            .then((data: Tool[]) => dispatch(proficienciesLoaded({field: 'tools', data: data})))
            .catch(() => dispatch(proficienciesError('tools')));
    };
    fetchLanguages = (dispatch: AppDispatch) => {
        dispatch(proficienciesRequested('languages'));
        this.getLanguages()
            .then((data: Language[]) => dispatch(proficienciesLoaded({field: 'languages', data: data})))
            .catch(() => dispatch(proficienciesError('languages')));
    };
}
