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
        },
        {
            "index": "dwarf",
            "name": "Dwarf",
            "bonusStats": {con: 2},
        },
        {
            "index": "elf",
            "name": "Elf",
            "bonusStats": {dex: 2},
        },
        {
            "index": "gnome",
            "name": "Gnome",
            "bonusStats": {int: 2},
        },
        {
            "index": "half-elf",
            "name": "Half-Elf",
            "bonusStats": {chr: 2, unset: 2},
        },
        {
            "index": "half-orc",
            "name": "Half-Orc",
            "bonusStats": {str: 2, con: 1},
        },
        {
            "index": "halfling",
            "name": "Halfling",
            "bonusStats": {dex: 2},
        },
        {
            "index": "human",
            "name": "Human",
            "bonusStats": {str: 1, dex: 1, con: 1, int: 1, wis: 1, chr: 1},
        },
        {
            "index": "tiefling",
            "name": "Tiefling",
            "bonusStats": {chr: 2, int: 1},
        }
    ];

    _classes: Class[] = [
        {
            "index": "barbarian",
            "name": "Barbarian",
        },
        {
            "index": "bard",
            "name": "Bard",
        },
        {
            "index": "cleric",
            "name": "Cleric",
        },
        {
            "index": "druid",
            "name": "Druid",
        },
        {
            "index": "fighter",
            "name": "Fighter",
        },
        {
            "index": "monk",
            "name": "Monk",
        },
        {
            "index": "paladin",
            "name": "Paladin",
        },
        {
            "index": "ranger",
            "name": "Ranger",
        },
        {
            "index": "rogue",
            "name": "Rogue",
        },
        {
            "index": "sorcerer",
            "name": "Sorcerer",
        },
        {
            "index": "warlock",
            "name": "Warlock",
        },
        {
            "index": "wizard",
            "name": "Wizard",
        }
    ];

    _backgrounds: Background[] = [
        {
            "index": "charlatan",
            "name": "Charlatan",
        },
        {
            "index": "criminal",
            "name": "Criminal",
        },
        {
            "index": "entertainer",
            "name": "Entertainer",
        },
        {
            "index": "folk hero",
            "name": "Folk hero",
        },
        {
            "index": "guild artisan",
            "name": "Guild artisan",
        },
        {
            "index": "hermit",
            "name": "Hermit",
        },
        {
            "index": "outlander",
            "name": "Outlander",
        },
        {
            "index": "noble",
            "name": "Noble",
        },
        {
            "index": "sage",
            "name": "Sage",
        },
        {
            "index": "sailor",
            "name": "Sailor",
        },
        {
            "index": "soldier",
            "name": "Soldier",
        },
        {
            "index": "urchin",
            "name": "Urchin",
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
