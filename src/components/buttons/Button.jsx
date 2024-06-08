export const PillButton = ({ children, onClick, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`text-[24px] py-[17px] px-5 text-primary border-2 border-primary rounded-full flex items-center justify-center gap-2 ${className}`}
    >
      {children}
    </button>
  );
};
