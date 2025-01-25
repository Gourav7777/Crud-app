import React, { useState } from 'react'
import ProductList from "./Components/ProductsList"
import ProductForm from "./Components/ProductForm"
import { Button, Modal } from 'antd'
import ProductDetails from './Components/ProductDetails'

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleAddProduct = () => {
  
    setSelectedProduct(null)
    setIsDetailsOpen(false)
    setIsFormOpen(true)
  };

  const handleEdit = (product) => {
   
    setSelectedProduct(product)
    setIsDetailsOpen(false)
    setIsFormOpen(true)
  };

  const handleView = (product) => {
    
    setSelectedProduct(product)
    setIsFormOpen(false)
    setIsDetailsOpen(true)
  };

  const handleFormClose = () => {
   
    setSelectedProduct(null)
    setIsFormOpen(false)
  };

  const handleDetailsClose = () => {
    
    setSelectedProduct(null)
    setIsDetailsOpen(false)
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product Management</h1>
      <Button type="primary" onClick={handleAddProduct}>
        Add Product
      </Button>
      <ProductList onEdit={handleEdit} onView={handleView} />

     
      <Modal
        title={selectedProduct ? 'Edit Product' : 'Add Product'}
        visible={isFormOpen}
        onCancel={handleFormClose}
        footer={null}
      >
        <ProductForm product={selectedProduct} onClose={handleFormClose} />
      </Modal>

      
      {isDetailsOpen && (
        <ProductDetails
          product={selectedProduct}
          onClose={handleDetailsClose}
        />
      )}
    </div>
  );
};
export default App;