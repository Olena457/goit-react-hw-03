import css from './ContactForm.module.css';
export default function ContactForm() {
  return (
    <div className={css.phoneBook}>
      <div className={css.contactForm}>
        <form>
          <label className={css.contactFormlabel} htmlFor="name">
            Name
          </label>
          <input
            className={css.contactFormInput}
            type="text"
            id="name"
            name="name"
            required
          />
          <label className={css.contactFormlabel} htmlFor="number">
            Number
          </label>
          <input
            className={css.contactFormInput}
            type="tel"
            id="number"
            name="number"
            required
          />
          <button className={css.contactFormBtn} type="submit">
            Add contact
          </button>
        </form>
      </div>
    </div>
  );
}
