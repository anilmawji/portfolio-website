import globalStyles from '../../global.module.scss';
import { IconMap, IconType } from '../../data/IconData';
import { joinClassNames } from '../../utils';

interface Props {
  className?: string;
  type?: IconType;
  src?: string;
  href?: string;
  alt?: string;
  imgDraggable?: boolean;
}

const Icon = ({ className, type, src, href, alt, imgDraggable }: Props) => {
  const IconWrapper = href ? 'a' : 'div';

  return (
    <IconWrapper
      href={href}
      className={joinClassNames(globalStyles.icon, className)}
      target={href ? '_blank' : ''}
    >
      {type !== undefined && IconMap[type]}
      {src && (
        <img
          src={src}
          alt={alt}
          draggable={imgDraggable}
          onMouseDown={imgDraggable ? (e) => e.preventDefault() : undefined}
        />
      )}
    </IconWrapper>
  );
}

export { Icon, IconType }