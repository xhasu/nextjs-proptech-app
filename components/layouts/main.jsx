import React from 'react'

const Main = ({children}) => {
  return (
    <>
      <header></header>
      <main>
        {children}
      </main>
      <footer></footer>
    </>
  )
}

export default Main
