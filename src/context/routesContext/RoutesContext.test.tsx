import React, {act, ReactNode} from 'react';
import {renderHook} from '@testing-library/react';
import {CurrentPageProvider, useCurrentPageContext} from './RoutesContext';
import {InternalRoutes} from 'resources/enun/InternalRoutes';

type CurrentPageProvider = {
  children: ReactNode;
};

const CurrentPageContextProvider = ({children}: CurrentPageProvider) => (
  <CurrentPageProvider>{children}</CurrentPageProvider>
);

const wrapper = ({children}: CurrentPageProvider) => (
  <CurrentPageContextProvider>{children}</CurrentPageContextProvider>
);

describe('CurrentPageContext', () => {
  test('DEVE ter o estado inicial Home', () => {
    const {result} = renderHook(() => useCurrentPageContext(), {wrapper});

    expect(result.current.currentPage).toBe(InternalRoutes.Home);
  });

  test('DEVE ter retornar Projects no contexto QUANDO o valoe no handleCurrentPage', async () => {
    const {result} = renderHook(() => useCurrentPageContext(), {wrapper});

    await act(async () => {
      result.current.handleCurrentPage(InternalRoutes.Projects);
    });

    expect(result.current.currentPage).toBe(InternalRoutes.Projects);
  });

  test('DEVE ter retornar About no contexto QUANDO o valoe no handleCurrentPage', async () => {
    const {result} = renderHook(() => useCurrentPageContext(), {wrapper});

    await act(async () => {
      result.current.handleCurrentPage(InternalRoutes.About);
    });

    expect(result.current.currentPage).toBe(InternalRoutes.About);
  });

  test('DEVE ter retornar Settings no contexto QUANDO o valoe no handleCurrentPage', async () => {
    const {result} = renderHook(() => useCurrentPageContext(), {wrapper});

    await act(async () => {
      result.current.handleCurrentPage(InternalRoutes.Settings);
    });

    expect(result.current.currentPage).toBe(InternalRoutes.Settings);
  });
});
