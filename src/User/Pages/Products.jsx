import { useState } from 'react';
import { FaCartPlus, FaEye } from "react-icons/fa";
import Vintage from "../assets/vintage.jpg";
import Nike from "../assets/nike.jpg";
import Polo from "../assets/polo.jpg";
import Harley from "../assets/harley.jpg";

function Products() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const products = [
        {
            id: 1,
            name: "Vintage Camera",
            description: "Classic analog camera with premium lens",
            price: 299.99,
            image: Vintage,
            category: "vintage"
        },
        {
            id: 2, 
            name: "Nike Air Max",
            description: "Classic Nike sneakers in vintage style",
            price: 159.99,
            image: Nike,
            category: "shoes"
        },
        {
            id: 3,
            name: "Polo Shirt",
            description: "Vintage polo shirt in excellent condition",
            price: 89.99,
            image: Polo,
            category: "clothing"
        },
        {
            id: 4,
            name: "Harley Jacket",
            description: "Classic leather motorcycle jacket",
            price: 399.99,
            image: Harley,
            category: "clothing"
        }
    ];

    const filteredProducts = selectedCategory === 'all' 
        ? products 
        : products.filter(product => product.category === selectedCategory);

    return (
        <div className="flex flex-col min-h-screen bg-[#F5F5F5] py-16 px-4">
            <div className="max-w-7xl mx-auto w-full">
                <h1 className="text-4xl md:text-6xl font-mono font-semibold text-center mb-12">Our Products</h1>

                <div className="flex justify-center mb-8">
                    <div className="flex gap-4 bg-white p-4 rounded-lg shadow">
                        <button 
                            onClick={() => setSelectedCategory('all')}
                            className={`px-4 py-2 rounded font-mono ${selectedCategory === 'all' ? 'bg-[#4B5945] text-white' : 'bg-gray-100'}`}
                        >
                            All
                        </button>
                        <button 
                            onClick={() => setSelectedCategory('vintage')}
                            className={`px-4 py-2 rounded font-mono ${selectedCategory === 'vintage' ? 'bg-[#4B5945] text-white' : 'bg-gray-100'}`}
                        >
                            Vintage
                        </button>
                        <button 
                            onClick={() => setSelectedCategory('clothing')}
                            className={`px-4 py-2 rounded font-mono ${selectedCategory === 'clothing' ? 'bg-[#4B5945] text-white' : 'bg-gray-100'}`}
                        >
                            Clothing
                        </button>
                        <button 
                            onClick={() => setSelectedCategory('shoes')}
                            className={`px-4 py-2 rounded font-mono ${selectedCategory === 'shoes' ? 'bg-[#4B5945] text-white' : 'bg-gray-100'}`}
                        >
                            Shoes
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold font-mono">{product.name}</h2>
                                <p className="text-gray-600 font-mono mt-2">{product.description}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-xl font-bold font-mono">${product.price}</span>
                                    <div className="flex gap-4">
                                        <button className="bg-[#4B5945] text-white px-4 py-2 rounded hover:bg-[#3d4738]">
                                            <FaCartPlus />
                                        </button>
                                        <button className="bg-[#4B5945] text-white px-4 py-2 rounded hover:bg-[#3d4738]">
                                            <FaEye />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;
