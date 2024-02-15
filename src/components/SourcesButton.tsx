import { replaceSpaceWithUnderscore } from '../utils/helpers';

type SourceButtonProps = {
  sources: string[];
  isSourceSelected: (source: string) => boolean;
  onToggleSource: (source: string) => void;
};
const SourcesButton = ({
  sources,
  isSourceSelected,
  onToggleSource,
}: SourceButtonProps) => {
  return (
    <div className="sources-buttons">
      {replaceSpaceWithUnderscore(sources).map((item) => (
        <button
          id={`source_${item}`}
          key={`source_${item}`}
          onClick={() => onToggleSource(item)}
          className={isSourceSelected(item) ? 'selected' : 'unselected'}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
export default SourcesButton;
