/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useCallback, useContext, useState } from 'react';

type SelectSheetType = 'feed' | 'reply' | null;

type DetailBottomSheetContextType = {
  selectedId: number | null;
  type: SelectSheetType;
  isOpen: boolean;
  openSheet: () => void;
  closeSheet: () => void;
  setSelectedId: (value: number) => void;
  setType: (value: SelectSheetType) => void;
  resetSelect: () => void;
};

const defaultState: DetailBottomSheetContextType = {
  selectedId: null,
  type: null,
  isOpen: false,
  openSheet: () => {},
  closeSheet: () => {},
  setSelectedId: () => {},
  setType: () => {},
  resetSelect: () => {},
};

const detailBottomSheetContext = createContext<DetailBottomSheetContextType>(defaultState);

const DetailBottomSheetProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [type, setType] = useState<SelectSheetType>(null);

  const openSheet = useCallback(() => {
    setIsOpen(true);
  }, []);
  const closeSheet = useCallback(() => {
    setIsOpen(false);
  }, []);

  const resetSelect = () => {
    setSelectedId(null);
    setType(null);
  };

  return (
    <detailBottomSheetContext.Provider
      value={{
        openSheet,
        closeSheet,
        isOpen,
        selectedId,
        setSelectedId,
        type,
        setType,
        resetSelect,
      }}
    >
      {children}
    </detailBottomSheetContext.Provider>
  );
};

const useDetailBottomSheetContext = (): DetailBottomSheetContextType => {
  const context = useContext(detailBottomSheetContext);
  if (!context) {
    throw new Error('Provider 안에서 사용 되어야 해요.');
  }
  return context;
};

export { DetailBottomSheetProvider, useDetailBottomSheetContext };
