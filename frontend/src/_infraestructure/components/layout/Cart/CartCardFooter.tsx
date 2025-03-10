import { transformCostToString } from '@/_infraestructure/utils/history';
import { Icon } from '@iconify/react/dist/iconify.js';
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { useState } from 'react';

interface CartCardFooterProps {
  productId: number;
  cost: number;
  quantity: number;
  onUpdateCartCard: (value: number) => void;
}

export const CartCardFooter = (
  { quantity, cost, onUpdateCartCard }: CartCardFooterProps
) => {
  const [quantityInput, setQuantityInput] = useState(quantity);

  const onChangeValue = (event: InputNumberValueChangeEvent) => {
    const value = event.value || 0;
    setQuantityInput(value);
    onUpdateCartCard(value);
  }

  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='flex-1'>
          <InputNumber
            inputClassName='w-full text-center'
            value={quantityInput}
            onValueChange={onChangeValue}
            showButtons
            buttonLayout="horizontal"
            step={1}
            decrementButtonClassName="bg-text"
            incrementButtonClassName="bg-primary"
            incrementButtonIcon={<div>+</div>}
            decrementButtonIcon={
              quantityInput > 1 ? <>-</> : <Icon icon="uiw:delete" />
            }
          />
        </div>
        <div className='flex-1 text-right'>
          TOTAL: ${transformCostToString(Number(cost.toFixed(2)) * quantityInput)}
        </div>
      </div>
    </>
  )
}
