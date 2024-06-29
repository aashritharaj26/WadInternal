import React from 'react'

function Catalogue() {
  return (
  <div>
    <h1  className='text-center mt-3'>Products</h1>
    <div className='row'>
        <div className='col'>
    <div className="card border-info m-5 mt-0 mb-3 p-2 mt-5 ">
    <div className="card-header">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTly9PywL6aEhF2U78iNAc_z1dZ01AwEdfuXg&s' width="200px"  className='d-block m-auto' />
        </div>
      
    <div className="card-body">
    <h5 className="card-title">Watch</h5>
      
        <p className="card-text">
      Noice color fit Pulse smartwatch
      </p>
      <p className="card-text">Price: Rs. 5000 </p>
      <p className="card-text">Ratings: 5.4</p>
      <button className='btn btn-success'>Add to cart</button>
    </div>
  

    </div>
    
    </div>
    <div className='col'>
    <div className="card border-info m-5 mt-0 mb-3 p-2 mt-5">
    <div className="card-header">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSSZq3RCOSK-sU95mHQ09Lt-iWhvSDhQWV0Q&s' width="200px" className='d-block m-auto' />
        </div>
    <div className="card-body">
    <h5 className="card-title">Redmi Phone</h5>
        <p className="card-text">
      4GB RAM, 128 GB
      </p>
      <p className="card-text">Price: Rs.12000 </p>
      <p className="card-text">Ratings: 5.4</p>
      <button className='btn btn-success'>Add to cart</button>
     </div>
    </div>


    </div>
    <div className='col'>
    <div className="card border-info m-5 mt-0 mb-3 p-2 mt-5">
    <div className="card-header">
        <img src='data:image/jpeg;base64,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' width="200px"  className='d-block m-auto'/>
        </div>
    <div className="card-body">
    <h5 className="card-title">Ink Pen</h5>
        <p className="card-text">
     Writes smooth,
     <br/> 
     <br/>Available in Black,Blue and Red Colors
      </p>
      <p className="card-text">Price: Rs. 100 </p>
      <p className="card-text">Ratings: 5.8</p>
      <button className='btn btn-success'>Add to cart</button>
     </div>

    </div>


    </div>
    
    </div>
    </div>
 
   
  )
}

export default Catalogue