"use client";
import React from "react";
import Image from "next/image";

const DetailsImages = ({ imageSrc }) => {
	return (
		<div className="listing-details-img listing-details-slide owl-carousel owl-theme">
			<div className="listing-details-img-item">
				<Image src={imageSrc} alt="Image" width={1744} height={934} />
			</div>
		</div>
	);
};

export default DetailsImages;
