import {Race, Class} from "../utils/types";

export default class TestService {
    _races: Race[] = [
        {
            "index": "dragonborn",
            "name": "Dragonborn",
        },
        {
            "index": "dwarf",
            "name": "Dwarf",
        },
        {
            "index": "elf",
            "name": "Elf",
        },
        {
            "index": "gnome",
            "name": "Gnome",
        },
        {
            "index": "half-elf",
            "name": "Half-Elf",
        },
        {
            "index": "half-orc",
            "name": "Half-Orc",
        },
        {
            "index": "halfling",
            "name": "Halfling",
        },
        {
            "index": "human",
            "name": "Human",
        },
        {
            "index": "tiefling",
            "name": "Tiefling",
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

    getRaces(): Promise<Race[]>  {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
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
                if (Math.random() > 0.75) {
                    reject(new Error('Something bad happened'));
                } else {
                    resolve(this._classes)
                }
            }, 1000);
        });
    };
}
