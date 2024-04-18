"use client";
import React, { useState } from "react";
import CategorySearch from "./CategorySearch";
import PaginationBar from "./PaginationBar";
import GridStyle from "./GridStyle";
import ListStyle from "./ListStyle";

const Index = ({ currentUser, listings, totalPages, searchParams }) => {
  const [listStyle, setListStyle] = useState("grid");

  return (
    <div className="featured-area for-dark-mode ptb-100">
      <div className="container">
        <div className="section-title-wrap for-mobile d-flex justify-content-between align-items-center">
          <div className="section-title left-title">
            <p>
              <span>{listings.length}</span> Results Found
            </p>
          </div>

          <CategorySearch listStyle={listStyle} onStyle={setListStyle} />
        </div>
      </div>

      <div className="container">
        <div className="tab-content">
          <div className="tab-pane fade show active">
            <div className="row">
              {listStyle === "grid" ? (
                listings.length > 0 ? (
                  listings.map((list) => (
                    <GridStyle
                      currentUser={currentUser}
                      key={list.id}
                      {...list}
                    />
                  ))
                ) : (
                  <div className="col-lg-12">
                    <div className="border p-4 text-center">Empty</div>
                  </div>
                )
              ) : listings.length > 0 ? (
                listings.map((list) => (
                  <ListStyle
                    currentUser={currentUser}
                    key={list.id}
                    {...list}
                  />
                ))
              ) : (
                <div className="col-lg-12">
                  <div className="border p-4 text-center">Empty</div>
                </div>
              )}
              {totalPages > 1 && (
                <PaginationBar
                  totalPages={totalPages}
                  searchParams={searchParams}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
