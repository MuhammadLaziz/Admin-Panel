import './new.scss'
import Navbar from '../../components/navbar/Navbar'
import SideBar from '../../components/sidebar/SideBar'

const New = () => {
  return (
    <div className='news'>
      <SideBar />
      <div className="newsContainer">
        <Navbar />
        NewsPage
      </div>
    </div>
  )
}

export default New