import { ThreeDots } from "react-loader-spinner";
import './ Loader.css';

const Loader = () => { 
    return (
        <div className="Spinner">
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