"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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

const FeaturedRooms = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Rooms</h2>
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {rooms.map((room) => (
            <CarouselItem key={room.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full">
                      <Image
                        style={{ objectFit: "cover" }}
                        src={room.image}
                        alt={room.name}
                        fill
                        className="rounded-t-lg"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle>{room.name}</CardTitle>
                    <CardDescription className="mt-2">
                      {room.description}
                    </CardDescription>
                    <p className="mt-2 font-semibold">
                      From ${room.price} per night
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/book?room=${room.id}`}>Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default FeaturedRooms;
