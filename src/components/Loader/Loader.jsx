import { RotatingLines } from "react-loader-spinner";
import css from './ Loader.module.css';

export const Loader = () => { 
    return (
        <section className={css.SectionLoader}>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="4"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </section>
    );
};