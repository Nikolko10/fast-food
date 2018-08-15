import React from 'react';
import styles from './Button.scss';
import cn from 'classnames';

const Button = ({ type, text, onClick, radius_r, radius_l }) => {
	return <button 
		className={
			cn(
				styles.button,
				radius_r ? styles.radius_r : '',
				radius_l ? styles.radius_l : ''
			)
		} 
		type={type}
		onClick={onClick}
	>{text}
	</button>
}

export default Button;