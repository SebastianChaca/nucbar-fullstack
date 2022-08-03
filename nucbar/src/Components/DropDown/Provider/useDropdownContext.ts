import React, {useContext} from 'react'
import { DropDownContext } from './DropdownProvider'


const useDropdownContext = () => useContext(DropDownContext)

export default useDropdownContext