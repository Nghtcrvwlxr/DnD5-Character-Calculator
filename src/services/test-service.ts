import {dataError, dataLoaded, dataRequested} from "../store/slices/service-slice";

import {Race, Class, Background, Attribute} from "../utils/types";
import {AppDispatch} from "../store/store";

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
    getBackgrounds(): Promise<Background[]>  {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
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
                if (Math.random() > 0.75) {
                    reject(new Error('Something bad happened'));
                } else {
                    resolve(this._attributes)
                }
            }, 1000);
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
        dispatch(dataRequested());
        this.getAttributes()
            .then((data: Attribute[]) => dispatch(dataLoaded(data)))
            .catch(() => dispatch(dataError()));
    };
}
