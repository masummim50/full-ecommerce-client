import React from 'react';
import FooterColumn from './FooterColumn/FooterColumn';

const Footer = () => {
  const noNamed = [
    {name: "Urgent service" , link: "/"},
    {name: "Get Update" , link: "/"},
    {name: "Fast delivery" , link: "/"}
]
const ourAddress = [
    {name: "New York - 101010 Hudson" , link: "/"},
    {name: "Yards" , link: "/"},
   
]
const services = [
    {name: "Touch up" , link: "/"},
    {name: "Retouching design" , link: "/"},
    {name: "Revisions" , link: "/"},
    {name: "Revisions" , link: "/"},
    {name: "Revisions" , link: "/"}
]
const upcoming = [
    {name: "Sketch Designs" , link: "/"},
    {name: "Photo retouching" , link: "/"},
    {name: "Photo recreating" , link: "/"},
    {name: "Product Design" , link: "/"}
]
  return (
    <footer className="mt-5">
      <div className="container-fluid bg-dark py-5">
        <div className="row">
          <FooterColumn menuTitle={''} menuItems = {noNamed}></FooterColumn>
          <FooterColumn menuTitle={'Services'} menuItems={services}></FooterColumn>
          <FooterColumn menuTitle={'Upcoming'} menuItems={upcoming}></FooterColumn>
          <FooterColumn menuTitle={'Our Addresses'} menuItems={ourAddress}></FooterColumn>
        </div>
      </div>
    </footer>
  );
};

export default Footer;