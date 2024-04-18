"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDateWithMonth } from "@/utils/formatDate";
import HeartButton from "@/components/HeartButton";

const ListingItem = ({
	cUser,
	id,
	title,
	slug,
	imageSrc,
	user,
	created_at,
	category,
	description,
	features,
	price, 
	quantity,
	tradeOffers,
	onDelete,
	onEdit,
	internalChange,
	view
}
) => {
	// console.log(title);
	return (
		<div className="col-md-6 col-xl-4 mb-4">
			<div className="db-listing-card card">
				<Image
					src={imageSrc}
					className="card-img-top"
					alt="Card Image"
					width={300}
					height={300}
				/>
				<div className="card-body">
					<h6 className="card-title">{title}</h6>

					<ul className="fs-14">
						{
							(view == "Liked") ?
							<li>Author: {user.name}</li>:
							<></>						
						}
						<li>Date: {formatDateWithMonth(created_at)}</li>
						<li>Category: {category}</li>
						{
							(view == "Posted") ?
							<li>Trade Offers: {tradeOffers}</li>:
							<></>
						}
					</ul>
							<Link
								href={`/listing/${id}/${slug}`}
								className="btn btn-primary btn-sm"
							>
								View Details
							</Link>
					{
							(view == "Posted") ?
							<>
								<button
									className="btn btn-primary btn-sm"
									onClick={(e) => {
										console.log(title, e.target.innerHTML);
										internalChange();
										onEdit()
										// onEdit(
										// 	{
										// 		title:title,
										// 		description:description,
										// 		imageSrc:imageSrc,
										// 		category:category,
										// 		features:features
										// 	}
										// )
									}}
									>
									Edit
								</button>
								<button
									className="btn btn-danger btn-delete btn-sm"
									onClick={onDelete}
								>
									Delete
								</button>
							</>:
							<HeartButton currentUser={cUser} listingId={id} />
						}
				</div>
			</div>
		</div>
	);
};

export default ListingItem;
