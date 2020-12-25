import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import { DateRange as DateRangePicker } from 'react-date-range'
import { useEffect, useMemo, useRef, useState } from 'react'
import { format } from 'date-fns'
import { useClickOutside } from '@/hooks/useClickOutside'
import InputGroup from './InputGroup'
import InputContainer from './InputContainer'
import TextField from './TextField'
import { cx } from '@/utilities/classes'
import Button from '../Button'
import Icon from '../icons/Icon'

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
			<InputContainer
				cursor="pointer"
				className="relative"
				trailingSlot={
					<div className={cx(formattedText ? 'block' : 'hidden')}>
						<Icon icon="x-circle" className="w-4 text-gray-400" />
					</div>
				}
				onClickTrailing={() => onChange({ startDate: null, endDate: null })}
			>
				<button
					className={cx(
						'w-full block border-none text-base focus:ring-transparent p-0 leading-6 text-left',
						'focus:outline-none',
						{ 'text-gray-500': !formattedText }
					)}
					onClick={() => setShowDatePicker(true)}
				>
					{formattedText || 'Any time'}
				</button>
				{showDatePicker && (
					<div ref={ref}>
						<DateRangePicker
							className="absolute z-10 left-0 top-12 shadow-xl border border-gray-300 rounded overflow-hidden"
							editableDateInputs={true}
							// @ts-ignore
							onChange={item => onChange({ ...item.selection })}
							moveRangeOnFirstSelection={false}
							ranges={ranges}
						/>
					</div>
				)}
			</InputContainer>
		</InputGroup>
	)
}
