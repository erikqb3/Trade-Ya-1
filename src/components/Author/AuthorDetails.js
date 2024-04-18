"use client";
import React from "react";
import messageImg from "../../../public/images/icon/messages-2.svg";
import callImg from "../../../public/images/icon/call-calling.svg";
import userImg from "../../../public/images/authors/author-1.jpg";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";

const AuthorDetails = ({ user, friendLinks }) => {
	console.log(friendLinks)
	return (
		<div className="author-details-area pt-100">
			<div className="container">
				<div className="row align-items-center align-items-center">
					<div className="col-lg-5">
						<div className="author-details-img mr-15">
							<Image
								src={user?.image ? user.image : userImg}
								alt={user.name}
								width={1185}
								height={990}
							/>
						</div>
					</div>

					<div className="col-lg-7">
						<div className="author-details-content ml-15">
							<div className="d-flex justify-content-between mb-30">
								<div className="author-info">
									<h3>{user.name}</h3>
									<span>
										Member Since{" "}
										{formatDate(user.created_at)}
									</span>
									<p>
										<i className="ri-map-pin-line"></i>
										{user.profile?.address}
									</p>


								</div>

								<div className="contact-info">
									<a
										href="https://www.whatsapp.com/"
										className="default-btn active"
										target="_blank"
										rel="noopener noreferrer"
									>
										<span>
											Chat
										</span>
									</a>
									<div
										className="default-btn"
										
									>
										<span>
											Send Friend Request
										</span>
									</div>
								</div>
							</div>
							<p>{user.profile?.bio}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthorDetails;
