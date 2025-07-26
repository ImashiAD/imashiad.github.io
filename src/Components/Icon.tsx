type IconProps = {
  name: string;
  size?: number;
  className?: string;
};

const Icon: React.FC<IconProps> = ({ name, size = 24, className = "" }) => (
  <svg className={`icon ${className}`} width={size} height={size}>
    <use href={`/sprite.svg#${name}`} />
  </svg>
);

export default Icon;
