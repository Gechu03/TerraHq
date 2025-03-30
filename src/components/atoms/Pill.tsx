export type PillProps = {
  label: string;
  variant: 'primary' | 'secondary';
};

const Pill = ({ label, variant }: PillProps) => {
  return <div className={`pill pill--${variant}`}>{label}</div>;
};

export default Pill;
