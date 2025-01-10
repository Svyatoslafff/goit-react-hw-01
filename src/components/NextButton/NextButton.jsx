import css from './NextButton.module.scss';

export default function NextButton({ children, link }) {
    return (
        <li className={css.item}>
            <a href={link}>Move to {children} task</a>
        </li>
    );
}
