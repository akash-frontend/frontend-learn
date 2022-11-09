import React, { useEffect, useState } from 'react'

function Products() {


    console.log("products component called");
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    function getProductByCategory() {
        // fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        //     .then(res => res.json())
        //     .then(products => {
        //         console.log("producst fetched", products);
        //         setProducts(products);
        //     })
            console.log(selectedCategory);
    }

    function getAllCategories() {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => {
                console.log("categories",json)
                setCategories(json);
            })
    }
    useEffect(() => {
        console.log("without dependency")
        getAllCategories();
    }, [])

    useEffect(() => {
        console.log("use effect will be called when the category is modified", selectedCategory);
        if (selectedCategory) {
            getProductByCategory()
        }
        
    }, [selectedCategory])

    // Here you get the warning 
    // React Hook useEffect has a missing dependency: 'getProductByCategory'.
    // Either include it or remove the dependency array
    // because getProductByCategory use selectedCategory dependency 
    // inside its function defination 
    // to avoid this error
    // we can include function as its dependency like this [getProductByCategory,selectedCategory]
    // or 
    // or wrap function in Usecallback hook
    // or 
    // eslint-disable-next-line

    
    function handleChange(e) {
        setSelectedCategory(e.target.value);
    }

    return (
        <div>
            <select name="categories" id="categories" onChange={handleChange}>
                {categories.map(category => <option key={category} value={category}>{category.toUpperCase()}</option>)}
            </select>

            <h1>{selectedCategory}</h1>
            <section className='product'>
                {products.map(prod => {
                    return (<section className='product-item' key={prod.id}>
                        <img style={{ height: 200, width: 200, objectFit: "contain" }} src={prod.image} alt={prod.title} />
                        <section>
                            <h2>{prod.title}</h2>
                        </section>
                    </section>)
                })
                }
            </section>

        </div>
    )
}

export default Products