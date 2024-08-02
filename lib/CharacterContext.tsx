'use client';

import React, { createContext, useContext, useState } from "react";
import { Character, Archetype, Build, Skill, Stance } from "@/types";

const  CharacterContext = createContext<{
    character: Character | null;
    updateCharacter: (updates: Partial<Character>) => void;
} | undefined>(undefined);

export function CharacterProvider({ children }: { children: React.ReactNode }) {
    const [character, setCharacter] = useState<Character>({
        name: '',
        level: 1,
        xp: 0,
        archetype: 'Angel' as Archetype,
        stances: [] as Stance[],
        skills: [] as Skill[],
        build: 'Agile' as Build,
        health: 10,
        tokens: {
            iron: 0,
            power: 0,
            speed: 0,
        },
    });

    function updateCharacter(updates: Partial<Character>): void {
        setCharacter(prev => ({ ...prev, ...updates }));
    }

    return (
        <CharacterContext.Provider value={{ character, updateCharacter }}>
            {children}
        </CharacterContext.Provider>
    );
}
 export function useCharacter() {
    const context = useContext(CharacterContext);
    if (context === undefined) {
        throw new Error("useCharacter must be used within a CharacterProvider");
    }
    return context;
 }
