import useGetCategory from "@/_infraestructure/hooks/query/category/useGetCategory";
import { AxiosError } from "axios";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { CategoryContent } from "@/_domain/models/category/CategoryResponse";
import { Button } from "primereact/button";

export interface ErrorResponse {
  message: string;
  statusCode: number;
  details: string;
  errors: null;
}

function ListCategory() {
  const [page, setPage] = useState<number>(0);
  const [rows, setRows] = useState<number>(10);

  const { data, error, isError, isFetching, refetch } = useGetCategory();

  useEffect(() => {
    if (isError && error instanceof AxiosError) {
      toast.error(error.response?.data?.message || "Ocurrió un error");
    }
  }, [isError, error]);

  useEffect(() => {
    refetch();
  }, [page, rows, refetch]);

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setPage(event.page);
    setRows(event.rows);
  };

  const categories: CategoryContent[] = data?.pages[0]?.content || [];

  return (
    <div>
      <DataTable
        value={categories}
        tableStyle={{ minWidth: "50rem" }}
        loading={isFetching}
        emptyMessage="Error al cargar la información"
      >
        <Column field="id" header="ID"></Column>
        <Column field="name" header="Nombre"></Column>
        <Column field="description" header="Descripción"></Column>
        <Column field="thumbnail" header="Icono"></Column>
        <Column field="isActive" header="Activo"></Column>
        <Column
          header="Acciones"
          body={
            <>
              <Button label="Borrar" rounded outlined />
            </>
          }
        ></Column>
      </DataTable>

      <Paginator
        first={page * rows}
        rows={rows}
        totalRecords={data?.pages[0]?.totalElements || 0}
        rowsPerPageOptions={[10, 20, 30]}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default ListCategory;
