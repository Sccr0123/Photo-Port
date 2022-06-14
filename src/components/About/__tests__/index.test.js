// __tests__/About.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
	// render test
	test("renders", () => {
		render(<About />);
	});

	// snapshot test
	test("matches snapshot DOM node structure", () => {
		const { asFragment } = render(<About />);

		expect(asFragment()).toMatchSnapshot();
	});
})
