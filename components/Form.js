import { StyledForm } from './StyledForm';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data) => {
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

      <button type="submit">Submit</button>
    </StyledForm>
  );
}
