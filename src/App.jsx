import HeaderProfile from "./components/headerComponents/HeaderProfile"
import './App.scss'
import LeftComponent from "./components/leftComponents/LeftComponent"
import RightComponent from "./components/rightComponents/RightComponent"

function App() {

  return (
    <>
      <div className="bodyProfile">
        <img src="../public/img/GocImg.jpg" alt="" />
        <HeaderProfile></HeaderProfile>
        <div className="bodyInfo">
          <LeftComponent></LeftComponent>
          <RightComponent></RightComponent>
        </div>
      </div>
    </>
  )
}

export default App
