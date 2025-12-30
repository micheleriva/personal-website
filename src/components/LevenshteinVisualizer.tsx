import React, { useState, useEffect } from "react";

interface MatrixCell {
	value: number;
	operation: "match" | "substitute" | "insert" | "delete" | "init";
	isActive?: boolean;
	isPath?: boolean;
}

const LevenshteinVisualizer: React.FC = () => {
	const [source, setSource] = useState("kitten");
	const [target, setTarget] = useState("sitting");
	const [matrix, setMatrix] = useState<MatrixCell[][]>([]);
	const [isAnimating, setIsAnimating] = useState(false);
	const [currentStep, setCurrentStep] = useState(0);
	const [steps, setSteps] = useState<
		Array<{ i: number; j: number; operation: string; cost: number }>
	>([]);
	const [showResult, setShowResult] = useState(true);
	const [animationSteps, setAnimationSteps] = useState<
		Array<{ i: number; j: number; operation: string; cost: number }>
	>([]);

	const calculateMatrix = (src: string, tgt: string, animate = false) => {
		console.log("calculateMatrix called with:", src, tgt, animate);

		const sourceLength = src.length;
		const targetLength = tgt.length;

		// Initialize matrix
		const newMatrix: MatrixCell[][] = Array(sourceLength + 1)
			.fill(null)
			.map(() =>
				Array(targetLength + 1)
					.fill(null)
					.map(() => ({ value: 0, operation: "init" as const })),
			);

		const calculationSteps: Array<{
			i: number;
			j: number;
			operation: string;
			cost: number;
		}> = [];

		// Initialize first row and column
		for (let i = 0; i <= sourceLength; i++) {
			newMatrix[i][0] = { value: i, operation: "init" };
		}
		for (let j = 0; j <= targetLength; j++) {
			newMatrix[0][j] = { value: j, operation: "init" };
		}

		// Fill the matrix
		for (let i = 1; i <= sourceLength; i++) {
			for (let j = 1; j <= targetLength; j++) {
				const isMatch = src[i - 1] === tgt[j - 1];
				const cost = isMatch ? 0 : 1;

				const deletion = newMatrix[i - 1][j].value + 1;
				const insertion = newMatrix[i][j - 1].value + 1;
				const substitution = newMatrix[i - 1][j - 1].value + cost;

				const minValue = Math.min(deletion, insertion, substitution);

				let operation: MatrixCell["operation"];
				if (minValue === substitution) {
					operation = isMatch ? "match" : "substitute";
				} else if (minValue === deletion) {
					operation = "delete";
				} else {
					operation = "insert";
				}

				newMatrix[i][j] = { value: minValue, operation };

				calculationSteps.push({
					i,
					j,
					operation: isMatch ? "match" : operation,
					cost: minValue,
				});
			}
		}

		console.log("calculationSteps:", calculationSteps);

		setMatrix(newMatrix);
		setSteps(calculationSteps);

		if (!animate) {
			setShowResult(true);
			setCurrentStep(calculationSteps.length);
		}

		return calculationSteps;
	};

	const animate = () => {
		console.log("animate clicked, isAnimating:", isAnimating);

		if (isAnimating) return;

		setIsAnimating(true);
		setShowResult(false);
		setCurrentStep(0);

		// Get the steps immediately from calculateMatrix
		const newSteps = calculateMatrix(source, target, true);
		setAnimationSteps(newSteps);

		console.log("Starting animation with steps:", newSteps.length);

		let stepIndex = 0;
		const interval = setInterval(() => {
			console.log("Animation step:", stepIndex, "of", newSteps.length);

			if (stepIndex >= newSteps.length - 1) {
				console.log("Animation complete");
				setIsAnimating(false);
				setShowResult(true);
				clearInterval(interval);
				setCurrentStep(newSteps.length);
				return;
			}

			stepIndex++;
			setCurrentStep(stepIndex);
		}, 800); // Slower animation for debugging
	};

	useEffect(() => {
		calculateMatrix(source, target);
	}, [source, target]);

	const getCellColor = (i: number, j: number, cell: MatrixCell) => {
		if (isAnimating && currentStep < animationSteps.length) {
			const currentStepData = animationSteps[currentStep];
			if (
				currentStepData &&
				currentStepData.i === i &&
				currentStepData.j === j
			) {
				return "bg-yellow-300 border-yellow-500 animate-pulse shadow-lg";
			}
			const stepIndex = animationSteps.findIndex(
				(step) => step.i === i && step.j === j,
			);
			if (stepIndex !== -1 && stepIndex < currentStep) {
				return getOperationColor(cell.operation);
			}
			if (i === 0 || j === 0) {
				return "bg-gray-100 border-gray-300";
			}
			return "bg-gray-50 border-gray-200";
		}

		if (i === 0 || j === 0) {
			return "bg-gray-100 border-gray-300";
		}

		return getOperationColor(cell.operation);
	};

	const getOperationColor = (operation: MatrixCell["operation"]) => {
		switch (operation) {
			case "match":
				return "bg-green-100 border-green-300";
			case "substitute":
				return "bg-blue-100 border-blue-300";
			case "insert":
				return "bg-orange-100 border-orange-300";
			case "delete":
				return "bg-red-100 border-red-300";
			default:
				return "bg-gray-100 border-gray-300";
		}
	};

	const getOperationSymbol = (operation: MatrixCell["operation"]) => {
		switch (operation) {
			case "match":
				return "✓";
			case "substitute":
				return "↘";
			case "insert":
				return "←";
			case "delete":
				return "↑";
			default:
				return "";
		}
	};

	return (
		<div className="bg-white p-6 rounded-lg border border-gray-200 my-8">
			<div className="mb-6">
				<h3 className="text-xl font-semibold mb-4 text-gray-800">
					Interactive Levenshtein Distance Calculator
				</h3>

				<div className="flex flex-col sm:flex-row gap-4 mb-4">
					<div className="flex-1">
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Source String:
						</label>
						<input
							type="text"
							value={source}
							onChange={(e) => setSource(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Enter source string"
						/>
					</div>

					<div className="flex-1">
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Target String:
						</label>
						<input
							type="text"
							value={target}
							onChange={(e) => setTarget(e.target.value)}
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Enter target string"
						/>
					</div>
				</div>

				<div className="flex gap-2 items-center mb-4">
					<button
						onClick={animate}
						disabled={isAnimating}
						className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
					>
						{isAnimating ? "Animating..." : "Animate Algorithm"}
					</button>

					{isAnimating && (
						<div className="text-sm text-blue-600">
							Step {currentStep + 1} of {animationSteps.length}
						</div>
					)}
				</div>

				{showResult && matrix.length > 0 && (
					<div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
						<p className="text-green-800">
							<strong>
								Edit Distance: {matrix[source.length][target.length].value}
							</strong>
						</p>
					</div>
				)}
			</div>

			{matrix.length > 0 && (
				<div className="overflow-x-auto">
					<div className="inline-block min-w-full">
						<table className="border-collapse border border-gray-300">
							<thead>
								<tr>
									<th className="w-10 h-10 border border-gray-300 bg-gray-50"></th>
									<th className="w-10 h-10 border border-gray-300 bg-gray-50 text-xs">
										ε
									</th>
									{target.split("").map((char, idx) => (
										<th
											key={idx}
											className="w-10 h-10 border border-gray-300 bg-gray-50 text-xs font-mono"
										>
											{char}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{matrix.map((row, i) => (
									<tr key={i}>
										<th className="w-10 h-10 border border-gray-300 bg-gray-50 text-xs font-mono">
											{i === 0 ? "ε" : source[i - 1]}
										</th>
										{row.map((cell, j) => (
											<td
												key={j}
												className={`w-10 h-10 border text-xs text-center font-mono relative transition-all duration-300 ${getCellColor(i, j, cell)}`}
											>
												<div className="font-semibold text-sm">
													{cell.value}
												</div>
												{i !== 0 && j !== 0 && (
													<div className="absolute top-0 right-0 text-[10px] leading-none opacity-60">
														{getOperationSymbol(cell.operation)}
													</div>
												)}
											</td>
										))}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			)}

			<div className="mt-4 text-xs text-gray-600">
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
					<div className="flex items-center gap-1">
						<div className="w-4 h-4 bg-green-100 border border-green-300 rounded"></div>
						<span>Match (✓)</span>
					</div>
					<div className="flex items-center gap-1">
						<div className="w-4 h-4 bg-blue-100 border border-blue-300 rounded"></div>
						<span>Substitute (↘)</span>
					</div>
					<div className="flex items-center gap-1">
						<div className="w-4 h-4 bg-orange-100 border border-orange-300 rounded"></div>
						<span>Insert (←)</span>
					</div>
					<div className="flex items-center gap-1">
						<div className="w-4 h-4 bg-red-100 border border-red-300 rounded"></div>
						<span>Delete (↑)</span>
					</div>
				</div>
			</div>

			{isAnimating && currentStep < animationSteps.length && (
				<div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
					<p className="text-blue-800 text-sm">
						<strong>Step {currentStep + 1}:</strong> Computing cell (
						{animationSteps[currentStep]?.i}, {animationSteps[currentStep]?.j})
						- Operation:{" "}
						<span className="font-mono">
							{animationSteps[currentStep]?.operation}
						</span>{" "}
						- Result:{" "}
						<span className="font-mono">
							{animationSteps[currentStep]?.cost}
						</span>
					</p>
				</div>
			)}
		</div>
	);
};

export default LevenshteinVisualizer;
