import React, { useState } from 'react'

const AppContext = React.createContext({
  footer: {}
})

export const AppProvider = ({ children, state }) => {
  console.log('🐳 -> AppProvider -> state', state.props.config)
  // const [footer, setFooter] = useState(() => state?.config)
  // console.log('🐳 -> AppProvider -> state', footer)
  return <AppContext.Provider value={{ footer: state.props.config }}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  return React.useContext(AppContext)
}
