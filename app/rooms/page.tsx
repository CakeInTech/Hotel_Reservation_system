import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const rooms = [
  {
    id: 1,
    name: "Deluxe Suite",
    description:
      "Spacious suite with a breathtaking view of the Kenyan savanna.",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    name: "Executive Room",
    description: "Elegant room with modern amenities and a private balcony.",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    name: "Family Suite",
    description:
      "Comfortable suite perfect for families, with separate living area.",
    price: 300,
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    name: "Standard Room",
    description:
      "Cozy room with all essential amenities for a comfortable stay.",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
];

export default function RoomsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative h-[300px] md:h-[400px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1713192704825-74a0017f585d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hotel Background"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-50"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-4xl font-bold p-4 text-center">
          Experience Luxury Like Never Before
        </h2>
      </div>

      <div className="bg-blue-500 text-white p-4 rounded-lg mt-6 md:mt-8 text-center">
        <h2 className="text-sm md:text-lg font-semibold">
          Book Now and Get 20% Off!
        </h2>
        <p className="text-xs md:text-sm">
          Limited time offer for direct bookings only.
        </p>
      </div>

      <h1 className="text-3xl font-bold my-8">Our Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <Card key={room.id}>
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-lg"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle>{room.name}</CardTitle>
              <CardDescription className="mt-2">
                {room.description}
              </CardDescription>
              <ul className="mt-2">
                <li>🛏️ King Size Bed</li>
                <li>🌐 Free Wi-Fi</li>
                <li>🚿 Ensuite Bathroom</li>
              </ul>
              <p className="mt-2 font-semibold">From ${room.price} per night</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/book?room=${room.id}`}>Book Now</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
