import dynamic from "next/dynamic";
import Loader from "@/components/Loader";

export const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => (
    <div className="h-96 flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
});

export const Partners = dynamic(() => import("@/components/Partners"), {
  loading: () => (
    <div className="h-40 bg-card/50 rounded-xl animate-pulse"></div>
  ),
});

export const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-20 bg-background"></div>,
});

export const Features = dynamic(() => import("@/components/Features"), {
  loading: () => (
    <div className="h-[80vh] flex items-center justify-center">
      Loading Features...
    </div>
  ),
});
