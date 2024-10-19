import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-8">
        <Image
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Hotel Name Hero"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl font-bold">Welcome to Hotel Name</h1>
          <p className="mt-2 text-lg">
            Your perfect getaway in the heart of Kenya
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Welcome to Hotel Name, your perfect getaway in the heart of Kenya.
            Our hotel offers a unique blend of luxury, comfort, and authentic
            Kenyan hospitality.
          </p>
          <p className="mb-4">
            Nestled in the beautiful landscapes of Kenya, Hotel Name provides a
            tranquil retreat for travelers seeking to experience the beauty of
            East Africa. Whether you&apos;re here for a safari adventure, a
            business trip, or a relaxing vacation, our dedicated staff is
            committed to making your stay unforgettable.
          </p>
          <p>
            At Hotel Name, we pride ourselves on our attention to detail, our
            commitment to sustainability, and our passion for showcasing the
            best of Kenyan culture and cuisine. Come and experience the warmth
            of our hospitality and the beauty of Kenya with us.
          </p>
        </div>
        <div className="relative h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Hotel Name Interior"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-8">
        <h2 className="text-3xl font-semibold mb-6 text-center text-white-700">
          What Our Guests Say
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex-1 max-w-md">
            <p className="text-gray-700 italic">
              &quot;Absolutely wonderful experience! The staff was
              amazing.&quot;
            </p>
            <p className="mt-4 font-semibold text-gray-800">- Guest Name</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex-1 max-w-md">
            <p className="text-gray-700 italic">
              &quot;Beautiful hotel with stunning views. Highly recommend!&quot;
            </p>
            <p className="mt-4 font-semibold text-gray-800">- Guest Name</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex-1 max-w-md">
            <p className="text-gray-700 italic">
              &quot;The best hospitality experience I&apos;ve ever had!&quot;
            </p>
            <p className="mt-4 font-semibold text-gray-800">- Guest Name</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex-1 max-w-md">
            <p className="text-gray-700 italic">
              &quot;A true gem in the heart of Kenya! Will definitely
              return.&quot;
            </p>
            <p className="mt-4 font-semibold text-gray-800">- Guest Name</p>
          </div>
        </div>
      </div>

      {/* Unique Features Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Unique Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-500 text-white rounded-lg text-center">
            <h3 className="font-bold">Spa & Wellness</h3>
            <p>Relax and rejuvenate with our luxurious spa services.</p>
          </div>
          <div className="p-4 bg-green-500 text-white rounded-lg text-center">
            <h3 className="font-bold">Gourmet Dining</h3>
            <p>Enjoy exquisite cuisine prepared by our world-class chefs.</p>
          </div>
          <div className="p-4 bg-red-500 text-white rounded-lg text-center">
            <h3 className="font-bold">Exciting Tours</h3>
            <p>Explore the beauty of Kenya with our guided tours.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
