import React from 'react';
import ProductContainer from '../ProductContainer/ProductContainer';
import CustomHeader from '../Shared/Header/CustomHeader';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  
  return (
    <div className="container-fluid">
      <CustomHeader/>
      <Carousel showArrows={true} autoPlay swipeable={true}>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae minus animi vel eius voluptatum ea necessitatibus libero magni veritatis. Illo, distinctio error nobis, mollitia ex ipsa praesentium assumenda ab eum beatae, temporibus dolore iure. Blanditiis, unde nostrum nisi ipsum similique cum, sunt oftatibus  libero nemo illo facilis dolorem dicta beatae eveniet. Nisi optio sunt odio, eius illum distinctio et aspernatur libero aut perspicdi facere. Sed, eum et repellat blanditiis ducimus obcaecati odio similique repellendus ab possimus explicabo asperiores quisquam! Consequatur, reprehenderit. Aliquam sint cupiditate voluptate! Impedit sit amet nostrum eaque ab dolores reiciendis nobis minus, molestias error earum nesciunt officia, quia dignissimos consequatur.</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit beatae minus animi vel eius voluptatum ea necessitatibus libero magni veritatis. Illo, distinctio error nobis, msitatibus error suscipit, perspiciatis cumque voluptatum beatae, reiciendis dolore eligendi atque impedit dignissimos nulla. Autem blanditiis ducimus, corporis temporibus perferendis velit facilis magnam necessitatibus architecto voluptatibus maiores earum deserunt quasi, iusto tvoluptas. Totam, ipsum optio fuga blanditiis itaque necessitatibus suscipit obcaecati aspernatur, nihil tempora, recusandae accusantium laborum ducimus. Deserunt reiciendis porro nesciunt illum, officiis veniam mollitia, numquam repellendus, iste eligendi facere. Sed, eum et repellat blanditiis ducimus obcaecati odio similique repellendus ab possimus explicabo asperiores quisquam! Consequatur, reprehenderit. Aliquam sint cupiditate voluptate! Impedit sit amet nostrum eaque ab dolores reiciendis nobis minus, molestias error earum nesciunt officia, quia dignissimos consequatur.</div>
      </Carousel>
      <ProductContainer/>
    </div>
  );
};

export default Home;