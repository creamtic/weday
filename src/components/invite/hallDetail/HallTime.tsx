export default function HallTime({ time }: { time: string }) {
  return (
    <div className="flex items-center justify-center text-[1.1rem] text-center py-1 px-4 sm:px-6 md:px-8">{time}</div>
  );
}
