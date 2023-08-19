import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import React from 'react';


function BuyNowDialog({ open, onClose }) {

  return (
    <>
    <Typography>dthtshs</Typography>
    <diV>yjhfhjh</diV>
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>BUY NOW</DialogTitle>
      <DialogContent>
      </DialogContent>
    </Dialog>
    </>
  );
}

export default BuyNowDialog;





import { useForm } from 'react-hook-form';
import {
  DialogContent,
  TextField,
  Button,
  Typography,
  InputAdornment,
} from '@mui/material';

function ProductForm({ open, onClose, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
    onClose();
  };

  return (
    <DialogContent>
      <Typography variant="h6">Add Product</Typography>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <TextField
          label="Product Name"
          fullWidth
          {...register('productName', { required: true })}
          error={!!errors.productName}
          helperText={errors.productName && 'Product name is required'}
        />
        <TextField
          label="Price"
          fullWidth
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          {...register('price', { required: true, min: 0 })}
          error={!!errors.price}
          helperText={errors.price && 'Price is required'}
        />
        <TextField
          label="Image"
          fullWidth
          type="file"
          accept="image/*"
          {...register('image', { required: true })}
          error={!!errors.image}
          helperText={errors.image && 'Image is required'}
        />
        <Button type="submit" variant="contained" color="primary">
          Add Product
        </Button>
      </form>
    </DialogContent>
  );
}

export default ProductForm;

