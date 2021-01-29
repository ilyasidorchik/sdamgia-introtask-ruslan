import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
	describe('common', () => {
		const { container } = render(<Button>Найти</Button>);
		const component = container.querySelector('.Button');

		it('renders correctly', () => {
			expect(component).toHaveTextContent('Найти');
		});

		it('matches snapshot', () => {
			expect(component).toMatchSnapshot();
		});
	});

	describe('with extra className and disabled', () => {
		const { container } = render(
			<Button className={'Profile-Button'} disabled={true}>
				Сохранить
			</Button>
		);
		const component = container.querySelector('.Button.Button_disabled');

		it('renders correctly', () => {
			expect(component).toHaveTextContent('Сохранить');
		});

		it('matches snapshot', () => {
			expect(component).toMatchSnapshot();
		});
	});
});
