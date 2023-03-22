import { product } from './modules/product';
import { modalProduct } from './modules/modalProduct';
import { basket } from './modules/basket';
import { sendForm } from './modules/sendForm';

product();
modalProduct();
basket();
sendForm({
    idForm: 'product-form', 
    idProductСount: 'product-count'
});