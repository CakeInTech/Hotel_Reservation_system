import { Wifi, Dumbbell, Utensils, Car, Waves, Tv } from "lucide-react";

const amenities = [
  { icon: Wifi, name: "Free Wi-Fi" },
  { icon: Dumbbell, name: "Fitness Center" },
  { icon: Utensils, name: "Restaurant" },
  { icon: Car, name: "Free Parking" },
  { icon: Waves, name: "Swimming Pool" },
  { icon: Tv, name: "Flat-screen TV" },
];

const Amenities = () => {
  return (
    <section className="py-16 bg-secondary text-secondary-foreground transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary transition-colors duration-300">
          Hotel Amenities
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-card shadow-lg text-card-foreground transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-primary hover:text-primary-foreground duration-300"
            >
              <amenity.icon className="w-14 h-14 mb-4 text-muted-foreground transition-colors duration-300" />
              <h3 className="text-lg font-semibold">{amenity.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
