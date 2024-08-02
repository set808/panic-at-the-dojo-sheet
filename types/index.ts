export type Archetype = "Angel" | "Calvary" | "Cyborg" | "Demon" | "Flametongue" | "Gunkata" | "Phantom" | "Punk" | "Teacher" | "Trickster" | "Underdog" | "Wardancer" | "Winterblossom";

export interface ArchetypeRecord {
    id: string;
    name: Archetype;
    description: string;
    emoji: string;
    complexity: number;
}

export type Form = "Blaster" | "Control" | "Dance" | "Iron" | "One-Two" | "Power" | "Reversal" | "Shadow" | "Song" | "Vigilance" | "Wild" | "Zen";

export type Style = "Halcyon" | "Judgement" | "Shining" | "Singing" | "Winged" | "Charging" | "Heroic" | "Jumping" | "Rallying" | "Unbreakable" | "Armored" | "Incinerator" | "Machine" | "Rocket" | "Syphon" | "Dark" | "Ogre's" | "Slasher" | "Vampire" | "Zombie" | "Burning" | "Explosion" | "Inferno" | "Phoenix" | "Volcanic" | "Akimbo" | "Artillery" | "Crosshair" | "Ricochet" | "Ten Thousand" | "Aura" | "Crying" | "Puppet" | "Spirit" | "Vortex" | "Bleeding" | "Brawling" | "Flashy" | "Knockdown" | "Taunting" | "Patient" | "Elder" | "Mastermind" | "Motivating" | "Training" | "Caged" | "Mysterious" | "Illusion" | "Hidden" | "Whip" | "Collateral" | "Distracting" | "Eye of the" | "Lucky" | "Misfortune's" | "Forbidden" | "Lightning" | "Overwhelming" | "Relentless" | "Weightless" | "Crystal" | "Frozen" | "Precision" | "Pressure" | "Reflected";

export type Skill = "Basically Magic" | "Professional" | "Put on a Show" | "Unmovable" | "Think Fast" | "Unstoppable" | "Perfect Timing" | "Shadow Walker" | "Natural Charisma" | "Eyes Wide Open" | "Wind Runner" | "Peaceful Heart"

export type Build = "Agile" | "Bumbling" | "Mysterious" | "Overpowering" | "Scheming" | "Tough";

export interface Stance {
    form: Form;
    style: Style;
}

export interface Character {
    name: string;
    level: number;
    xp: number;
    archetype: Archetype;
    stances: Stance[];
    skills: Skill[];
    build: Build;
    health: number;
    tokens: {
        iron: number;
        power: number;
        speed: number;
    };
}

