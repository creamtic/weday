import HallLocation from "./HallLocation";
import HallTime from "./HallTime";
import { formatDate } from "@/utils/dateUtil";
import Title from "@/components/common/message/Title";
import RoundedImage from "@/components/common/image/RoundedImage";
import { IMAGE_HALL_DETAIL, WEDDING_DATE } from "@/constants/constant";
import { convertGoogleImage } from "@/utils/imageUtil";

export default function HallDetail() {
  const date = WEDDING_DATE;
  const location = "호텔수성 수성스퀘어 피오니홀";

  return (
    <div className="flex flex-col items-center justify-center py-4 px-4 sm:px-6 md:px-8">
      <Title message={"예식 안내"} />
      <HallTime time={formatDate(date)} />
      <HallLocation location={location} />
      <RoundedImage imageUrl={convertGoogleImage(IMAGE_HALL_DETAIL)} />
    </div>
  );
}
