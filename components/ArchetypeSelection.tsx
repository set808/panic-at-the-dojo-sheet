"use client";

import { useEffect, useState, type FC } from "react";
import { useCharacter } from "@/lib/CharacterContext";
import type { Archetype, ArchetypeRecord, HeroType } from "@/types";
import pb from "@/lib/pocketbase";

const ArchetypeSelection: FC = () => {
	const { character, updateCharacter } = useCharacter();
	const [archetypes, setArchetypes] = useState<ArchetypeRecord[]>([]);

	useEffect(() => {
		const fetchArchetypes = async () => {
			const records = await pb
				.collection("archetypes")
				.getFullList<ArchetypeRecord>({ requestKey: null });
			setArchetypes(records);
		};

		fetchArchetypes();
	}, []);

	const handleHeroTypeChange = (newHeroType: HeroType) => {
		if (character) {
			updateCharacter({ heroType: newHeroType, archetypes: [] });
		}
	};

	const handleArchetypeToggle = (archetypeName: Archetype) => {
		if (character) {
			const maxSelections =
				character.heroType === "Focused"
					? 1
					: character.heroType === "Fused"
						? 2
						: 3;
			const newArchetypes = character.archetypes.includes(archetypeName)
				? character.archetypes.filter((a) => a !== archetypeName)
				: [...character.archetypes, archetypeName].slice(0, maxSelections);
			updateCharacter({ archetypes: newArchetypes });
		}
	};

	const isArchetypeSelected = (archetypeName: Archetype) => {
		return character?.archetypes.includes(archetypeName);
	};

	return (
		<div className="card bg-base-200 shadow-xl mb-4">
			<div className="card-body">
				<h2 className="card-title">Hero Type & Archetype Selection</h2>
				<div className="flex space-x-4 mb-4">
					{["Focused", "Fused", "Frantic"].map((type) => (
						<button
							key={type}
							type="button"
							className={`btn ${character?.heroType === type ? "btn-primary" : "btn-outline"}`}
							onClick={() => handleHeroTypeChange(type as HeroType)}
						>
							{type}
						</button>
					))}
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{archetypes.map((archetype) => (
						<div
							key={archetype.id}
							className={`card ${
								isArchetypeSelected(archetype.name)
									? "bg-primary text-primary-content"
									: "bg-base-100"
							} cursor-pointer hover:shadow-lg transition-shadow`}
							onClick={() => handleArchetypeToggle(archetype.name)}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									handleArchetypeToggle(archetype.name);
								}
							}}
							tabIndex={0}
							role="button"
						>
							<div className="card-body p-4">
								<h3 className="card-title text-lg">
									{archetype.emoji} {archetype.name}
								</h3>
								<p className="text-sm">
									Complexity: {archetype.complexity} / 3
								</p>
							</div>
						</div>
					))}
				</div>
				{character && character.archetypes.length > 0 && (
					<div className="mt-6">
						<h3 className="text-xl font-semibold mb-2">Selected Archetypes</h3>
						{character.archetypes.map((archetypeName) => {
							const archetype = archetypes.find(
								(a) => a.name === archetypeName,
							);
							return archetype ? (
								<div key={archetype.name} className="mb-4">
									<h4 className="text-lg font-semibold">
										{archetype.emoji} {archetype.name}
									</h4>
									<p>{archetype.description}</p>
									<p className="mt-2">Complexity: {archetype.complexity} / 3</p>
								</div>
							) : null;
						})}
					</div>
				)}
			</div>
		</div>
	);
};

export default ArchetypeSelection;
