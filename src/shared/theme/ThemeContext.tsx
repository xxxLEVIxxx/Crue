import React from 'react'

type ThemeProvider ={
    children: React.ReactNode;
}


const ThemeProvider = ({children}:ThemeProvider) => {
  return (
    <>{children}</>
  )
}

export default ThemeProvider;