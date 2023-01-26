import css from './Button.module.css';

export const Button = ({ omClick }) => { 
    return (
        <div className={ css.ButtonWrap}>
            <button onClick={onClick} type="button" className={css.Button} >
                Load more
            </button>
        </div>
    );
};