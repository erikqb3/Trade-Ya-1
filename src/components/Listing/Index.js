"use client";
import React from "react";
import Link from "next/link";
import DetailsHead from "./DetailsHead";
import RightSidebar from "./RightSidebar";
import FeedbackForm from "./FeedbackForm";
import Reviews from "./Reviews";
import dynamic from "next/dynamic";
const MapWithNoSSR = dynamic(() => import("../Map"), {
	ssr: false,
});
import Features from "./Features";
import SahreAndSave from "./SahreAndSave";
import DetailsImages from "./DetailsImages";

const Index = ({ currentUser, listing, reviews }) => {
	return (
		<div className="listing-details-area ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="listing-details-content">
							<DetailsHead {...listing} />

							<DetailsImages {...listing} />

							<div className="tag-sheare d-flex justify-content-between">
								<ul className="tags-list">
									<li>
										<Link
											href={`/listings/?category=${listing.category}`}
										>
											{listing.category}
										</Link>
									</li>
								</ul>

								<SahreAndSave
									currentUser={currentUser}
									listingId={listing.id}
								/>
							</div>

							<div
								dangerouslySetInnerHTML={{
									__html: listing.description,
								}}
								className="listing-details-box"
							/>

							<Features {...listing} />

							{listing && (
								<MapWithNoSSR
									latitude={listing.latitude}
									longitude={listing.longitude}
								/>
							)}

							<Reviews reviews={reviews} />

							<FeedbackForm
								currentUser={currentUser}
								listingId={listing.id}
							/>
						</div>
					</div>

					<RightSidebar {...listing} />
				</div>
			</div>
		</div>
	);
};

export default Index;
