import React from "react";

const BookCard = ({ book, index }) => {
  // jodi index odd hoy (1, 3, 5...), mane 2nd book, 4th book... tokhon dynamic class hobe 'lg:flex-row-reverse'
  const isEvenCard = index % 2 === 0;

  return (
    <div>
      <div
        data-aos={!isEvenCard ? "fade-right" : "fade-left"}
        className={`card lg:card-side bg-base-100 shadow-sm mt-8 border border-base-200 overflow-hidden ${
          !isEvenCard ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Image / Figure section */}
        <figure className="lg:w-1/3">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-48 lg:h-full object-cover hover:scale-105"
          />
        </figure>

        {/* Content Section */}
        <div className="card-body lg:w-2/3">
          <h2 className="card-title text-xl font-bold">{book.title}</h2>
          <p className="font-medium text-primary text-sm">{book.author}</p>
          <p className="text-gray-700 text-sm">{book.description}</p>
          <div
            className={`card-actions justify-end ${!isEvenCard ? "justify-start" : ""}`}
          >
            <button className="btn btn-primary bg-primary text-black border-none hover:scale-105 hover:bg-secondary hover:text-white">
              {book.buttonText || "Listen"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
