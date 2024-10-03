import React, {act, ReactNode} from 'react';
import {BackgroundProvider, useBackgroundContext} from './BackgroundContext';
import {renderHook} from '@testing-library/react';

type BackgroundProvider = {
  children: ReactNode;
};

const BackgroundContextProvider = ({children}: BackgroundProvider) => (
  <BackgroundProvider>{children}</BackgroundProvider>
);

const wrapper = ({children}: BackgroundProvider) => (
  <BackgroundContextProvider>{children}</BackgroundContextProvider>
);

describe('BackgroundContext', () => {
  test('DEVE ter o estado do theme igual a false', () => {
    const {result} = renderHook(() => useBackgroundContext(), {wrapper});

    expect(result.current.themeDark).toBeFalsy();
  });

  test('DEVE ter o estado do theme igual a true', async () => {
    const {result} = renderHook(() => useBackgroundContext(), {wrapper});

    await act(async () => {
      result.current.handleToggle();
    });

    expect(result.current.themeDark).toBe(true);
  });
});
