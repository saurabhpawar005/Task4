// import { AppBar, Typography } from "@mui/material";
// import React from "react";

// function MuiMaterial(){
//     return (
//         <>
//       <AppBar>
//         <Typography>Shop</Typography>
//       </AppBar>
//       </>
//     )
// }

// export default MuiMaterial;




<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Dashboard</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <nav>
    <div class="navbar">
      <h1>Product Dashboard</h1>
      <button id="openDialogBtn">Buy Now</button>
    </div>
  </nav>

  <div id="productDialog" class="dialog">
    <div class="dialog-content">
      <span class="close" id="closeDialogBtn">&times;</span>
      <h2>Add New Product</h2>
      <form id="productForm">
        <input type="file" id="imageInput" accept="image/*" required>
        <input type="text" id="productNameInput" placeholder="Product Name" required>
        <input type="number" id="priceInput" placeholder="Price" required>
        <button type="submit">Add Product</button>
      </form>
    </div>
  </div>

  <script src="scripts.js"></script>
</body>
</html>
