import { ApiBundle, ApiCropType, ApiImageCrop } from "./api.types";

export async function bundleGet(id: number): Promise<ApiBundle> {
  // Prod code should have host as param in configs file
  const response = await fetch('http://localhost:3000/bundle-api.json');
  return response.json();
}

export function findCrop(typeToFind: ApiCropType, crops: ApiImageCrop[])
  : ApiImageCrop | undefined {
  return crops.find(crop => crop.type === typeToFind);
}
