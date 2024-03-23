import React from 'react';

export const Page1 = () => {
  return (
    <div>
    <header>
      <div className="left">
        <a href="/"><i className="fas fa-building"></i> Business</a>
        <a href="/dashboard"><i className="fas fa-user"></i> Personal(dashboard)</a>
      </div>

      <div className="right">
        <a href="/"><i className="fas fa-phone-alt"></i> 045963828</a>
        <a id="sign" href="/login"><i className="fas fa-sign-in-alt"></i> Signup/Login</a>
      </div>
    </header>

    <nav>
      <div className="left-nav">
        <a href="/">
          <img src="imgs/e-banking-favicon-black.png" alt="logo" width="300px" height="200px" />
        </a>
      </div>
      <div className="middle-nav">
      <ul>
          <li>Home</li>
          <li>Loans</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Pages</li>
          <li>Blog</li>
      </ul>
  </div>

  <div className="right-nav">
      <ul>
          <li id="ap">Apply Now</li>
      </ul>
  </div>

    </nav>
     
<div className="container">

<div className="desc">
  <h3><i className="fas fa-globe"></i> Welcome to E-Banking</h3>


  <h1 >Stay in Control Your <br  /><span className="highlight">Finances</span> With E-Banking</h1>
  <p>pershkrim</p>

  <a  href="/">Create Account</a>
</div>
</div>



<div className="row justify-content-between">
<div className="col">
  <div className="card" style={{ width: '18rem', fontSize: '100px' }}>
      <a style={{ textAlign: 'center', color: 'red' }} href="/"><i className="fas fa-exchange-alt"></i></a>

      <div className="card-body">
          <p className="card-text">Money Transfer</p>
      </div>
  </div>
</div>

<div className="col">
  <div className="card" style={{ width: '18rem', fontSize: '100px' }}>
      <a style={{ textAlign: 'center', color: 'red' }} href="/"><i className="fas fa-money-bill-alt"></i></a>
      <div className="card-body">
          <p className="card-text">Withdraw</p>
      </div>
  </div>
</div>

<div className="col">
  <div className="card" style={{ width: '18rem', fontSize: '100px' }}>
      <a style={{ textAlign: 'center', color: 'red' }} href="/"><i className="fas fa-university"></i></a>
      <div className="card-body">
          <p className="card-text">Bank Deposit</p>
      </div>
  </div>
</div>

<div className="col">
  <div className="card" style={{ width: '18rem', fontSize: '100px' }}>
      <a style={{ textAlign: 'center', color: 'red' }} href="/"><i className="fas fa-credit-card"></i></a>
      <div className="card-body">
          <p className="card-text">Online Payment</p>
      </div>
  </div>
</div>
<section className="py-3 py-md-5 py-xl-8">
  <div className="container">
    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
      <div className="col-12 col-lg-6 col-xl-5">
        <img className="img-fluid rounded"  src="imgs/11.jfif" alt="foto" />

      </div>
      <div className="col-12 col-lg-6 col-xl-7">
        <div className="row justify-content-xl-center">
          <div className="col-12 col-xl-11">
            <h2 className="h1 mb-3">Who Are We?</h2>
            <p className="lead fs-4 text-secondary mb-3">We help people to build incredible brands and superior products. Our perspective is to furnish outstanding captivating services.</p>
            <p className="mb-5">Nullam gravida orci ac luctus molestie. Fusce finibus congue erat, non aliquam magna tincidunt at. Aenean lacinia arcu ex, sed pharetra nibh porta a. Curabitur vel consequat nibh, ac interdum nisl. Nunc pulvinar nec massa vitae sollicitudin.</p>
            <div className="row gy-4 gy-md-0 gx-xxl-5X">
              <div className="col-12 col-md-6">
                <div className="d-flex">
                  <div className="me-4 text-primary">
                      
                  </div>
                  <div>
                    <h4 className="mb-3">Versatile Brand</h4>
                    <p className="text-secondary mb-0">We are crafting a digital method that subsists life across all mediums.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="d-flex">
                  <div className="me-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                      <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-3">Digital Agency</h4>
                    <p className="text-secondary mb-0">We believe in innovation by merging primary with elaborate ideas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="container">
  <div className="row justify-content-center">
      <div className="col-12">
          <div className="section-title text-center mb-4 pb-2">
              <h4 className="title mb-4">Our Features</h4>
              <p className="text-muted para-desc mx-auto mb-0">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.</p>
          </div>
      </div>
</div>

  <div className="row">
      <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
          <div className="card service-wrapper rounded border-0 shadow p-4">
              <div className="icon text-center text-custom h1 shadow rounded bg-white">
                  <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="content mt-4">
                  <h5 className="title">Mobile Banking </h5>
                  <p className="text-muted mt-3 mb-0">It is </p>
                  <div className="mt-3">
                      <a href="javascript:void(0)" className="text-custom">Read More <i className="mdi mdi-chevron-right"></i></a>
                  </div>
              </div>
              <div className="big-icon h1 text-custom">
              </div>
          </div>
      </div>

      <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
          <div className="card service-wrapper rounded border-0 shadow p-4">
              <div className="icon text-center text-custom h1 shadow rounded bg-white">
                  <i className="fas fa-desktop"></i>
              </div>
              <div className="content mt-4">
                  <h5 className="title">Online Business</h5>
                  <p className="text-muted mt-3 mb-0">It is </p>
                  <div className="mt-3">
                      <a href="javascript:void(0)" className="text-custom">Read More <i className="mdi mdi-chevron-right"></i></a>
                  </div>
              </div>
              <div className="big-icon h1 text-custom">
              </div>
          </div>
      </div>
      
      <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
          <div className="card service-wrapper rounded border-0 shadow p-4">
              <div className="icon text-center text-custom h1 shadow rounded bg-white">
                  <i className="fas fa-home"></i>
              </div>
              <div className="content mt-4">
                  <h5 className="title">Home Loan</h5>
                  <p className="text-muted mt-3 mb-0">It is </p>
                  <div className="mt-3">
                      <a href="javascript:void(0)" className="text-custom">Read More <i className="mdi mdi-chevron-right"></i></a>
                  </div>
              </div>
              <div className="big-icon h1 text-custom">
              </div>
          </div>
      </div>
      
      <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
          <div className="card service-wrapper rounded border-0 shadow p-4">
              <div className="icon text-center text-custom h1 shadow rounded bg-white">
                  <i className="fab fa-cc-mastercard"></i>
              </div>
              <div className="content mt-4">
                  <h5 className="title">Your mastercard</h5>
                  <p className="text-muted mt-3 mb-0">It is </p>
                  <div className="mt-3">
                      <a href="javascript:void(0)" className="text-custom">Read More <i className="mdi mdi-chevron-right"></i></a>
                  </div>
              </div>
              <div className="big-icon h1 text-custom">
              </div>
          </div>
      </div>
      
      <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
          <div className="card service-wrapper rounded border-0 shadow p-4">
              <div className="icon text-center text-custom h1 shadow rounded bg-white">
                  <i className="fas fa-exchange-alt"></i>
              </div>
              <div className="content mt-4">
                  <h5 className="title">Money Exchange</h5>
                  <p className="text-muted mt-3 mb-0">It is </p>
                  <div className="mt-3">
                      <a href="javascript:void(0)" className="text-custom">Read More <i className="mdi mdi-chevron-right"></i></a>
                  </div>
              </div>
              <div className="big-icon h1 text-custom">
              </div>
          </div>
      </div>
      
      <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
          <div className="card service-wrapper rounded border-0 shadow p-4">
              <div className="icon text-center text-custom h1 shadow rounded bg-white">
                  <i className="fas fa-hands-helping"></i>
              </div>
              <div className="content mt-4">
                  <h5 className="title">Support 24/7</h5>
                  <p className="text-muted mt-3 mb-0">It is </p>
                  <div className="mt-3">
                      <a href="javascript:void(0)" className="text-custom">Read More <i className="mdi mdi-chevron-right"></i></a>
                  </div>
              </div>
              <div className="big-icon h1 text-custom">
              </div>
          </div>
      </div>
  </div>
  </div>






</div>  


    
    


  </div>

  );
}


