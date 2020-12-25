import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import { DateRange as DateRangePicker } from 'react-date-range'
import { useEffect, useMemo, useRef, useState } from 'react'
import { format } from 'date-fns'
import { useClickOutside } from '@/hooks/useClickOutside'
import InputGroup from './InputGroup'

export interface DateRange {
	startDate: Date
	endDate: Date
}

interface Props {
	title: string
	value: DateRange
	onChange: (value: DateRange) => void
}

export default function DateRangeInput({ title, value, onChange }: Props) {
	const ranges = useMemo(() => [{ ...value, key: 'selection' }], [value])

	const [showDatePicker, setShowDatePicker] = useState(false)

	const ref = useRef(null)
	useClickOutside(ref, () => {
		setShowDatePicker(false)
	})

	const formattedText = useMemo(() => {
		const { startDate, endDate } = value
		if (!startDate || !endDate) {
			return ''
		}

		const start = format(startDate, 'MMM')
		const end = format(endDate, 'MMM')

		if (start === end) {
			return format(startDate, 'MMMM')
		}

		return `${start} to ${end}`
	}, [value])

	return (
		<InputGroup className="relative" title={title}>
			<button
				className="text-left block w-full group focus:outline-none ring-2 ring-transparent focus:ring-indigo-500 rounded-md"
				onClick={() => setShowDatePicker(!showDatePicker)}
			>
				<input
					type="text"
					disabled
					className="form-input"
					placeholder="Any time"
					value={formattedText}
				/>
			</button>
			{showDatePicker && (
				<div ref={ref}>
					<DateRangePicker
						className="absolute z-10 shadow-xl border border-gray-300 rounded overflow-hidden"
						editableDateInputs={true}
						// @ts-ignore
						onChange={item => onChange({ ...item.selection })}
						moveRangeOnFirstSelection={false}
						ranges={ranges}
					/>
				</div>
			)}
		</InputGroup>
	)
}
