'use client'

import reduxStore from '@/redux/store'
import { Provider } from 'react-redux'
import React, { ReactNode } from 'react'

function CustomAppStoreProvider({ children }: { children:ReactNode }) {
  return (
    <Provider store={reduxStore}>{children}</Provider>
  )
}

export default CustomAppStoreProvider;