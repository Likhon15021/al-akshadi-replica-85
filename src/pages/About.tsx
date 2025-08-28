import { Building, Users, Award, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Building,
      title: "Smart Living",
      description: "Modern apartment complexes with smart home technology and premium amenities."
    },
    {
      icon: Users,
      title: "ECO Construction", 
      description: "Environmentally conscious building practices for sustainable development."
    },
    {
      icon: Award,
      title: "Modern Technology",
      description: "Latest construction techniques and cutting-edge building materials."
    },
    {
      icon: Target,
      title: "Quality Assurance",
      description: "Rigorous quality control and premium finishing in every project."
    }
  ];

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-tertiary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">SUMS</span> Real Estate
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Building dreams with modern spaces and premium apartment complexes. 
              We are committed to delivering quality construction and smart living solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  SUMS REAL ESTATE (PVT.) LTD has been at the forefront of real estate 
                  development in Rajshahi, creating modern living spaces that combine 
                  comfort, style, and functionality.
                </p>
                <p>
                  With years of experience in the construction industry, we have built a 
                  reputation for delivering high-quality apartment complexes and residential 
                  projects that exceed our clients' expectations.
                </p>
                <p>
                  Our commitment to excellence, attention to detail, and customer satisfaction 
                  has made us one of the most trusted developers in the region.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center"
                alt="About SUMS Real Estate"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We bring innovation, quality, and excellence to every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center bg-card p-8 rounded-lg shadow-md hover-lift">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-primary text-primary-foreground p-12 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="leading-relaxed">
                To create exceptional living spaces that enhance the quality of life 
                for our residents, while maintaining the highest standards of construction 
                quality and customer service.
              </p>
            </div>
            <div className="bg-tertiary text-tertiary-foreground p-12 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="leading-relaxed">
                To be the leading real estate developer in Bangladesh, known for 
                innovative designs, sustainable construction practices, and creating 
                communities that bring people together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;