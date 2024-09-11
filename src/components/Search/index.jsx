import React from "react";
import debounce from 'lodash.debounce';
import { SearchContext } from "../../App";

import styles from '../Search/search.module.scss'

const Search = () => {
    const [value, setValue] = React.useState("");
    const {setSearchValue} = React.useContext(SearchContext)
    
    const inputRef = React.useRef();
    
    
    const  onCLickClear = () => {
        setSearchValue("");
        setValue("");
        inputRef.current.focus();
    }
    const updateSearchValue = React.useCallback(
        debounce((str)=> {
            setSearchValue(str);
        }, 500),
    [],);
    
    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    }

    return(
        <div className={styles.root}>
            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search">
  <g>
    <path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"></path>
  </g>
</svg>
            <input 
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                className='input' 
                placeholder="Поиск пиццы ..."/>

                {value && (
                    <svg 
                    onClick={onCLickClear} 
                    className={styles.iconclear} xmlns="http://www.w3.org/2000/svg" 
                    width="24" height="24" viewBox="0 0 24 24" id="clear">
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
                </svg>)}
            </div>
        
    )
}

export default Search