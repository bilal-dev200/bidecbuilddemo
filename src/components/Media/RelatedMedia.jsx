import React from "react";
import MediaList from "./MediaList";

const RelatedMedia = () => {
  return (
    <div className="px-8">
      <h1 className="text-center text-3xl mb-6">Related</h1>
      <MediaList size="small" limit={5} /> {/* Only show first 5 cards */}
    </div>
  );
};

export default RelatedMedia;
