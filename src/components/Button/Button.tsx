import React, { ReactNode, FC } from 'react';
import { cn } from '@bem-react/classname';

import './Button.scss';

interface IButtonProps {
	className?: string;
	disabled?: boolean;
	children: ReactNode;
}

const Button: FC<IButtonProps> = ({
	className,
	disabled = false,
	children,
}) => {
	const cnButton = cn('Button');

	return (
		<button className={cnButton({ disabled }, [className])} disabled={disabled}>
			{children}
		</button>
	);
};

export default Button;
