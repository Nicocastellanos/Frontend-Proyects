import Card from './components/Card'
import Header from './components/Header'

function App() {
  return (
   <div className='contenedor'>
    <div className='content'>
      <Header/>
      <Card titulo = "What is Frontend Mentor, and how will it help me?" 
      descripcion = "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."/>

      <Card titulo = "Is Frontend Mentor free?"
      descripcion="Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
      option providing access to a range of projects suitable for all skill levels."/>

      <Card titulo = "Can I use Frontend Mentor projects in my portfolio?" 
      descripcion="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
      way to showcase your skills to potential employers!"/>

      <Card titulo ="How can I get help if I'm stuck on a Frontend Mentor challenge?" 
      descripcion="The best place to get help is inside Frontend Mentor's Discord community. There's a help 
      channel where you can ask questions and seek support from other community members."/>
    </div>
   </div>
  )
}

export default App
