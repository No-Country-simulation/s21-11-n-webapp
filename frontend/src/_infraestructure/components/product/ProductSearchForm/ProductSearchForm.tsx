import { ProductoSearchFormAttributes } from '@/_domain/models/products/ProductoSearchFormAttributes';
import { productFilterOptions } from '@/_infraestructure/utils/products/productFilterOptions';
import { productFormClasses } from '@/_infraestructure/utils/products/productFormClasses';
import { productSortOptions } from '@/_infraestructure/utils/products/productSortOptions';
import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext'
import { Controller, useForm } from 'react-hook-form';

const { iconClasses, leftInputSide } = productFormClasses

export const ProductSearchForm = () => {

  const { control, handleSubmit } = useForm<ProductoSearchFormAttributes>({
    defaultValues: {
      textToSearch: '',
      productSort: 'Más Nuevo',
      productFilter: 'Todos',
    },
  });

  const onSubmit = (
    data: ProductoSearchFormAttributes
  ) => {
    console.log('ON SUBMIT');
    console.log(data);
  };


  return (
    <>
      <form
        className='
          flex flex-col py-6 px-4 gap-5
          sm:py-12
          md:px-10 md:flex-row md:justify-between
          lg:py-15
          xl:px-0
        '
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* BUSCADOR */}
        <div className='flex'>
          <button
            type='submit'
            className={
              clsx(leftInputSide, 'border-0 bg-primary dark:bg-primary cursor-pointer')
            }
          >
            <Icon className='text-surface-d dark:text-surface-d' icon="pajamas:search" />
          </button>
          <Controller
            name='textToSearch'
            control={control}
            render={({ field }) => (
              <InputText
                {...field}
                className="w-full"
                placeholder="Buscar Producto ..."
              />
            )}
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
            <div className={leftInputSide}>
              <Icon className={iconClasses} icon="cil:filter" />
            </div>
            <Controller
              name='productFilter'
              control={control}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  className='w-full'
                  options={[...productFilterOptions]}
                />
              )}
            />
          </div>

          {/* ORDEN */}
          <div className='flex flex-1'>
            <div className={leftInputSide}>
              <Icon className={iconClasses} icon="grommet-icons:sort" />
            </div>
            <Controller
              name='productSort'
              control={control}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  className='w-full'
                  options={[...productSortOptions]}
                />
              )}
            />
          </div>
        </div>
      </form>
    </>
  )
}
