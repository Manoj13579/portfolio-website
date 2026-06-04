export default function SkillCard({ name, path }) {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        p-4
        h-36
        rounded-2xl
        border border-slate-700
        bg-transparent
        transition-transform duration-300
        hover:scale-105
      "
    >
      <img
        src={path}
        alt={name}
        className="w-12 h-12 sm:w-14 sm:h-14 mb-3 object-contain"
      />

      <p className="text-white text-center text-sm sm:text-base break-words leading-tight">
        {name}
      </p>
    </div>
  );
}