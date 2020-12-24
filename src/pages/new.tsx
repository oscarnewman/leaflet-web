import ImageDropzone from '@/components/form/ImageDropzone'
import TextInput from '@/components/form/TextInput'
import BaseLayout from '@/components/layout/BaseLayout'
import PrimaryButton from '@/components/ui/Button/PrimaryButton'
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
				}}
				onSubmit={handleSubmit}
				validationSchema={Yup.object({
					bedrooms: Yup.number().min(1).max(20).required(),
					area: Yup.string().max(100).required(),
				})}
				validateOnBlur
			>
				<Form>
					<Stack space={6}>
						<ImageDropzone />
						<TextInput
							title="Bedrooms"
							type="number"
							name="bedrooms"
							placeholder="Probably a few"
						/>
						<TextInput
							title="Area"
							placeholder="i.e. Governor Street"
							name="area"
						/>
						<PrimaryButton type="submit">Post</PrimaryButton>
					</Stack>
				</Form>
			</Formik>
		</BaseLayout>
	)
}

export default NewPropertyPage
