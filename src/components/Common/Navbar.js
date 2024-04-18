"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../public/images/logo.png";
import whiteLogo from "../../../public/images/white-logo.png";
import plushSvg from "../../../public/images/icon/plush.svg";
import UserMenu from "./UserMenu";

const Navbar = ({ currentUser }) => {
  const currentRoute = usePathname();

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
				<div className="main-nav">
					<div className="container-fluid">
						<nav className="navbar navbar-expand-lg navbar-light">
							<Link className="navbar-brand" href="/">
								<Image
									src={logo}
									width={120}
									height={40}
									className="main-logo"
									alt="logo"
								/> 
							</Link>

							{/* Toggle navigation */}
							<button
								onClick={toggleNavbar}
								className={classTwo}
								type="button"
								data-toggle="collapse"
								data-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="icon-bar top-bar"></span>
								<span className="icon-bar middle-bar"></span>
								<span className="icon-bar bottom-bar"></span>
							</button>

							<div className={classOne} id="navbarSupportedContent">
								<ul className="navbar-nav me-auto">
									<li className="nav-item">
										<Link
											href="/"
											className={`nav-link ${
												currentRoute === "/" ? "active" : "non-active"
											}`}
										>
											Home
										</Link>
									</li>

									<li className="nav-item">
										<Link
											href="/listings"
											className={`nav-link ${
												currentRoute === "/listings" ? "active" : "non-active"
											}`}
										>
											Listing
										</Link>
									</li>
									<li className="nav-item">
										<Link
											href="/about-us"
											className={`nav-link ${
												currentRoute === "/about-us" ? "active" : "non-active"
											}`}
										>
											About Us
										</Link>
									</li>
									<li className="nav-item">
										<Link
											href="/faq"
											className={`nav-link ${
												currentRoute === "/faq" ? "active" : "non-active"
											}`}
										>
											Faq
										</Link>
									</li>
									<li className="nav-item">
										<Link
											href="/blog"
											className={`nav-link ${
												currentRoute === "/blog" ? "active" : "non-active"
											}`}
										>
											Blog
										</Link>
									</li>

									<li className="nav-item">
										<Link
											href="/contact-us"
											className={`nav-link ${
												currentRoute === "/contact-us" ? "active" : "non-active"
											}`}
										>
											Contact Us
										</Link>
									</li>
								</ul>

								<div className="others-options">
									<ul>
										<UserMenu currentUser={currentUser} />
										<li>
											<Link href="/listings/new" className="default-btn">
												<span>
													Add Listing
													<Image
														src={plushSvg}
														width={18}
														height={18}
														alt="plush"
													/>
												</span>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</nav>
					</div>
        </div>

        {/* <div className="others-option-for-responsive">
				<div className="container">
					<div className="dot-menu">
						<div className="inner">
							<div className="circle circle-one"></div>
							<div className="circle circle-two"></div>
							<div className="circle circle-three"></div>
						</div>
					</div>

					<div className="container">
						<div className="option-inner">
							<div className="others-options justify-content-center">
								<ul>
									<UserMenu currentUser={currentUser} />
									<li>
										<Link
											href="/dashboard/listings/add-listing"
											className="default-btn"
										>
											<span>
												Add Listing
												<Image
													src={plushSvg}
													width={18}
													height={18}
													alt="plush"
												/>
											</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div> */}
      </div>
    </>
  );
};

export default Navbar;
