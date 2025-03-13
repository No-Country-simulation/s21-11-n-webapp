import axios, { AxiosError } from "axios";

export const AddImage = async (data: File): Promise<AddImageModel> => {
  const name = import.meta.env.VITE_CLOUDINARY_NAME;
  const image = new FormData();
  image.append("file", data);
  image.append("upload_preset", "ml_default");
  image.append("cloud_name", "dgnrqnj8y");

  try {
    const { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/${name}/image/upload`,
      image
    );
    return {
      coverPicture: data.url,
      error: null,
    };
  } catch (error) {
    const err = error as AxiosError<any>;
    return {
      error: err.response?.data.message,
      coverPicture: null,
    };
  }
};

interface AddImageModel {
  coverPicture: string | null;
  error: string | null;
}
