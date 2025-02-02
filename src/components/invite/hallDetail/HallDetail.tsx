import HallLocation from "./HallLocation";
import DateTime from "./DateTime";
import { formatDate } from "@/utils/dateUtil";

export default function HallDetail({ date, location: location }: { date: Date; location: string }) {
  return (
    <div className="flex-row items-center justify-center py-4 px-4 sm:px-6 md:px-8">
      <DateTime dateTime={formatDate(date)} />
      <HallLocation location={location} />
    </div>
  );
}
