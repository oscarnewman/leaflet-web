import classNames from 'classnames'

export interface ClassArray extends Array<ClassValue> {}

export interface ClassDictionary {
	[id: string]: any
}

export type ClassValue =
	| string
	| number
	| ClassDictionary
	| ClassArray
	| undefined
	| null
	| boolean

/**
 * Concatenates classes into a single string
 *
 * @param classes Objects or strings defining classes to apply
 */
export function cx(...classes: ClassValue[]) {
	return classNames(classes)
}
