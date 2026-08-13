export const PlantCardSkeleton = () => {
  return (
    <div className="flex gap-3 rounded-lg p-3 bg-white/5">
      <div
        className="w-[88px] h-[88px] shrink-0 rounded-md overflow-hidden"
        style={{
          backgroundImage: [
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 0, transparent 50%)",
            "repeating-linear-gradient(-45deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 0, transparent 50%)",
          ].join(", "),
          backgroundSize: "12px 12px",
          backgroundColor: "rgba(255,255,255,0.02)",
        }}
      ></div>
      <div className="flex flex-col gap-1 justify-center min-w-0"></div>
    </div>
  );
};
