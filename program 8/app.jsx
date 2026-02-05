import React, { useState } from 'react'
function Tabcomponent() {
  const [activeTab,setactiveTab]=useState("Home")
  return (
    <div style={styles.Container}>
      <h2>Tab component</h2>
      <div style={styles.tabContainer}>
        
        <button style={activeTab === "Home"? styles.activeBtn:styles.Btn}
         onClick={()=>setactiveTab("Home")}>Home</button>
        <button style={activeTab === "About"? styles.activeBtn:styles.Btn}
         onClick={()=>setactiveTab("About")}>About</button>
        <button style={activeTab === "contact"? styles.activeBtn:styles.Btn}
         onClick={()=>setactiveTab("contact")}>contact</button>
        </div>
        <div style={styles.contentBox}>{
          activeTab === "Home" && (
            <p>This is home page</p>
          )}
          {
            activeTab === "About" && (
              <p>Hai About page i,m reactjs</p>
          )}
          {
          activeTab === "contact" && (
            <p>contactus : hgddghg</p>
          )}
        </div>  
        </div>
  )
}
const styles={
  Container:{
    minHeight:"100vh",
    background:"Blue",
    textAlign:"center"
  },
  tabContainer:{
    padding:"20px"
  },
  activeBtn:{
    background:"green"
  },
  btn:{
     background:"white"
  },
  contentBox:{
    height:"100px",
    width:"200px",
    border:"1px solid",
    borderRadius:"10px",
    marginLeft:"700px"
  }

}
export default Tabcomponent
