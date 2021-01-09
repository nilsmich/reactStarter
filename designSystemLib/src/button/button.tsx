import React, {FC} from 'react'

interface IButton {
  onClick?: () => void
}

export const Button: FC<IButton> = ({onClick, children}) => {
  return (
    <>
      <button onClick={onClick}>
        {children}
      </button>

      <style jsx>{`
        button {
          padding: 1rem 3rem;
          box-shadow: 3px 3px 4px rgba(0, 0, 0, .2);
        }
      `}</style>

    </>
  )
}
