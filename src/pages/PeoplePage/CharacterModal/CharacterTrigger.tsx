import { useState } from 'react';
import { CharacterModal } from './CharacterModal.tsx';
import { PeopleResult } from '../../SearchPage/SearchResult.interface.ts';

interface CharacterTriggerProps {
  children: React.Node;
  initialValue?: Partial<PeopleResult>;
  onSave: (value: Partial<PeopleResult>) => void;
}

export const CharacterTrigger = ({
  children,
  initialValue,
  onSave,
}: CharacterTriggerProps) => {
  const [isModalShown, setIsModalShown] = useState<boolean>(false);

  const handleCreateClick = () => setIsModalShown(true);

  const handleSave = (newCharacter: Partial<PeopleResult>) => {
    console.log('Save!', newCharacter);
    if (onSave) {
      onSave(newCharacter);
    }
  };

  return (
    <>
      <button onClick={handleCreateClick}>{children}</button>
      {isModalShown && (
        <CharacterModal
          isOpen={isModalShown}
          setIsModalShown={setIsModalShown}
          initialValue={initialValue}
          onSave={handleSave}
        />
      )}
    </>
  );
};
