export default function HallLocation({ location }: { location: string }) {
  return (
    <div className="flex items-center justify-center text-sm text-center px-4 sm:px-6 md:px-8 pb-5">{location}</div>
  );
}
