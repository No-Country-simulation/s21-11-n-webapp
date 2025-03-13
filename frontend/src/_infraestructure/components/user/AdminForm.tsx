import { TabMenu } from "primereact/tabmenu";
import { MenuItem } from "primereact/menuitem";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import UserForm from "./forms/UserForm";
import StoreForm from "./forms/StoreForm";
import PaymentForm from "./forms/PaymentForm";

const AdminForm = () => {
  const [tab, setTab] = useState(1);
  const items: MenuItem[] = [
    {
      label: "Usuario",
      icon: <Icon icon="solar:user-bold-duotone" width="24" height="24" />,
      command: () => setTab(1),
    },
    {
      label: "Tienda",
      icon: <Icon icon="ic:twotone-store" width="24" height="24" />,
      command: () => setTab(2),
    },
    {
      label: "Pago",
      icon: <Icon icon="stash:payment-link-duotone" width="24" height="24" />,
      command: () => setTab(3),
    },
  ];
  return (
    <div className="p-5 mt-10 mb-20 min-w-sm h-full">
      <div className="card">
        <TabMenu model={items} />
      </div>
      <AnimatePresence mode="wait">
        {tab === 1 && <UserForm />}
        {tab === 2 && <StoreForm />}
        {tab === 3 && <PaymentForm />}
      </AnimatePresence>
    </div>
  );
};

export default AdminForm;
