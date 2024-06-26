import './Cmain_map.css';
import {React,useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
 import loone from '../img/loone.png';

const Cmain_map=()=>{
   const [name,setName]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/names")
        .then(response=>{
          return response.json();
        })
        .then(data=>{
          setName(data);
        });
    },[]);
    return  (
      <>
      {name.map(names=>(
      <div className="crud_first">
        <h3 className="content_c">{names.title}</h3>
        <div className="content_thumbnail">
          <img src={loone} alt="content_thumbnail" />
        </div>
        <div className="crud_title">{names.body}</div>
        <div className="crud_writer">
          작성자 : {names.writer}
          <button className="btn_view_post"><Link to={`/Community/${names.id}`} style={{ textDecoration: "none" ,color:"black"}}>더보기 </Link></button>
        </div>
      </div>
       ))}
       </>
    );
}

export default Cmain_map;
