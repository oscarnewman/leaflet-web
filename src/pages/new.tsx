import ImageDropzone from '@/components/form/ImageDropzone'
import BaseLayout from '@/components/layout/BaseLayout'
import PrimaryButton from '@/components/ui/Button/PrimaryButton'
import { ArrowRightIcon } from '@/components/ui/icons'
import TextField from '@/components/ui/input/TextField'
import Stack from '@/components/ui/Stack'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

type Props = {}

function NewPropertyPage(props: Props) {
	function handleSubmit(values) {
		console.log(values)
	}

	return (
		<BaseLayout>
			<div className="prose dark:prose-dark pb-10">
				<h1>List your place</h1>
				<p className="lead">
					Add some photos, basic info, and availability schedule for your home
					or apartment.
				</p>
			</div>
			<Formik
				initialValues={{
					bedrooms: '',
					area: '',
					rent: '',
				}}
				onSubmit={handleSubmit}
				validationSchema={Yup.object({
					bedrooms: Yup.number()
						.integer()
						.min(1)
						.max(20)
						.required('Required')
						.typeError('Must be a whole number'),
					area: Yup.string().max(100).required(),
					rent: Yup.number().min(100).max(10000).required(),
				})}
				validateOnBlur
			>
				{({ getFieldProps, setFieldValue, errors }) => (
					<Form>
						<Stack space={6}>
							<ImageDropzone />
							<TextField
								title="Bedrooms"
								name="bedrooms"
								placeholder="Probably a few"
								{...getFieldProps('bedrooms')}
								onChange={value => setFieldValue('bedrooms', value)}
							/>
							<TextField
								title="Area"
								name="area"
								placeholder="i.e. Governor St"
								{...getFieldProps('area')}
							/>
							<TextField
								leadingSlot={
									<span className="text-gray-400 mr-2 font-medium">$</span>
								}
								title="Rent"
								name="rent"
								placeholder="Per month"
								type="number"
								{...getFieldProps('rent')}
							/>

							<PrimaryButton
								type="submit"
								trailingIcon={<ArrowRightIcon className="w-6" />}
							>
								Find Subletters
							</PrimaryButton>
						</Stack>
					</Form>
				)}
			</Formik>
		</BaseLayout>
	)
}

export default NewPropertyPage
