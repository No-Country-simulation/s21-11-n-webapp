import { Dialog } from "primereact/dialog";
import { TabMenu } from "primereact/tabmenu";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

import { useAuthTabs } from "./authTabs";
import Login from "./authLogin";

export interface AuthModalProps {
  visible: boolean;
  visibleOff: () => void;
}

const AuthModal = ({ visible, visibleOff }: AuthModalProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const authTabs = useAuthTabs();

  return (
    <Dialog
      modal
      draggable={false}
      header="Autenticación"
      visible={visible}
      onHide={visibleOff}
      className="w-9/10 sm:w-8/10 md:w-6/10 lg:w-[550px]"
    >
      <div className="card">
        <TabMenu
          model={authTabs}
          activeIndex={activeIndex}
          onTabChange={(e) => setActiveIndex(e.index)}
          className="mb-4"
        />
        <div className="p-4">
          <AnimatePresence mode="wait">
            {activeIndex === 0 && <Login closeModal={visibleOff} key="login" />}
            {activeIndex === 1 && (
              <Login closeModal={visibleOff} key="register" /> // Agregar componente registro
            )}
          </AnimatePresence>
        </div>
      </div>
    </Dialog>
  );
};

export default AuthModal;
