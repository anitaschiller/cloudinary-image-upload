import { StyledForm } from './StyledForm';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Image from 'next/image';

export default function Form() {
  const { register, handleSubmit, watch } = useForm();

  const CLOUD = process.env.CLOUDINARY_CLOUD;
  const PRESET = process.env.CLOUDINARY_PRESET;

  const placeholderImage = {
    url: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740',
    width: 460,
    height: 307,
  };

  const [previewImage, setPreviewImage] = useState(placeholderImage);

  const uploadImage = async () => {
    try {
      const url = `https://api.cloudinary.com/v1_1/${CLOUD}/upload`;
      const image = watch('image')[0];

      const fileData = new FormData();
      fileData.append('file', image);
      fileData.append('upload_preset', PRESET);

      const response = await fetch(url, {
        method: 'POST',
        body: fileData,
      });

      setPreviewImage(await response.json());
    } catch (error) {
      console.error(error.message);
    }
  };

  const onSubmit = (data) => {
    data.image = {
      url: previewImage.url,
      width: previewImage.width,
      height: previewImage.height,
    };
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {/* ----------NAME---------- */}
      <label htmlFor="name">Product Name</label>
      <input type="text" id="name" {...register('name')} />

      {/* ----------PRICE---------- */}
      <label htmlFor="price">Price</label>
      <input type="number" id="price" {...register('price')} />

      {/* ----------IMAGE---------- */}
      <label htmlFor="image">Image</label>
      <input
        type="file"
        id="image"
        {...register('image')}
        onChange={uploadImage}
      />

      <Image
        src={previewImage.url}
        width={previewImage.width}
        height={previewImage.height}
      />

      <button type="submit">Submit</button>
    </StyledForm>
  );
}
