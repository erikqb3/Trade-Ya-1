import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/images/logo_alt.png";
// import whiteLogo from "../../../../public/images/white-logo.png";
import phoneCell from "../../../public/images/icon/phone-call.svg";
import locationPin from "../../../public/images/icon/location-pin.svg";
import emailIco from "../../../public/images/icon/email.svg";
import menuActive from "../../../public/images/menu-active.png";

const Footer = () => {
	return (
		<>
			<div className="footer-area pt-100 pb-70">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-sm-6">
							<div className="single-footer-widget">
								<Link href="/" className="footer-logo">
									<Image
										src={logo}
										width={156}
										height={40}
										className="main-logo"
										alt="logo"
									/>
									{/* <Image
										src={whiteLogo}
										width={156}
										height={40}
										className="white-logo"
										alt="logo"
									/> */}
								</Link>

								<ul className="contact-info">
									<li>
										<Image
											src={phoneCell}
											width="16"
											height="17"
											alt="footer"
										/>
										Call Us:
										<a href="tel:+(323)-750-1234">
											+(323) 750-1234
										</a>
									</li>
									<li>
										<Image
											src={locationPin}
											width="16"
											height="16"
											alt="footer"
										/>
										<span>
											Address: +7011 Vermont Ave, Los
											Angeles,{" "}
											<span className="br">
												<br />
											</span>{" "}
											CA 90044
										</span>
									</li>
									<li>
										<Image
											src={emailIco}
											width="16"
											height="17"
											alt="footer"
										/>
										Mail Us:
										<a href="mailto:hello@teor.com">
											hello@teor.com
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-8">
							<div className="row">
								<div className="col-lg-4 col-sm-6 col-md-4">
									<div className="single-footer-widget ml-55">
										<h3>Popular Categories</h3>

										<ul className="import-link">
											<li>
												<Image
													src={menuActive}
													width={16}
													height={20}
													alt="menuActive"
												/>
												<Link href="/listings/new">
													Add Listing
												</Link>
											</li>
											<li>
												<Image
													src={menuActive}
													width={16}
													height={20}
													alt="menuActive"
												/>
												<Link href="/listings">
													Car
												</Link>
											</li>
											<li>
												<Image
													src={menuActive}
													width={16}
													height={20}
													alt="menuActive"
												/>
												<Link href="/listings">
													Fashion
												</Link>
											</li>
											<li>
												<Image
													src={menuActive}
													width={16}
													height={20}
													alt="menuActive"
												/>
												<Link href="/listings">
													Service
												</Link>
											</li>
											<li>
												<Image
													src={menuActive}
													width={16}
													height={20}
													alt="menuActive"
												/>
												<Link href="/listings">
													Electronics
												</Link>
											</li>
										</ul>
									</div>
								</div>

								<div className="col-lg-4 col-sm-6 col-md-4">
									<div className="single-footer-widget ml-105">
										<h3>Quick Links</h3>

										<ul className="import-link">
											<li>
												<Image
													src={menuActive}
													width={16}
													height={20}
													alt="menuActive"
												/>
												<Link href="/about-us">
													About Us
												</Link>
											</li>
											<li>
												<Image
													src={menuActive}
													width={16}
													height={20}
													alt="menuActive"
												/>
												<Link href="/contact-us">
													Contact Us
												</Link>
											</li>
											<li>
												<Image
													src={menuActive}
													width={16}
													height={20}
													alt="menuActive"
												/>
												<Link href="/faq">Faq</Link>
											</li>
											<li>
												<Image
													src={menuActive}
													width={16}
													height={20}
													alt="menuActive"
												/>
												<Link href="/privacy-policy">
													Privacy Policy
												</Link>
											</li>
											<li>
												<Image
													src={menuActive}
													width={16}
													height={20}
													alt="menuActive"
												/>
												<Link href="/terms-condition">
													Terms & Conditions
												</Link>
											</li>
										</ul>
									</div>
								</div>

								<div className="col-lg-4 col-sm-6 col-md-4">
									<div className="single-footer-widget ml-90">
										<h3>Follow Us On</h3>
										<p>
											Once you have settled on a business,
											learn more about it.
										</p>

										<ul className="social-link">
											<li>
												<a
													href="https://www.facebook.com/"
													target="_blank"
													rel="noopener noreferrer"
												>
													<i className="ri-facebook-fill"></i>
												</a>
											</li>
											<li>
												<a
													href="https://www.instagram.com/"
													target="_blank"
													rel="noopener noreferrer"
												>
													<i className="ri-instagram-line"></i>
												</a>
											</li>
											<li>
												<a
													href="https://www.twitter.com/"
													target="_blank"
													rel="noopener noreferrer"
												>
													<i className="ri-twitter-fill"></i>
												</a>
											</li>
											<li>
												<a
													href="https://www.linkedin.com/"
													rel="noopener noreferrer"
												>
													<i className="ri-linkedin-fill"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="copy-right-area bg-color-fcf1e3">
				<div className="container">
					<div className="copy-right-content">
						<p>
							© <span>Teor</span> is Proudly Owned by{" "}
							<a
								href="https://envytheme.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								EnvyTheme
							</a>
						</p>
					</div>
				</div>
			</div> */}
		</>
	);
};

export default Footer;
