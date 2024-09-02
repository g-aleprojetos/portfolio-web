import 'jest-styled-components';
import '@testing-library/jest-dom';
import jestFetchMock from 'jest-fetch-mock';
import React from 'react';

global.React = React;
jestFetchMock.enableMocks();
