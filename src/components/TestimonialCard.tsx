interface TestimonialCardProps {
  quote: string;
  name: string;
  designation: string;
  image: string;
}

const TestimonialCard = ({ quote, name, designation, image }: TestimonialCardProps) => {
  return (
    <div className="glass-effect rounded-2xl p-8 premium-shadow hover:premium-shadow-lg transition-all duration-500 hover:scale-105 group relative">
      <div className="absolute top-6 left-6 text-6xl text-primary/30 leading-none font-serif">"</div>
      
      <div className="relative pt-8">
        <p className="text-muted-foreground leading-relaxed mb-8 italic text-lg font-light">
          {quote}
        </p>
        
        <div className="flex items-center space-x-6">
          <div className="relative">
            <img 
              src={image}
              alt={name}
              className="w-20 h-20 rounded-full object-cover ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
          </div>
          <div>
            <h4 className="font-serif font-semibold text-foreground text-xl mb-1">{name}</h4>
            <p className="text-sm text-primary font-medium">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;