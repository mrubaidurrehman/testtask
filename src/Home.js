import React from 'react'
import './Home.css'


const Home = () => {
  return (
    <>
        <div className='div1'>
        <img className='logo' src="./pictures/logo-small 1.png" alt="nothing" />
        </div>
        


        <div className='div2'>
         <a href='/'><p  className='topbtn1'> Home</p></a>   
        <a   href='/'> <p className='topbtn1'>Services</p></a>
        <a  href='/'><p className="topbtn1">Classes</p></a>
        <a   href='/'><p className="topbtn1">Restaurant</p></a>
        <a   href='/'><p className="topbtn1">Blog</p></a>
        <a  href='/' ><p className="topbtn1">Shop</p></a>
        <div> <button className='btn'>EN</button></div>
        <div>
            <button className='btn2'><p className='btnp'> SIGN IN</p></button>
        </div>
        
        </div>
        <div className='div3'>
        <img className='pic1' src="./pictures/New Sport World In Vientiane.png" alt="nothing" />

        <img className='pic2' src="./pictures/football_player_PNG85 1.png" alt="nothing" />
        




        </div>
        <h1 className='btnbook'><p className='pbook'>BOOK NOW</p></h1>
        <div>
        <img className='pic3' src="./pictures/Rectangle 71.png" alt="nothing" />
        <h2 className='who'>WHO WE ARE</h2>


        </div>

        
        

        
        
    </>
  )
}

export default Home