import React, { useEffect, useState } from 'react';
import './Bundle.css';
import BundleItem from "./BundleItem";
import { bundleGet, findCrop } from "../services/api.service";
import { ApiBundle, ApiCropType } from "../services/api.types";

function Bundle() {

  const [apiBundle, setApiBundle] = useState<ApiBundle>();

  useEffect(() => {
    bundleGet(0).then(data => setApiBundle(data));
  }, []);

  if (!apiBundle) {
    return <div>Loading...</div>;
  }

  const items = apiBundle.bundelItems.map(item =>
    <BundleItem key={item.id} bundleItem={item} />
  );

  return (
    <div className="Bundle">
      <h1>{apiBundle.title}</h1>
      <div>{apiBundle.description}</div>
      <div className="Bundle-label" data-test-id="bundle-label">{apiBundle.label}</div>
      <img
        className="Bundle-image"
        src={findCrop(ApiCropType.LandscapeWide, apiBundle.image.crops)?.path}
        alt="Bundle main"
      />
      <div>
        {items}
      </div>
    </div>
  );
}

export default Bundle;