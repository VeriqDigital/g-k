import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  newTab?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
};

const Button = ({
  children,
  variant = "primary",
  href,
  newTab,
  onClick,
  type = "button",
}: ButtonProps) => {
  const baseClasses =
    "inline-flex cursor-pointer items-center justify-center border-2 px-6 py-3 font-heading text-base font-extrabold uppercase tracking-wide transition-colors focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#666666]";

  const variantClasses = {
    primary:
      "border-(--primary) bg-(--primary) text-white hover:border-(--primary-hover) hover:bg-(--primary-hover)",
    secondary:
      "border-(--accent) bg-transparent text-(--accent) hover:bg-(--accent) hover:text-white",
  };

  if (href) {
    return (
      <Link
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        className={`${baseClasses} ${variantClasses[variant]}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
