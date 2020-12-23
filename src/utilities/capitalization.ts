const toCamel = s => {
	return s.replace(/([-_][a-z])/gi, $1 => {
		return $1.toUpperCase().replace('-', '').replace('_', '')
	})
}

const isArray = function (a) {
	return Array.isArray(a)
}

const isObject = function (o) {
	return o === Object(o) && !isArray(o) && typeof o !== 'function'
}

/**
 * Converts an object or array's keys to camel case
 * @param toConvert An object or array
 */
export function keysToCamel(toConvert: Object | Array<any>) {
	if (isObject(toConvert)) {
		const n = {}

		Object.keys(toConvert).forEach(k => {
			n[toCamel(k)] = keysToCamel(toConvert[k])
		})

		return n
	} else if (isArray(toConvert)) {
		return toConvert.map(i => {
			return keysToCamel(i)
		})
	}

	return toConvert
}
