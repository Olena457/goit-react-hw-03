import css from './Contact.module.css';
import { RiUser3Fill } from 'react-icons/ri';
import { BiSolidPhone } from 'react-icons/bi';

export default function Contact({ data: { name, number, id }, onDelete }) {
  return (
    <div className={css.userCard}>
      <RiUser3Fill />
      <div className={css.userName}>{name}</div>
      <BiSolidPhone />
      <div className={css.userPhone}>{number}</div>
      <button className={css.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
