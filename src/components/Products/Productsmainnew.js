import {React,useEffect,useState} from 'react';
import {Link} from 'react-router-dom';


import './Productsmainnew.css';
function Productsmainnew(props) {
    const [news,setNews]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/massage")
        .then(response=>{
          return response.json();
        })
        .then(data=>{
          setNews(data);
        });
    },[]);
    return (
       <>
           {news.map((massage)=>(
         <div className="main_new1">
                           <Link to={`/products/main/${massage.id}`} style={{ textDecoration: "none" ,color:"black"}}> 
                            <img className="new_img1"  src={massage.img}alt="img"/>
                            <div className="new_text1"><h2>{massage.name}</h2>{massage.price} 원</div>
                            </Link>  
                            </div>
                            
                            ))}
         </>               
    );
}

export default Productsmainnew;