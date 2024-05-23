import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const initialContacts = {
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
  const nameFieldId = useId('name');
  const telFieldId = useId('tel');

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialContacts}
      validationSchema={validationSchema}
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
              <ErrorMessage
                className={css.error}
                name="name"
                component="span"
              />
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
              <ErrorMessage className={css.error} name="tel" component="span" />
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
