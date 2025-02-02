import HallLocation from "./HallLocation";
import HallTime from "./HallTime";
import { formatDate } from "@/utils/dateUtil";
import Title from "@/components/common/message/Title";
import RoundedImage from "@/components/common/image/RoundedImage";

export default function HallDetail() {
  const date = new Date(2025, 5, 17, 12, 50);
  const location = "호텔수성 피오니홀";

  return (
    <div className="flex flex-col items-center justify-center py-4 px-4 sm:px-6 md:px-8">
      <Title message={"예식 안내"} />
      <HallTime time={formatDate(date)} />
      <HallLocation location={location} />
      <RoundedImage imageUrl="/hallDetail/1.jpg" />
    </div>
  );
}
