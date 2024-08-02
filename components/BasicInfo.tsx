'use client';

import React from "react";
import { useCharacter } from "@/lib/CharacterContext";

const BasicInfo: React.FC = () => {
	const { character, updateCharacter } = useCharacter();

	if (!character) return null;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		updateCharacter({
			[name]: name === "level" || name === "xp" ? parseInt(value) : value,
		});
	};

	return (
		<div className="card bg-base-200 shadow-xl mb-4">
			<div className="card-body">
				<h2 className="card-title">Basic Information</h2>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Character Name</span>
					</label>
					<input
						type="text"
						name="name"
						value={character.name}
						onChange={handleChange}
						className="input input-bordered"
					/>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Level</span>
					</label>
					<input
						type="number"
						name="level"
						value={character.level}
						onChange={handleChange}
						className="input input-bordered"
						min="1"
					/>
				</div>
			</div>
		</div>
	);
};

export default BasicInfo;
