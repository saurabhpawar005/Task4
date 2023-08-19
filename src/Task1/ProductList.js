import { AppBar, Button, Card, CardContent, Dialog, DialogContent, Grid, IconButton, InputAdornment, Table, TableBody, TableCell, TableRow, TextField, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";


function App({ open, onClose, onSubmit }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [Cards, setCards] = useState([]);
  const [cart, setCart] = useState([]);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleOpenCards = ()  => {
    setCards(true);
  }

  const handleCloseCards = ()  => {
    setCards(false);
  }

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

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
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={handleOpenDialog}>
            Buy Now
          </Button>
        </Toolbar>
      </AppBar>

      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogContent>

        <Typography variant="h6">Add Product</Typography>
        <form onSubmit={handleSubmit(handleFormSubmit)}>

        <TextField
          label="Product Name"
          sx="margin:20px 0;"
          fullWidth
          {...register('productName', { required: true })}
          error={!!errors.productName}
          helperText={errors.productName && 'Product name is required'}
        />
        <TextField
          label="Price"
          sx="margin:20px 0;"
          fullWidth
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          {...register('price', { required: true, min: 0 })}
          error={!!errors.price}
          helperText={errors.price && 'Price is required'}
        />
       
        <Button type="submit" variant="contained" color="primary" onClick={handleOpenCards} >
          Add Product
        </Button>
          </form>            
          
          {/* Form with fields for image upload, product name, price */}
          {/* Validation logic using react-hook-form */}
        </DialogContent>
      </Dialog>

      <Grid  container spacing={2}>
        {products.map((product, index) => (
          <Grid open={Cards} onClose={handleCloseCards} item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <img src={"https://media.istockphoto.com/id/1419645742/photo/anonymous-woman-holding-a-gift-box-and-looking-at-beauty-cosmetics-products-inside.webp?b=1&s=170667a&w=0&k=20&c=4kUmY47cUWN6WRy3RsLsBJu0YMsR5CRh1IuLnsigxYU="} alt="Product" style={{ maxWidth: '100%' }} />
                <Typography variant="h6">{product.productName}</Typography>
                <Typography variant="body2">${product.price}</Typography>
                <IconButton onClick={() => handleAddToCart(product)}>
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Table>
        <TableBody>
          {cart.map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.productName}</TableCell>
              <TableCell>${product.price}</TableCell>
              {/* Other columns */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default App;

