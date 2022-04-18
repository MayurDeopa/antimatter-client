
export const getProductCategories =async()=>{
    try{
        const res = await fetch(`https://antimatter-server.herokuapp.com/products/categories`,{
            method:"GET",
            headers:{"Content-Type" :"application/json"},
        })
        return res.json()
    }
    catch(err){
        return err
    }
}


export const getProductCategory =async(slug)=>{
    try{
        const res = await fetch(`https://antimatter-server.herokuapp.com/products/category?slug=${slug}`,{
            method:"GET",
            headers:{"Content-Type" :"application/json"},
        })
        return res.json()
    }
    catch(err){
        return err
    }
}

export const getProductById =async(id)=>{
    try{
        const res = await fetch(`https://antimatter-server.herokuapp.com/products/product?id=${id}`,{
            method:"GET",
            headers:{"Content-Type" :"application/json"},
        })
        return res.json()
    }
    catch(err){
        return err
    }
}

