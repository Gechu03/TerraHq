export type ButtonProps = {
  label: string;
  variant: 'primary' | 'secondary';
  as?: string;
};

const Button = ({ as = 'a', label, variant, ...props }: ButtonProps) => {
  const HTMLElement = as;

  return (
    <HTMLElement className={`button button--${variant}`} {...props}>
      {label}
    </HTMLElement>
  );
};

export default Button;
