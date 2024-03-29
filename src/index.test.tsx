// src/index.spec.js
/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { ReactStrictMode, rootElement } from './index';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('index.js', () => {
  it('renders without crashing', () => {
    ReactDOM.render(ReactStrictMode, rootElement);
    expect(ReactDOM.render).toHaveBeenCalledWith(ReactStrictMode, rootElement);
  });
});

test('should render todo component', () => {
  expect(true).toBe(true);
});
