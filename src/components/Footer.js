import React from 'react'

function Footer() {
  return (
    <footer className="main-footer p-5">
            <div className="auto-container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 pr-0">
                        <div className="footer__title">
                            <div className="footer__title__icon">
                                <img src="	https://html.tonatheme.com/2023/earls/assets/images/icons/map.png" alt=""/>
                                <span className="sub____title">Address</span>
                            </div>
                            <div className="footer___title__text">
                                <p>
                                    Street:  Kirstinharju 14, ESPOO, <br/> Finland 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 pl-0">
                        <div className="footer__title">
                            <div className="footer__title__icon">
                                <img src="https://html.tonatheme.com/2023/earls/assets/images/icons/phone.png" alt=""/>
                                <span className="sub____title">Contact Us</span>
                            </div>
                            <div className="footer___title__text">
                                <p>
                                   <a href="tell:23456788">(044) 2763 433</a> 
                                   <br/>
                                    Open: 09:00 am – 01:00 pm 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer