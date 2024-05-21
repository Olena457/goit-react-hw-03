import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const initialValues = {
  name: '',
  tel: '',
  id: nanoid(),
};
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!'),
  tel: Yup.string()
    .required('Required')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!'),
});

export default function ContactForm() {
  const nameFieldId = useId();
  const telFieldId = useId();

  const handleSubmit = (values, actions) => {
    if (values.name && values.tel) {
      console.log('The form is valid.The data has been sent:', values);
    } else {
      console.error('The form is not valid.Please check the field.');
    }
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={values => {
        try {
          Yup.validateYupSchema(values, validationSchema, true, values);
        } catch (err) {
          return Yup.yupToFormErrors(err);
        }
        return {};
      }}
      onSubmit={handleSubmit}
    >
      <div className={css.phoneBook}>
        <div className={css.contactForm}>
          <Form>
            <div>
              <label className={css.contactFormlabel} htmlFor={nameFieldId}>
                Name
              </label>
              <Field
                className={css.contactFormInput}
                type="text"
                name="name"
                id={nameFieldId}
              />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>

            <div>
              <label className={css.contactFormlabel} htmlFor={telFieldId}>
                Number
              </label>
              <Field
                className={css.contactFormInput}
                type="text"
                name="tel"
                id={telFieldId}
              />
              <ErrorMessage name="tel" component="div" className={css.error} />
            </div>

            <button className={css.contactFormBtn} type="submit">
              Add contact
            </button>
          </Form>
        </div>
      </div>
    </Formik>
  );
}
