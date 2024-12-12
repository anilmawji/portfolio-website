import globalStyles from '../../global.module.scss';
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
      return (
        // If the tag is a tool, give it a custom color, otherwise use the default color
        isToolInfo(tag) ? (
          <Chip key={j} label={tag.name} color={tag.color} />
        ) : (
          <Chip key={j} label={tag} />
        )
      );
    })}
  </div>
  );
}

export default ToolChipContainer;