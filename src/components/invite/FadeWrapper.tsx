// components/FadeWrapper.tsx
import { forwardRef } from "react";

interface FadeWrapperProps {
  children: React.ReactNode;
  moduleRef: React.RefObject<HTMLDivElement>;
}

const FadeWrapper = forwardRef<HTMLDivElement, FadeWrapperProps>(({ children, moduleRef }, ref) => {
  return (
    <div className="fade" ref={moduleRef}>
      {children}
    </div>
  );
});

FadeWrapper.displayName = "FadeWrapper"; // forwardRef 사용 시 필수 설정

export default FadeWrapper;
