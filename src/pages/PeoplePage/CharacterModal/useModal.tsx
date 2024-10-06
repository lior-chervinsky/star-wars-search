import { useEffect, useRef } from 'react';

export const useModal = (isOpen: boolean | undefined) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (!modalElement) {
      return;
    }
    if (isOpen) {
      modalElement.showModal();
    } else {
      modalElement.close();
    }
  }, [isOpen]);
  return { modalRef };
};