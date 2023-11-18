import React from 'react'

function Strength() {
  return (
    <div className="container-fluid p-4" style={{background: 'linear-gradient(to right, #ffefba, #ffffff)'}}>
                <br></br><br></br>
				<div className="section-heading" style={{visibility: 'visible', textAlign: 'left'}}>
					<h4 className="sub-title p-3 text-danger font-weight-bold">Our Strength -----</h4>
					<h2 className='p-3'>Why We Are The Best?</h2>
				</div>
				<div className="row">
					<div className="col-xl-3 col-lg-6 col-md-6 strength-box" style={{visibility: 'visible'}}>
						<div className="strength-icon p-2">
							<img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/all-kinds-of-foods.png" alt="All kinds of Foods" />
						</div>
						<div className="strength-content">
							<h4 className="strength-title">All kinds of Pizzas</h4>
							<p>A Delicious Variety of Pizzas to Satisfy Every Craving and Preference.</p>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6 strength-box" style={{visibility: 'visible'}}>
						<div className="strength-icon p-2">
							<img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/fresh-foods.png" alt="Fresh Foods" />
						</div>
						<div className="strength-content">
							<h4 className="strength-title">Fresh Pizzas</h4>
							<p>An Array of Fresh, Nutrient-Rich Delights to Nourish Your Body and Delight Your Palate.</p>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6 strength-box" style={{visibility: 'visible'}}>
						<div className="strength-icon p-2">
							<img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/best-taste.png" alt="Best Taste" />
						</div>
						<div className="strength-content">
							<h4 className="strength-title">Best Taste</h4>
							<p>Unparalleled Flavor and Culinary Excellence: Experience the Best Taste in Every Bite..</p>
						</div>
					</div>
					<div className="col-xl-3 col-lg-6 col-md-6 strength-box" style={{visibility: 'visible'}}>
						<div className="strength-icon p-2">
							<img src="https://themes.templatescoder.com/pizzon/html/demo/1-2/01-Modern/images/on-time-delivery.png" alt="On Time Delivery" />
						</div>
						<div className="strength-content">
							<h4 className="strength-title">On Time Delivery</h4>
							<p>Prompt and Reliable Delivery Service Ensuring Your Order Arrives Right on Schedule.</p>
						</div>
					</div>
				</div>
                <br></br><br></br>
			</div>
  )
}

export default Strength