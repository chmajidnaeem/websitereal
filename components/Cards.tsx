import React from 'react'

const Cards = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
    <div className="container mx-auto pt-12 pb-20">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
            Welcome to my website
        </h1>
        <p className="text-gray-700 text-lg text-center mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet magna id ex hendrerit semper.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Services</h2>
                <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet magna id ex hendrerit
                    semper.
                </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">About Us</h2>
                <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet magna id ex hendrerit
                    semper.
                </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Contact</h2>
                <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet magna id ex hendrerit
                    semper.
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Cards
