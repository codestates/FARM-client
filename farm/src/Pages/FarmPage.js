import ReadFarmers from "../Components/ReadFarmers";
import AddCrops from "../Components/AddCrops";
import ReadCrops from "../Components/ReadCrops";

import React from "react";

export default function FarmPage() {
  return (
    <div>
      <ReadFarmers />
      <div className="Farm_Crops_Field">
        <ReadCrops />
        <AddCrops />
      </div>
    </div>
  );
}
