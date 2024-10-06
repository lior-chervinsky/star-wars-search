import { useModal } from './useModal.tsx';
import { PeopleResult } from '../../SearchPage/SearchResult.interface.ts';
import { CharacterForm } from './CharacterForm.tsx';

interface ModalProps {
  initialValue?: PeopleResult;
  isOpen?: boolean;
  setIsModalShown?: (isOpen: boolean) => void;
  onSave?: (newCharacter: Partial<PeopleResult>) => void;
}

export const CharacterModal: React.FC<ModalProps> = ({
  initialValue,
  isOpen,
  setIsModalShown,
  onSave,
}) => {
  const { modalRef } = useModal(isOpen);

  const handleCloseModal = () => {
    if (setIsModalShown) {
      setIsModalShown(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  const handleSave = value => {
    console.log(value);
    if (onSave) {
      onSave(value as PeopleResult);
    }
    handleCloseModal();
  };

  return (
    <dialog ref={modalRef} className="modal" onKeyDown={handleKeyDown}>
      <CharacterForm initialValue={initialValue} onSave={handleSave} />
      <div>
        <button className="modal-close-btn" onClick={handleCloseModal}>
          Close
        </button>
        <button className="modal-close-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </dialog>
  );
};
