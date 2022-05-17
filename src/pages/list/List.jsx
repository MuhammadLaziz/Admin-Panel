import './list.scss'
import Navbar from '../../components/navbar/Navbar'
import SideBar from '../../components/sidebar/SideBar'

const List = () => {
  return (
    <div className='list'>
      <SideBar />
      <div className="listContainer">
        <Navbar />
        Data Table
      </div>
    </div>
  )
}

export default List