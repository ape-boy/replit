interface ChapterTransitionProps {
  title: string;
  subtitle: string;
  icon: string;
  bgColor: string;
  iconColor: string;
  customContent?: React.ReactNode;
}

export default function ChapterTransition({
  title,
  subtitle,
  icon,
  bgColor,
  iconColor,
  customContent
}: ChapterTransitionProps) {
  return (
    <section className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${bgColor}`}>
      <div className="slide-content text-center">
        <div className="mb-8">
          {customContent || (
            <i className={`${icon} text-8xl ${iconColor} opacity-30 float-animation`}></i>
          )}
        </div>
        <h1 className={`text-6xl font-bold ${iconColor} mb-4`}>{title}</h1>
        <p className="text-xl text-gray-600">{subtitle}</p>
      </div>
    </section>
  );
}
