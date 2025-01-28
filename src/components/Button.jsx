export const Button = ({ children }) => {
  return (
    <button className="w-64 text-xl font-medium bg-color02Light hover:bg-white rounded-lg px-5 py-2.5">
      {children}
    </button>
  );
};
