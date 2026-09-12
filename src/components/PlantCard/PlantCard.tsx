type PlantCardProps = {
  commonName: string;
  scientificName: string;
  imageUrl?: string;
};

export const PlantCard = ({
  commonName,
  scientificName,
  imageUrl,
}: PlantCardProps) => {
  return (
    <div className="flex gap-3 rounded-lg p-3 bg-white/5">
      <div
        className="w-22 h-22 shrink-0 rounded-md overflow-hidden"
        style={
          !imageUrl
            ? {
                backgroundImage: [
                  "repeating-linear-gradient(45deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 0, transparent 50%)",
                  "repeating-linear-gradient(-45deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 0, transparent 50%)",
                ].join(", "),
                backgroundSize: "12px 12px",
                backgroundColor: "rgba(255,255,255,0.02)",
              }
            : undefined
        }
      >
        {imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={commonName}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="flex flex-col gap-1 justify-center min-w-0">
        <span className="font-semibold text-foreground leading-tight">
          {commonName}
        </span>
        <span className="text-sm italic text-muted leading-snug">
          {scientificName}
        </span>
      </div>
    </div>
  );
};
