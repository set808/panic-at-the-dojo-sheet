'use client';

import React from "react";
import { useCharacter } from "@/lib/CharacterContext";
import BasicInfo from "./BasicInfo";
import ArchetypeSelection from "./ArchetypeSelection";

const CharacterSheet: React.FC = () => {
    const { character } = useCharacter();

    if (!character) {
        return <div>No character data available</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Panic at the Dojo Character Sheet</h1>
            <BasicInfo />
            <ArchetypeSelection />
        </div>
    )
};

export default CharacterSheet;
