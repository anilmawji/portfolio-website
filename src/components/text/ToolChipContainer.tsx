import globalStyles from '../../global.module.css';
import { ToolInfo, isToolInfo } from '../../data/ToolInfo';
import Chip from './Chip';
import { joinClassNames } from '../../utils';

interface Props {
  className?: string;
  chipData: (ToolInfo | string)[];
}

const ToolChipContainer = ({ className, chipData }: Props) => {
  return (
    <div className={joinClassNames(globalStyles.chipContainer, className)}>
    {chipData.map((tag, j) => {
      const isTagATool = isToolInfo(tag);
        return (
          <Chip
            key={j}
            label={isTagATool ? tag.name : tag}
            color={isTagATool ? tag.color : undefined}
          />
        );
    })}
  </div>
  );
}

export default ToolChipContainer;