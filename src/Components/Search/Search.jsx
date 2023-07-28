import React from 'react';
import './Search.css';
import { Link } from 'react-router-dom';

const Search = () => {
  return (
    <div>
      <div className="container">
      <div className="search">
       <h4>Search results for “ Educational space ”</h4>
       <div className="row">
    
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
    </div>
  );
}

export default Search;
