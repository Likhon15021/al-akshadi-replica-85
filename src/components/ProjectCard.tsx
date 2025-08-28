import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  location: string;
  image: string;
  slug: string;
  status?: 'ongoing' | 'completed' | 'upcoming';
}

const ProjectCard = ({ title, location, image, slug, status = 'ongoing' }: ProjectCardProps) => {
  const statusColors = {
    ongoing: 'bg-tertiary text-tertiary-foreground',
    completed: 'bg-primary text-primary-foreground', 
    upcoming: 'bg-secondary text-secondary-foreground'
  };

  const statusLabels = {
    ongoing: 'Ongoing',
    completed: 'Completed',
    upcoming: 'Upcoming'
  };

  return (
    <Link to={`/project/${slug}`} className="group block">
      <div className="project-card bg-card rounded-lg overflow-hidden shadow-md hover-lift">
        <div className="relative">
          <img 
            src={image}
            alt={title}
            className="w-full h-64 object-cover"
          />
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
            {statusLabels[status]}
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin size={16} className="mr-2" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;