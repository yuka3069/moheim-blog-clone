import { Link } from "react-router-dom";
function LinkButton({ children }) {
  return (
    <Link
      to="/blog/1"
      className="py-[2rem] text-[10px] uppercase tracking-[0.05em] sm:text-[1.8rem]"
    >
      {children}
    </Link>
  );
}

export default LinkButton;
