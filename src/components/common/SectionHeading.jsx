const SectionHeading = ({
  badge,
  title,
  description,
  center = true,
}) => {
  return (
    <div
      className={`mb-16 ${
        center ? "mx-auto max-w-3xl text-center" : ""
      }`}
    >
      <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
        {badge}
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
};

export default SectionHeading;