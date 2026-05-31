import BookCard from "@/app/components/books/BookCard";
import React from "react";

const BooksPage = () => {
  const banglaLawBooks = [
    {
      id: 1,
      title: "The Code of Criminal Procedure, 1898",
      author: "Government Publication / Bare Act",
      description:
        "Bangladeshi criminal justice system ar foulदारी mamlar prokriya bhabe porichalito hoy tar mul ain.",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400", // Placeholder legal image
      buttonText: "Read Act",
    },
    {
      id: 2,
      title: "The Code of Civil Procedure, 1908",
      author: "A.K.M. Actaruzzaman",
      description:
        "Dewani mamla ba civil litigationer niyom-kanun ebong adaler karjobidhi bujhte eiti oshadharon boi.",
      image:
        "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=400",
      buttonText: "View Details",
    },
    {
      id: 3,
      title: "The Law of Torts",
      author: "Ratanlal & Dhirajlal (BD Edition/Context)",
      description:
        "Civil wrongs, negligence, ebong compensation related bishoyaboli niye alochona kora hoyeche.",
      image:
        "https://images.unsplash.com/photo-1453733190148-c44698c26578?auto=format&fit=crop&q=80&w=400",
      buttonText: "Explore Law",
    },
    {
      id: 4,
      title: "Constitutional Law of Bangladesh",
      author: "Justice Latifur Rahman",
      description:
        "Bangladesher songbidhaner dharasomuho ebong hider nihito bishleshon niye prokashito gurutwopurno boi.",
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=400",
      buttonText: "Read Constitution",
    },
  ];
  return (
    <div>
      {/* Title part */}
      <div className="text-center mt-6">
        <h2 className="text-3xl font-bold">All Available Books</h2>
        <p className="text-sm text-gray-700">
          Here you will get all the necessary book's PDF link
        </p>
      </div>

      {/* Card Part */}
      <div className="max-w-5xl mx-auto mt-16">
        {banglaLawBooks.map((book, index) => (
          <BookCard key={book.id} book={book} index={index}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
