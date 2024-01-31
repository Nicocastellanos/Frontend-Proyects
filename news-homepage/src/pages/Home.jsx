import React from 'react'
import NewHome from '../components/NewHome'
import Info from '../components/InfoHome'
import NoticeHome from '../components/NoticeHome'
import '../Css/Home.css'

export default function Home() {

  return (
    <div className='principal-box'>
      <div className='new-info'>
        <div className='new'>
        <h1 className='title-new2'>New</h1>
          <NewHome titulo =" Hydrogen VS Electric Cars" text=" Will hydrogen-fueled cars ever catch up to EVs?"/>
          <hr className='hr'/>
          <NewHome titulo ="The Downsides of AI Artistry" text="What are the possible adverse effects of on-demand AI image generation?"/>
          <hr className='hr'/>
          <NewHome titulo ="Is VC Funding Drying Up?" text="Private funding by VC firms is down 50% YOY. We take a look at what that means."/>
        </div>
        <Info/>
      </div>
      <div className='notice-box'>
        <NoticeHome number="01" title="Reviving Retro PCs" text="What happens when old PCs are given modern upgrades?" img ="./src/assets/images/image-retro-pcs.jpg"/>
        <NoticeHome number="02" title="Top 10 Laptops of 2022" text="Our best picks for various needs and budgets." img="./src/assets/images/image-top-laptops.jpg"/>
        <NoticeHome number="03" title=" The Growth of Gaming" text="How the pandemic has sparked fresh opportunities." img="./src/assets/images/image-gaming-growth.jpg"/>
      </div>
    </div>
  )
}
