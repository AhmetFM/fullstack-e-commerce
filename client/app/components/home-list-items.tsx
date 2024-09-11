import React from "react";
import SingleListItem from "./single-list-item";

const HomeListItems = () => {
  return (
    <div className="mt-10">
      <h3 className="font-semibold text-2xl mx-4 lg:mx-0">Shoes For You !</h3>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-4 lg:mx-0 space-x-2">
        <SingleListItem />
        <SingleListItem />
        <SingleListItem />
        <SingleListItem />
        <SingleListItem />
        <SingleListItem />
        <SingleListItem />
      </div>
    </div>
  );
};

export default HomeListItems;
