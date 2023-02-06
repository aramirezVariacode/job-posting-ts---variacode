import { useDispatch, useSelector } from "react-redux"
import { StoreReducers } from "../../store"
import { onCloseModal, onOpenModal } from "../../store/ui/UiSlice";


export const useUiStore = () => {
    const {isModalOpen} = useSelector((state : StoreReducers) => state.ui);
    const dispatch = useDispatch();
    
    const startModalOpen = () =>{
      dispatch(onOpenModal());
    }
    
    const startCloseModal = () =>{
        dispatch(onCloseModal());
    }

  return {
  //props
  isModalOpen,
  //methods
  startModalOpen,
  startCloseModal
  }
}
