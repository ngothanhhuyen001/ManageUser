import { Outlet } from "react-router-dom"
import Header from "../../share/components/Layout/Header"
import './style.scss'
import ButtonBase from "../../share/components/Button"
import { ArrowUpOutlined } from "@ant-design/icons"
import useScrollToTop from "../../share/hooks/useScrollToTop"
import { useState } from "react"

const HomePage = () => {

  const { scrollToTop } = useScrollToTop();
  const [isVisible, setIsVisible] = useState(false);

  window.onscroll = () => {
    setIsVisible(window.scrollY > 50);
  };


  return (
    <div className="home-page-container">
      <Header />
      <div>
        {isVisible && (
          <ButtonBase className="scroll-to-top-button" shape="circle" icon={<ArrowUpOutlined />} onClick={scrollToTop} />
        )}
        <Outlet />
      </div>
    </div>
  )
}
export default HomePage