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

	const handleHeroTypeChange = (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		const newHeroType = event.target.value as HeroType;
		if (character) {
			updateCharacter({ heroType: newHeroType, archetypes: [] });
		}
	};

	const handleArchetypeChange = (
		event: React.ChangeEvent<HTMLSelectElement>,
		index: number,
	) => {
		if (character) {
			const newArchetype = event.target.value as Archetype;
			const newArchetypes = [...character.archetypes];
			newArchetypes[index] = newArchetype;
			updateCharacter({ archetypes: newArchetypes });
		}
	};

	const getArchetypeSelections = () => {
		const selectCount =
			character?.heroType === "Focused"
				? 1
				: character?.heroType === "Fused"
					? 2
					: 3;
		return Array(selectCount)
			.fill(null)
			.map((_, index) => {
				const archetypeKey = character?.archetypes[index] || `new-${index}`;
				return (
					<div key={archetypeKey} className="form-control mt-4">
						<label className="label">
							<span className="label-text">Archetype {index + 1}</span>
						</label>
						<select
							className="select select-bordered w-full max-w-xs"
							value={character?.archetypes[index] || ""}
							onChange={(event) => handleArchetypeChange(event, index)}
						>
							<option disabled value="">
								Choose an Archetype
							</option>
							{archetypes.map((archetype) => (
								<option key={archetype.id} value={archetype.name}>
									{archetype.emoji} {archetype.name} (Complexity:{" "}
									{archetype.complexity})
								</option>
							))}
						</select>
					</div>
				);
			});
	};

	const selectedArchetypes = archetypes.filter((archetype) =>
		character?.archetypes.includes(archetype.name),
	);

	return (
		<div className="card bg-base-200 shadow-xl mb-4">
			<div className="card-body">
				<h2 className="card-title">Hero Type & Archetype Selection</h2>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Select Hero Type</span>
					</label>
					<select
						className="select select-bordered w-full max-w-xs"
						value={character?.heroType}
						onChange={handleHeroTypeChange}
					>
						<option value={"Focused"}>Focused</option>
						<option value={"Fused"}>Fused</option>
						<option value={"Frantic"}>Frantic</option>
					</select>
				</div>
				{getArchetypeSelections()}
				{selectedArchetypes.map((archetype) => (
					<div key={archetype.name} className="mt-4">
						<h3 className="text-lg font-semibold">
							{archetype.emoji} {archetype.name}
						</h3>
						<p>{archetype.description}</p>
						<p className="mt-2">Complexity: {archetype.complexity} / 3</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ArchetypeSelection;
