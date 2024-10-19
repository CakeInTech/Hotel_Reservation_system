import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-[600px] flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        alt="Serene Stays Hotel"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Hotel Name
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Experience luxury and comfort in the heart of Kenya
        </p>
        <Button asChild size="lg">
          <Link href="/book">Book Your Stay</Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
