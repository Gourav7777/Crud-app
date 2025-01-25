import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createProduct, updateProduct } from '../Redux/Products/productSlice'
import "../App.css"

  
const ProductForm = ({ product, onClose }) => {
    const [formData, setFormData] = useState({
      name: '',
      price: '',
      category: '',
      description: '',
    });
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      
      if (product) {
        setFormData({
          name: product.name || '',
          price: product.price || '',
          category: product.category || '',
          description: product.description || '',
        });
      } else {
        
        setFormData({ name: '', price: '', category: '', description: '' });
      }
    }, [product]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (product) {
       
        dispatch(updateProduct({ ...formData, id: product._id }));
      } else {
        
        dispatch(createProduct(formData));
      }
  
      
      onClose();
      setFormData({ name: '', price: '', category: '', description: '' });
    };
  
    return (
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Product Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category" className="form-label">
            Category:
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-textarea"
          />
        </div>
        <button type="submit" className="submit-button">
          {product ? 'Update Product' : 'Add Product'}
        </button>
      </form>
    );
  };
  
export default ProductForm;
