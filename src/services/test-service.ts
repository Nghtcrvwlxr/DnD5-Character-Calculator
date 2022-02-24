import {Race} from "../utils/types";

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
}
