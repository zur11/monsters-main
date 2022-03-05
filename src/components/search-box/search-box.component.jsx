import './search-box.styles.css';

//* Functional Component - Implicit return

const SearchBox = ({className, placeholder, onChangeHandler, type}) => (
    <input 
        className={`search-box ${className}`}
        type={type} 
        placeholder={placeholder}
        onChange={onChangeHandler} 
    />
);

export default SearchBox;