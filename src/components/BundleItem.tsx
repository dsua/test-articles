import React from 'react';
import './BundleItem.css';
import { ApiBundleItem, ApiCropType } from "../services/api.types";
import { findCrop } from "../services/api.service";

function BundleItem({bundleItem}: BundleItemProps) {
  return (
    <div className="BundleItem" data-test-id={'BundleItem-' + bundleItem.id}>
      <a href={bundleItem.urlAlias}>
        <img
          className="BundleItem-img"
          src={
            findCrop(ApiCropType.SquareSmall, bundleItem.afbeelding.crops)?.path
          }
          alt="Bundle item main"
        />
      </a>
      <div className="BundleItem-textBox">
        <a className="BundleItem-a" href={bundleItem.urlAlias}>
          <h2 className="BundleItem-title">{bundleItem.titel}</h2>
        </a>
        <div>{bundleItem.lead}</div>
        <div className="BundleItem-createdDate">
          {bundleItem.aangemaaktDatum.formatted}
        </div>
      </div>
    </div>
  );
}

export type BundleItemProps = {
  bundleItem: ApiBundleItem;
}

export default BundleItem;