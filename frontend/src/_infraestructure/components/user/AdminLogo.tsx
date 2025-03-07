import { Icon } from "@iconify/react";
import { Button } from "primereact/button";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";
import { MeterGroup } from "primereact/metergroup";

interface ImageDataProps {
  src: string;
  name: string;
  sizeMeter: number;
  sizeLabel: string;
}

const MAX_SIZE_MB = 2;

const AdminLogo = () => {
  const [fileData, setFileData] = useState<ImageDataProps | null>(null);

  const onUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const fileType = file.type;
    const fileSizeMB = file.size / (1024 * 1024);
    const fileSizeKB = file.size / 1024;

    const allowedTypes = ["image/png", "image/svg+xml"];
    if (!allowedTypes.includes(fileType)) {
      return toast.error("Solo imágenes en formato PNG o SVG.");
    }

    if (fileSizeMB > MAX_SIZE_MB) {
      return toast.error(`El tamaño máximo permitido es ${MAX_SIZE_MB} MB.`);
    }

    const objectURL = URL.createObjectURL(file);
    const displaySize =
      fileSizeMB >= 1
        ? `${fileSizeMB.toFixed(2)} MB`
        : `${fileSizeKB.toFixed(2)} KB`;

    setFileData({
      name: file.name,
      src: objectURL,
      sizeMeter: (file.size / (MAX_SIZE_MB * 1024 * 1024)) * 100,
      sizeLabel: displaySize,
    });
  };

  return (
    <div className="">
      <div className=" flex flex-col gap-5 md:grid md:grid-cols-2">
        <span className="text-2xl font-semibold col-span-2 text-text">
          Logo empresa
        </span>
        <div className="w-full h-[300px] bg-surface p-1 flex items-center justify-center rounded overflow-hidden">
          {fileData ? (
            <img
              src={fileData.src}
              alt="Vista previa"
              className="w-full h-full object-contain"
            />
          ) : (
            <span className="text-gray-500">Vista previa</span>
          )}
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2  text-text w-full">
              <div className="flex items-center gap-1">
                <Icon icon="ic:outline-sd-storage" width="20" height="20" />
                <span>Tamaño imagen</span>
              </div>
              <span className="text-primary ml-5 text-2xl font-semibold">
                {fileData ? fileData.sizeLabel : "0 KB"}
              </span>
            </div>

            <div className="flex flex-col gap-2 text-text w-full">
              <div className="flex items-center gap-1">
                <Icon icon="pajamas:label" width="20" height="20" />
                <span>Nombre imagen</span>
              </div>
              <span
                title={fileData ? fileData.name : "NaN"}
                className="line-clamp-2 min-h-17 text-primary text-2xl font-semibol ml-5 text-ellipsis"
              >
                {fileData ? fileData.name : "NaN"}
              </span>
            </div>
            <div className="w-full my-3">
              <MeterGroup
                values={[
                  {
                    label: "Límite imagen",
                    value: fileData ? fileData.sizeMeter : 0,
                    color:
                      fileData?.sizeMeter && fileData.sizeMeter > 80
                        ? "red"
                        : "var(--primary-color)",
                  },
                ]}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <label
              className="p-button grid place-content-center p-component p-button-outlined w-full"
              htmlFor="admin-image"
            >
              <span>Subir imagen</span>
              <input
                type="file"
                name="admin-image"
                id="admin-image"
                className="hidden"
                accept="image/*"
                onChange={onUpload}
              />
            </label>
            <Button className="w-full" label="Guardar" disabled={!fileData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogo;
