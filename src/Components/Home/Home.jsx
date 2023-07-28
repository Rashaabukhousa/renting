
import React,{ useState , useEffect } from 'react';
import './Home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home = () => {
// {
  {/*let[topCoWorking,setTopCoWorking]=useState([]);
let prefix = "";
async function getSpaceItem(){
let {data} = await axios.get("");
setTopCoWorking(data.results);
}
useEffect(() =>{
getSpaceItem();
},[])}*/}
  return (
<div>
{/*start section Top Co-working*/}
<div className="container top-co">
<h4>Top Co-working Spaces in London</h4>
<div className='boxing '>
<div className="row">
{/*{topCoWorking.map((place,index)=>*/}
{/*<div className="col-md-4 col-xs-12" key={index}>*/}
<div className="col-md-4 col-xs-12">
<div className="box">
{/*<img className='img-fluid rounded' src={prefix+place.poster_path} alt="" />*/}
<img className='img-fluid rounded' src="assets/img/office.png" alt="" />
<div className="description pt-3">
{/*<h6>{place.type}</h6>*/}
<h6>Educational space</h6>
{/*<p>{place.title}</p>*/}
<p>Gaza, Al Rimal neighborhood</p>
<p className='star'>
<p><span><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><p className='review'>(13 reviews)</p></span>
</p>
<Link to="/RentSpacing">
<button type="button" className="btn btn-primary">Rent Now</button> 
</Link>
</p>
</div>
</div>
</div>

<div className="col-md-4 col-xs-12">
<div className="box">
<img className='img-fluid rounded' src="assets/img/office.png" alt="" />
<div className="description pt-3">
<h6>Co-working Space</h6>
<p>London, United Kingdom</p>
<p className='star'>
<p><span><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><p className='review'>(13 reviews)</p></span></p>
<Link to="/RentSpacing">
<button type="button" className="btn btn-primary">Rent Now</button> 
</Link></p>
</div>
</div>
</div>
<div className="col-md-4 col-xs-12">
<div className="box">
<img className='img-fluid rounded' src="assets/img/office.png" alt="" />
<div className="description pt-3">
<h6>Events space</h6>
<p>Gaza, Al Rimal neighborhood</p>
<p className='star'>
<p><span><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><p className='review'>(13 reviews)</p></span></p>
<Link to="/RentSpacing">
<button type="button" className="btn btn-primary">Rent Now</button> 
</Link></p>
</div>
</div>
</div>

</div>
</div>
</div>
{/*end section Top Co-working*/}
{/*start section Nearby Co-working*/}
<div className="container nearby my-7">
<h4>Nearby Co-working</h4>
<div className='boxing '>
<div className="row">
<div className="col-md-4 col-xs-12">
<div className="box">
<img className='img-fluid rounded' src="assets/img/office.png" alt="" />
<div className="description pt-3">
<h6>Room</h6>
<p>Gaza, Al Nasser street</p>
<p className='star'>
<p><span><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i>
<p className='review'>(13 reviews)</p>
</span></p>
<Link to="/RentSpacing">
<button type="button" className="btn btn-primary">Rent Now</button> 
</Link></p>
</div>
</div>
</div>
<div className="col-md-4 col-xs-12">
<div className="box">
<img className='img-fluid rounded' src="assets/img/office.png" alt="" />
<div className="description pt-3">
<h6>Private office</h6>
<p>Gaza, Al Nasser street</p>
<p className='star'>
<p><span><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i>
<p className='review'>(13 reviews)</p>
</span></p>
<Link to="/RentSpacing">
<button type="button" className="btn btn-primary">Rent Now</button> 
</Link></p>
</div>
</div>
</div>
<div className="col-md-4 col-xs-12">
<div className="box">
<img className='img-fluid rounded' src="assets/img/office.png" alt="" />
<div className="description pt-3">
<h6>Co-working Space</h6>
<p>Gaza, Al Nasser street</p>
<p className='star'>
<p><span><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i>
<p className='review'>(13 reviews)</p>
</span></p>
<Link to="/RentSpacing">
<button type="button" className="btn btn-primary">Rent Now</button> 
</Link></p>
</div>
</div>
</div>


</div>
</div>
</div>
{/*end section Nearby Co-working*/}
{/*start section Newest Flexible Office Spaces*/}
<div className="container nearby my-7">
<h4>Newest Flexible Office Spaces</h4>
<div className='boxing '>
<div className="row">
<div className="col-md-4 col-xs-12">
<div className="box">
<img className='img-fluid rounded' src="assets/img/office.png" alt="" />
<div className="description pt-3">
<h6>Room</h6>
<p>Gaza, Al Nasser street</p>
<p className='star'>
<p><span><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i>
<p className='review'>(13 reviews)</p>
</span></p>
<Link to="/RentSpacing">
<button type="button" className="btn btn-primary">Rent Now</button> 
</Link></p>
</div>
</div>
</div>
<div className="col-md-4 col-xs-12">
<div className="box">
<img className='img-fluid rounded' src="assets/img/office.png" alt="" />
<div className="description pt-3">
<h6>Private office</h6>
<p>Gaza, Al Nasser street</p>
<p className='star'>
<p><span><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i>
<p className='review'>(13 reviews)</p>
</span></p>
<Link to="/RentSpacing">
<button type="button" className="btn btn-primary">Rent Now</button> 
</Link></p>
</div>
</div>
</div><div className="col-md-4 col-xs-12">
<div className="box">
<img className='img-fluid rounded' src="assets/img/office.png" alt="" />
<div className="description pt-3">
<h6>Co-working Space</h6>
<p>Gaza, Al Nasser street</p>
<p className='star'>
<p><span><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i>
<p className='review'>(13 reviews)</p>
</span></p>
<Link to="/RentSpacing">
<button type="button" className="btn btn-primary">Rent Now</button> 
</Link></p>
</div>
</div>
</div>


</div>
</div>
</div>
{/*end section Newest Flexible Office Spaces*/}
</div>
  
    

  );
}

export default Home;
