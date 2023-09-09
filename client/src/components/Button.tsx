export const Button = ({ title }: { title: string }) => {
  return (
    <button className="bg-amber-400 rounded-sm px-4 font-semibold text-sm py-1 text-black hover:bg-amber-400 transition-colors m-1">
      {title}
    </button>
  );
};
