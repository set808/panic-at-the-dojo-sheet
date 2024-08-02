"use client";

import React, { useEffect, useState } from "react";
import { useCharacter } from "@/lib/CharacterContext";
import { Archetype, ArchetypeRecord } from "@/types";
import pb from "@/lib/pocketbase";

const ArchetypeSelection: React.FC = () => {
	const { character, updateCharacter } = useCharacter();
	const [archetypes, setArchetypes] = useState<ArchetypeRecord[]>([]);
	const [selectedArchetype, setSelectedArchetype] = useState<Archetype | null>(character?.archetype || null);

	useEffect(() => {
		const fetchArchetypes = async () => {
			const records = await pb.collection('archetypes').getFullList<ArchetypeRecord>({requestKey: null});
			setArchetypes(records);
		};

		fetchArchetypes();
	}, []);

	const handleArchetypeChange = (
		event: React.ChangeEvent<HTMLSelectElement>,
	) => {
		const newArchetype = event.target.value as Archetype;
		setSelectedArchetype(newArchetype);
		updateCharacter({ archetype: newArchetype });
	};

	const currentArchetype = archetypes.find(archetype => archetype.name === selectedArchetype);

	return (
		<div className="card bg-base-200 shadow-xl mb-4">
			<div className="card-body">
				<h2 className="card-title">Archetype Selection</h2>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Select your Archetype</span>
					</label>
					<select
						value={selectedArchetype || ''}
						onChange={handleArchetypeChange}
						className="select select-bordered w-full max-w-xs"
					>
						<option disabled value="">Choose an Archetype</option>
						{archetypes.map((archetype) => (
							<option key={archetype.id} value={archetype.name}>
								{archetype.emoji} {archetype.name} (Complexity: {archetype.complexity})
							</option>
						))}
					</select>
				</div>
				{currentArchetype && (
					<div className="mt-4">
						<h3 className="text-lg font-semibold">{currentArchetype.emoji} {currentArchetype.name}</h3>
						<p>{currentArchetype.description}</p>
						<p className="mt-2">Complexity: {currentArchetype.complexity} / 3</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default ArchetypeSelection;
