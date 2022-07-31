import React ,{useContext} from 'react'
import { CardContext } from './CardProvider'

const useCardContext = () => useContext(CardContext)
export default useCardContext