import React from 'react'
import { Modal } from 'antd'

const ProductDetails = ({ product, onClose }) => {
  

  return (
    <Modal title="Product Details" visible={!!product} onCancel={onClose} footer={null}>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Description:</strong> {product.description}</p>
    </Modal>
  );
};

export default ProductDetails;
