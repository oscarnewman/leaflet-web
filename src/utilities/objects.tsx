/** Removes any null or empty keys from an object */
export const removeEmpty = (obj: Object) =>
	Object.keys(obj)
		.filter(
			k =>
				obj[k] != null &&
				obj[k] !== '' &&
				JSON.stringify(obj[k]) !== JSON.stringify({})
		) // Remove undef. and null.
		.reduce(
			(newObj, k) =>
				typeof obj[k] === 'object'
					? { ...newObj, [k]: removeEmpty(obj[k]) } // Recurse.
					: { ...newObj, [k]: obj[k] }, // Copy value.
			{}
		)
