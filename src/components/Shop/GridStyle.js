import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils/formatDate";
import { formattedPrice } from "@/utils/formattedPrice";
import HeartButton from "../HeartButton";

const GridStyle = ({
	id,
	title,
	slug,
	imageSrc,
	user,
	location_value,
	category,
	price,
	created_at,
	currentUser,
}) => {
	return (
		<div className="col-lg-4 col-md-6">
			<div className="single-featured box-shadow">
				<Link href={`/listing/${id}/${slug}`} className="feature-img">
					<Image
						src={imageSrc}
						alt={title}
						style={{ objectFit: "cover", objectPosition: "center" }}
						width={860}
						height={590}
					/>
				</Link>

				<div className="featured-content">
					<div className="d-flex justify-content-between align-items-center">
						<h3>
							<Link href={`/listing/${id}/${slug}`}>{title}</Link>
						</h3>
						<HeartButton currentUser={currentUser} listingId={id} />
					</div>

					<ul className="featured-info">
						<li>
							<i className="ri-map-pin-line"></i>
							{location_value}
						</li>
						{/* <li>
							<i className="ri-time-line"></i>
							{formatDate(created_at)}
						</li>
						<li>
							<i className="ri-user-line"></i>
							{user.name}
						</li> */}
					</ul>

					<ul className="pricing d-flex justify-content-between align-items-center">
						<li>
							<Link href="search-result.html" className="tag">
								{category}
							</Link>
						</li>
						<li>
							<span className="price">
								{formattedPrice(price)}
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default GridStyle;
