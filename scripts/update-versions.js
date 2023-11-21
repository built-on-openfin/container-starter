const fs = require('fs');
const { globSync } = require('glob');
console.log(process.argv.slice(2,-2))
// Get command line arguments
const fileNamePatterns = process.argv.slice(2, -2);
const targetKey = process.argv[process.argv.length - 2];
const replacementValue = process.argv[process.argv.length - 1];
for (const fileNamePattern of fileNamePatterns) {
	// Find matching JSON files in current directory and all subdirectories
	const files = globSync(`**/${fileNamePattern}`, {
		nodir: true,
		recursive: true,
		ignore: '**/node_modules/**'
	});

	// Loop through each file
	for (const file of files) {
		// Read JSON file
		fs.readFile(file, 'utf8', (readError, data) => {
			if (readError) {
				console.error(readError);
				return;
			}

			// Parse JSON object
			const json = JSON.parse(data);
			console.log(json[targetKey]);
			// Modify target key
			if (targetKey === 'runtime' && json[targetKey].version) {
				json[targetKey].version = replacementValue;
			}

			if (targetKey === 'devDependencies' && json[targetKey]['openfin-adapter']) {
				json[targetKey]['openfin-adapter'] = replacementValue;
			}

			if (
				(targetKey === 'dependencies' || targetKey === 'devDependencies') &&
				json[targetKey] !== undefined
			) {
				json[targetKey]['@openfin/core'] = replacementValue;
				json[targetKey]['@openfin/node-adapter'] = replacementValue;
			}

			if (targetKey === 'version' && json['name'] === 'openfin-container-starter') {
				json[targetKey] = replacementValue;
			}

			// Write updated JSON object back to file
			fs.writeFile(file, JSON.stringify(json, null, 2), (writeError) => {
				if (writeError) {
					console.error(writeError);
					return;
				}

				console.log(`Successfully updated ${targetKey} in ${file}`);
			});
		});
	}
}
