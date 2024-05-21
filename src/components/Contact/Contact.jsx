import css from './Contact.module.css';
import { RiUser3Fill } from 'react-icons/ri';
import { BiSolidPhone } from 'react-icons/bi';

export default function Contact({ data: { name, number, id }, onDelete }) {
  return (
    <div className={css.userCard}>
      <div className={css.userInfo}>
        <span className={css.userName}>
          <RiUser3Fill /> {name}
        </span>
        <span>
          <BiSolidPhone /> {number}
        </span>
      </div>
      <button className={css.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
