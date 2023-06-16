import { Outlet } from "react-router"
import SideBar from "../sidebar"
import "./index.scss"
const Layout = () => {
  return (
    <div className="App">
        <SideBar />
        <div className="page">
          <span className="tags top-tags">&lt;body&gt;</span>
          <a style={{zIndex:'9999px'}} className="page-btn" href="https://docs.google.com/document/d/1oGgW-IUaa6wgpc-96BxSTi5T62GP1M40nLXGSRdQQm8/edit?usp=sharing">Resume</a>

          <Outlet />
          <span className="tags bottom-tags">&lt;body&gt;
          <br />
          <span className="bottom-tag-html">&lt;html&gt;</span>
          </span>

        </div>
    </div>
  )
}

export default Layout
