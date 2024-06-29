import React from 'react'

function Kart() {
  return (
  <div>
    <h1  className='text-center mt-3'>Cart</h1>
    <h2  className='text-center mt-3'>Your Products</h2>
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
    </div>
    </div>
    </div>
    </div>
    <button className='btn btn-success d-block m-auto w-50 mb-5'>Buy</button>
</div>



    
  

 
   
  )
}

export default Kart