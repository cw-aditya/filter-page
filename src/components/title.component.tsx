import React, {useContext} from "react"
// import '@/styles/Title.css'
import '@/styles/Title.css'
import { globalDataContext } from "@/utilities/contexts"

type Props = {
}

function Title(props: Props) {
  const GlobalDataContext = useContext(globalDataContext)
  
  return (
    <div className="title">{GlobalDataContext?.data.totalCount} Used Cars in Mumbai</div>
  )
}

export default Title

