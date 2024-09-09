
import '@/styles/Sidebar.css'
import BudgetFilter from './BudgetFilter.component'
import FuelFilter from './FuelFilter.component'
import ClearFilter from './ClearFilter.component'
type Props = {}

const SideBar = (props: Props, ) => {
  
  return (
    <div className='sidebar'>
      <ClearFilter/>
        <BudgetFilter/>
        <FuelFilter/>
    </div>
  )
}

export default SideBar