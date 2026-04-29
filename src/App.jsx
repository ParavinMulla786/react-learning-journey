import './App.css'
import Header from './components/Header'
import Button from './components/Button'
import Profile from './components/Profile'

import profileImg from './assets/profileimg1.png'
import profileImg2 from './assets/profileimg2.png'
import image from './assets/image.png'
import './components/Button.css'

import './components/Profile.css'
import './components/Header.css'

function App() {
  return (
    <div className='container'>

      <div className='header'>
        <Header 
          title="Users Information" 
          subtitle="Manage and view all registered users"
        />
      </div>

      <div className='button'>
        <Button btn="Login"/>
        <Button btn="SignUp"/>
        <Button btn="See All Users"/>
        <Button btn="Contact Us"/>
        <Button btn="Logout"/>
      </div>

      <div className='profile-card'>
        <h2>Users</h2>

        <div className='profile-cardu'>
          <Profile 
            name="Paravin"
            email="paravinmulla2004@gmail.com"
            cNum="9890245341"
            img={profileImg}
          />
        </div>

        <div className='profile-cardu'>
          <Profile 
            name="ABC"
            email="abc123@gmail.com"
            cNum="1234567890"
            img={profileImg2}
          />
        </div>

        <div className='profile-cardu'>
          <Profile 
            name="XYZ"
            email="xyz098@gmail.com"
            cNum="0987654321"
            img={image}
          />
        </div>

      </div>

    </div>
  )
}

export default App