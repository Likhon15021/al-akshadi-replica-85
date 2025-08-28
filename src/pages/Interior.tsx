const Interior = () => {
  const interiorImages = [
    {
      title: "Modern Living Room",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      description: "Spacious and contemporary living spaces with premium finishes"
    },
    {
      title: "Luxury Kitchen",
      image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=400&h=300&fit=crop", 
      description: "State-of-the-art kitchen with modern appliances and elegant design"
    },
    {
      title: "Master Bedroom",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop",
      description: "Comfortable and serene bedrooms designed for rest and relaxation"
    },
    {
      title: "Elegant Bathroom",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop",
      description: "Luxurious bathrooms with premium fixtures and modern amenities"
    },
    {
      title: "Balcony View",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
      description: "Breathtaking views from private balconies and terraces"
    },
    {
      title: "Community Areas",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      description: "Shared spaces designed for community interaction and relaxation"
    }
  ];

  const features = [
    "Premium imported tiles and fixtures",
    "Modern modular kitchens",
    "Energy-efficient lighting systems", 
    "High-quality paint and finishes",
    "Smart home automation options",
    "Designer ceiling and flooring",
    "Luxury bathroom fittings",
    "Custom wardrobes and storage"
  ];

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-tertiary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Interior <span className="text-primary">Design</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience luxury living with our thoughtfully designed interiors that blend 
            comfort, functionality, and modern aesthetics.
          </p>
        </div>
      </section>

      {/* Interior Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Interior Designs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each space is carefully crafted to provide the perfect balance of luxury and livability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interiorImages.map((item, index) => (
              <div key={index} className="group bg-card rounded-lg overflow-hidden shadow-lg hover-lift">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Premium Features
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our apartments come with the finest materials and modern amenities 
                to ensure a luxurious living experience.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=600&h=400&fit=crop"
                alt="Premium Interior Features"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Design Philosophy
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We believe that great interior design should enhance daily life, create emotional 
              connections, and reflect the personality of those who inhabit the space. Our designs 
              combine timeless elegance with contemporary functionality.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded-full" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Functionality</h3>
                <p className="text-muted-foreground">Every design element serves a purpose while maintaining aesthetic appeal.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-tertiary/10 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-tertiary rounded-full" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Comfort</h3>
                <p className="text-muted-foreground">Creating spaces that feel like home with warmth and personal touch.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-secondary rounded-full" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Innovation</h3>
                <p className="text-muted-foreground">Incorporating the latest trends and technologies in interior design.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Interior;