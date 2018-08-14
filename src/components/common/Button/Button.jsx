import React from 'react';
import styles from './Button.scss';
import cn from 'classnames';

const Button = ({ type, text, onClick, left }) => {
	return <button 
		className={
			cn(
				styles.button,
				left ? styles.left : ''
			)
		} 
		type={type}
		onClick={onClick}
	>{text}
	</button>
}

export default Button;