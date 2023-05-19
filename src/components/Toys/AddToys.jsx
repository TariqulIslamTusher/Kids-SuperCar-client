import { useContext, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const AddToys = () => {

    const { user } = useContext(AuthContext)

    const [subCat1, setSubCat1] = useState(false)
    const [subCat2, setSubCat2] = useState(false)
    const [subCat3, setSubCat3] = useState(false)

    const handleCat = (e) => {
        const category = e.target.value

        if (category === 'Bus') {
            setSubCat1(true)
            setSubCat2(false)
            setSubCat3(false)
        } else if (category === "Car") {
            setSubCat1(false)
            setSubCat2(true)
            setSubCat3(false)
        } else if (category === "Truck") {
            setSubCat1(false)
            setSubCat2(false)
            setSubCat3(true)
        } else {
            setSubCat1(false)
            setSubCat2(false)
            setSubCat3(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any desired action with the form data

        const form = e.target

        const toyName = form.toyName.value
        const sellerName = form.sellerName.value
        const sellerEmail = form.sellerEmail.value
        const category = form.category.value
        const subCategory = form.subCategory.value
        const photoURL = form.photoURL.value
        const price = form.price.value
        const rating = form.rating.value
        const availableQty = form.availableQty.value
        const description = form.description.value
        // Reset the form


        const product = {
            toyName, sellerName, sellerEmail, category, subCategory, photoURL, price, rating, availableQty, description
        }


        // send data to the server 
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // if(data.insertedId){
                //     alert('data added succecfully')
                // }
                // form.reset()
                // toast.success('product added')
            })

    };

    return (
        <div className='flex flex-col md:flex-row items-center my-5 container mx-auto'>
            <div className='w-1/2'>
                {/* <ToastContainer></ToastContainer> */}
                <Player
                    src='https://assets10.lottiefiles.com/private_files/lf30_5bsxhzst.json'
                    className="player h-screen"
                    loop

                    autoplay>

                </Player>
            </div>
            <form className=" mx-auto" onSubmit={handleSubmit}>
                <div className='flex gap-5'>
                    <div className="mb-4 w-full">
                        <label className="block mb-2 text-lg font-medium" htmlFor="name">
                            Toy Name
                        </label>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="text"
                            id="toyName"
                            name="toyName"
                            required
                        />
                    </div>

                    <div className="mb-4 w-full">
                        <label className="block mb-2 text-lg font-medium" htmlFor="sellerName">
                            Seller Name
                        </label>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="text"
                            id="sellerName"
                            name="sellerName"
                            value={user.displayName}
                            required
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-lg font-medium" htmlFor="sellerEmail">
                        Seller Email
                    </label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="email"
                        id="sellerEmail"
                        name="sellerEmail"
                        value={user.email}
                        required

                    />
                </div>

                <div className='flex gap-5'>
                    <div className="mb-4 w-full">
                        <label className="block mb-2 text-lg font-medium" htmlFor="photoURL">
                            Category
                        </label>
                        <select
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="text"
                            id="category"
                            name="category"
                            onChange={handleCat}
                            required
                        >
                            <option value="">Select One</option>
                            <option value="Bus">Bus</option>
                            <option value="Car">Car</option>
                            <option value="Truck">Truck</option>
                        </select>
                    </div>
                    {/*  thre sub-category for 3 category */}
                    {subCat1 ? <>
                        <div className='mb-4 w-full'>
                            <label className="block mb-2 text-lg font-medium" htmlFor="subCategory">
                                Sub-category
                            </label>
                            <select
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                type="text"
                                id="subCategory"
                                name="subCategory"
                                required
                            >

                                <option value="MiniBus"> Mini Bus</option>
                                <option value="PublicBus">Public Bus</option>
                                <option value="Coaster">Coaster</option>
                            </select>
                        </div>
                    </> : ''}


                    {/* subcat 2 */}
                    {subCat2 ? <>
                        <div className='mb-4 w-full'>
                            <label className="block mb-2 text-lg font-medium" htmlFor="subCategory">
                                Sub-category
                            </label>
                            <select
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                type="text"
                                id="subCategory"
                                name="subCategory"
                                required
                            >

                                <option value="Sports">Sports Car</option>
                                <option value="PrivateCar">Private Car</option>
                                <option value="Micro">Micro</option>
                            </select>
                        </div>
                    </> : ''}

                    {/* sub Cat 3 */}
                    {subCat3 ? <>
                        <div className='mb-4 w-full'>
                            <label className="block mb-2 text-lg font-medium" htmlFor="subCategory">
                                Sub-category
                            </label>
                            <select
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                type="text"
                                id="subCategory"
                                name="subCategory"
                                required
                            >

                                <option value="MiniTruck">Mini Truck</option>
                                <option value="CoverVan">Cover Van</option>
                                <option value="SixWheeler">Six Wheeler</option>
                            </select>
                        </div>
                    </> : ""}


                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-lg font-medium" htmlFor="photoURL">
                        Picture URL
                    </label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="text"
                        id="photoURL"
                        name="photoURL"
                        required

                    />
                </div>
                <div className='flex gap-3'>
                    <div className="mb-4">
                        <label className="block mb-2 text-lg font-medium" htmlFor="price">
                            Price
                        </label>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="number"
                            id="price"
                            name="price"
                            required

                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-lg font-medium" htmlFor="rating">
                            Rating
                        </label>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="number"
                            id="rating"
                            name="rating"
                            required

                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-lg font-medium" htmlFor="availableQty">
                            Aval Quantity
                        </label>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="number"
                            id="availableQty"
                            name="availableQty"
                            required

                        />
                    </div>
                </div>



                <div className="mb-4">
                    <label className="block mb-2 text-lg font-medium" htmlFor="description">
                        Detail Description
                    </label>
                    <textarea
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        id="description"
                        name="description"
                        required

                    ></textarea>
                </div>

                <button
                    className="w-full py-2 px-4 text-lg font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddToys;
