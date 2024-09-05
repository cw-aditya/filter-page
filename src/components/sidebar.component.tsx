
import '@/styles/Sidebar.css'
import BudgetFilter from './BudgetFilter.component'
import FuelFilter from './FuelFilter.component'
type Props = {}

const SideBar = (props: Props, ) => {
  
  return (
    <div className='sidebar'>
        <BudgetFilter/>
        <FuelFilter/>
    </div>
  )
}

export default SideBar