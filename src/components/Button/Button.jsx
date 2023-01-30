import {ButtonLoadMore} from './Button.styled';
import propTypes from 'prop-types';


export const Button = ({ onClick }) => {
    return (
        <>
            <ButtonLoadMore type="button" onClick={onClick}>
                Load more
            </ButtonLoadMore>
        </>
    );
};
  
Button.propTypes = {
    onClick: propTypes.func.isRequired,
};