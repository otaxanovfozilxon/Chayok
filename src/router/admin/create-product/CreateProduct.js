import React, {useState} from 'react'
import "../Admin.css"
import { db } from "../../../server"
import { collection, addDoc } from "firebase/firestore"

// collection === arrey

function CreateProduct() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)

  const productRef = collection(db, "products")

  const handleSubmit = async (e)=>{
    e.preventDefault()
    setLoading(true)
    let newProduct = {
      title,
      price: +price,
      url
    }
    await addDoc(productRef, newProduct)
    .then(res => {
      console.log(res)
      setPrice("")
      setTitle("")
      setUrl("")
    })
    .catch(res => console.log(res))
    .finally(()=> setLoading(false))
  }



  return (
    <div className='create_product'>
      <h2>Create Product</h2>
      <form onSubmit={ handleSubmit } action="">
        <input required value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='title' />
        <input required value={price} onChange={e => setPrice(e.target.value)} type="number" placeholder='price' />
        <input required value={url} onChange={e => setUrl(e.target.value)} type="text" placeholder='url' />
        <button type='submit' disabled={loading} >{loading ? "Loading..." : "Create Product"}</button>
      </form>
    </div>
  )
}

export default CreateProduct
