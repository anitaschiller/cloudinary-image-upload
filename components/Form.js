import { useState } from 'react';
import { StyledForm } from './StyledForm';

export default function Form() {
  const initialProduct = { name: '', price: '0' };
  const [product, setProduct] = useState(initialProduct);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(product);
  };

  function handleChange(event) {
    const field = event.target;
    const value = field.value;
    setProduct({ ...product, [field.name]: value });
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      {/* ----------NAME---------- */}
      <label htmlFor="name">Product Name</label>
      <input type="text" id="name" name="name" onChange={handleChange} />

      {/* ----------PRICE---------- */}
      <label htmlFor="price">Price</label>
      <input type="number" id="price" name="price" onChange={handleChange} />

      <button type="submit">Submit</button>
    </StyledForm>
  );
}
