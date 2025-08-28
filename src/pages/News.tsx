import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const News = () => {
  const newsArticles = [
    {
      title: "SUMS City: A New Landmark in Rajshahi Real Estate",
      excerpt: "Our latest project SUMS City is setting new standards for modern living in Hoseniganj, Boalia with state-of-the-art amenities and contemporary design.",
      date: "March 15, 2024",
      author: "SUMS Team",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop",
      slug: "sums-city-new-landmark"
    },
    {
      title: "Sustainable Construction: Our Commitment to Eco-Friendly Building",
      excerpt: "Learn about our green building initiatives and how we're incorporating sustainable practices in all our construction projects.",
      date: "March 10, 2024", 
      author: "Engineering Team",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=250&fit=crop",
      slug: "sustainable-construction-commitment"
    },
    {
      title: "BMA Tower Handover Ceremony: Dreams Come True",
      excerpt: "Witness the joy of families receiving their keys to luxury apartments at SUMS BMA Tower in Medical College Road.",
      date: "March 5, 2024",
      author: "Customer Relations",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop",
      slug: "bma-tower-handover-ceremony"
    },
    {
      title: "Smart Home Technology: The Future of Apartment Living",
      excerpt: "Discover how we're integrating smart home solutions into our new projects to enhance convenience and security for residents.",
      date: "February 28, 2024",
      author: "Technology Team",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop",
      slug: "smart-home-technology-future"
    },
    {
      title: "Community Spotlight: Residents Share Their Stories",
      excerpt: "Read heartwarming testimonials from families who have made SUMS properties their home and are thriving in our communities.",
      date: "February 20, 2024",
      author: "Community Manager",
      image: "https://images.unsplash.com/photo-1560448075-bb485b067938?w=400&h=250&fit=crop",
      slug: "community-spotlight-residents-stories"
    },
    {
      title: "Construction Update: Vista Project Reaches New Milestone",
      excerpt: "SUMS Vista in Terokhadia reaches structural completion, marking another significant milestone in our development timeline.",
      date: "February 15, 2024",
      author: "Project Management",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=250&fit=crop",
      slug: "vista-project-milestone"
    }
  ];

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-tertiary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Latest <span className="text-primary">News</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest developments, project updates, and insights 
            from SUMS Real Estate.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-card rounded-lg overflow-hidden shadow-lg hover-lift">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={newsArticles[0].image}
                    alt={newsArticles[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="text-sm text-primary font-medium mb-2">Featured Story</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {newsArticles[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {newsArticles[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{newsArticles[0].date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User size={16} />
                        <span>{newsArticles[0].author}</span>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/news/${newsArticles[0].slug}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                    >
                      Read More <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.slice(1).map((article, index) => (
              <article key={index} className="bg-card rounded-lg overflow-hidden shadow-md hover-lift">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1 mb-1">
                        <Calendar size={12} />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User size={12} />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/news/${article.slug}`}
                      className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center"
                    >
                      Read More <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay in the Loop
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/80">
            Subscribe to our newsletter and never miss an update from SUMS Real Estate.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-l-lg text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-r-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default News;