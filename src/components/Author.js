import Image from "next/image";
const Author = () => {
  return (
    <>
      <div className="md:fixed">
        <div className="md:block flex justify-center items-center">
        <Image
          src="/author.png"
          width="600"
          height="600"
          loading="lazy"
          alt="me"
          className="shadow-xl md:h-60 md:w-60 h-40 w-40 rounded-full"
        />
          <div className="mb-2 mx-7 mt-4 justify-center items-center">
            <h1
              className="md:text-3xl text-2xl text-gray-800 font-bold dark:text-blue-100"
            >
             Gaia DevOps
            </h1>
            <div className="md:text-lg text-gray-600 dark:text-blue-100">
              position
            </div>
            email

          </div>
        </div>
        </div>
    </>
    );
};

export default Author;
