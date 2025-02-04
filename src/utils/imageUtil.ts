import { GOOGLE_DRIVE_PREFIX } from "@/constants/constant";

export const convertGoogleImage = (imageId: string) => {
  return GOOGLE_DRIVE_PREFIX + "/" + imageId;
};
