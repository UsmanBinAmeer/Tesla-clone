import React from 'react'
import styled from 'styled-components';
import Section from './Section';


function Home() {
  return (
<Container>
    <Section
    title = " Model S"
    description = "Order Online for Touchless Delivery"
    backgroundImg = "model-x.jpg"
    leftBtnText = "Custom Order"
    rightBtnTesxt = "Existing Inventory"
    />
    <Section
      title = " Model y"
      description = "Order Online for Touchless Delivery"
      backgroundImg = "model-y.jpg"
      leftBtnText = "Custom Order"
      rightBtnTesxt = "Existing Inventory"
    />
    <Section
      title = " Model x"
      description = "Order Online for Touchless Delivery"
      backgroundImg = "model-s.jpg"
      leftBtnText = "Custom Order"
      rightBtnTesxt = "Existing Inventory"
    />
    <Section
      title = " Model 3"
      description = "Order Online for Touchless Delivery"
      backgroundImg = "model-3.jpg"
      leftBtnText = "Custom Order"
      rightBtnTesxt = "Existing Inventory"
    />
    <Section
    title= "Lowest Cost Solar Panel in America"
    description= "Money back guarantee"
    backgroundImg= "solar-panel.jpg"
     leftBtnText = "Custom Order"
      rightBtnTesxt = "Learn More"
    />
     <Section
    title= "Solar for New Roof"
    description= "Solar Roof Cost Less Then a New Roof Plus Solar Panels"
    backgroundImg= "solar-roof.jpg"
     leftBtnText = "Custom Order"
      rightBtnTesxt = "Learn More"
    />
    <Section
    title= "Accessories"
    backgroundImg= "accessories.jpg"
     leftBtnText = "Shop Now"
    />
</Container>
  )
}

export default Home

const Container = styled.div`
height : 100vh ;
`