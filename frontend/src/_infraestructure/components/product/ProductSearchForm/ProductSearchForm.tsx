import { productFilterOptions } from '@/_infraestructure/utils/products/productFilterOptions';
import { productSortOptions } from '@/_infraestructure/utils/products/productSortOptions';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext'
import { useState } from 'react';

export const ProductSearchForm = () => {
  const [textToSearch, setTextToSearch] = useState('');
  const [productSort, setProductSort] = useState('Más Nuevo');
  const [productFilter, setProductFilter] = useState('Todos');

  return (
    <>
      <form
        className='
          flex flex-col py-6 px-4 gap-5
          sm:px-10
          xl:px-0
          md:flex-row md:justify-between
        '
      >
        {/* BUSCADOR */}
        <div className='flex'>
          <button
            type='submit'
            className='
              min-w-9
              flex justify-center items-center bg-transparent
              border-y border-r-0 border-l border-text-secondary
              rounded-l-lg
            '
          >
            <Icon className='text-text-text' icon="pajamas:search" />
          </button>
          <InputText
            className='w-full border-l-text-secondary'
            value={textToSearch}
            onChange={(e) => setTextToSearch(e.target.value)}
            placeholder='Buscar Producto ...'
          />
        </div>


        {/* OPCIONES DE BUSQUEDA */}
        <div
          className='
            flex flex-col gap-5
            sm:flex-row sm:justify-between
          '
        >
          {/* TIPO */}
          <div className='flex flex-1'>
            <div
              className='
                min-w-9
                flex justify-center items-center bg-transparent
                border-y border-r-0 border-l border-surface-d
                rounded-l-lg
              '
            >
              <Icon className='text-surface-d' icon="cil:filter" />
            </div>
            <Dropdown
              className='w-full'
              value={productFilter}
              onChange={(e) => setProductFilter(e.target.value)}
              options={[...productFilterOptions]}
            />
          </div>

          {/* ORDEN */}
          <div className='flex flex-1'>
            <div
              className='
                min-w-9
                flex justify-center items-center bg-transparent
                border-y border-r-0 border-l border-surface-d
                rounded-l-lg
              '
            >
              <Icon className='text-surface-d' icon="grommet-icons:sort" />
            </div>
            <Dropdown
              className='w-full'
              value={productSort}
              onChange={(e) => setProductSort(e.target.value)}
              options={[...productSortOptions]}
            />
          </div>
        </div>
      </form>
    </>
  )
}
