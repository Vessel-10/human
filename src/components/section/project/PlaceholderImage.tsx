import { categoryStyles, accentBg, ProjectCategory } from "@/data/projects";

export default function PlaceholderImage({
  category,
  className = "",
  iconSize = 28,
}: {
  category: ProjectCategory;
  className?: string;
  iconSize?: number;
}) {
  const { icon: Icon, accent } = categoryStyles[category];

  return (
    <div
      className={`flex items-center justify-center ${accentBg[accent]} ${className}`}
    >
      <Icon className="text-paper/90" size={iconSize} strokeWidth={1.5} />
    </div>
  );
}