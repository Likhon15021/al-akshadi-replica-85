import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ProjectData {
  title: string;
  location: string;
  image: string;
  slug: string;
  status: 'ongoing' | 'completed' | 'upcoming';
}

interface ProjectFilterProps {
  ongoingProjects: Omit<ProjectData, 'status'>[];
  completedProjects: Omit<ProjectData, 'status'>[];
  upcomingProjects?: Omit<ProjectData, 'status'>[];
  showAll?: boolean;
}

const ProjectFilter = ({ 
  ongoingProjects, 
  completedProjects, 
  upcomingProjects = [],
  showAll = false 
}: ProjectFilterProps) => {
  const [activeTab, setActiveTab] = useState<'ongoing' | 'completed' | 'upcoming'>('ongoing');
  const { ref, isVisible } = useScrollAnimation();

  const allProjects = {
    ongoing: ongoingProjects.map(p => ({ ...p, status: 'ongoing' as const })),
    completed: completedProjects.map(p => ({ ...p, status: 'completed' as const })),
    upcoming: upcomingProjects.map(p => ({ ...p, status: 'upcoming' as const }))
  };

  const getCurrentProjects = () => {
    const projects = allProjects[activeTab];
    return showAll ? projects : projects.slice(0, 6);
  };

  const getProjectCount = (type: keyof typeof allProjects) => {
    return allProjects[type].length;
  };

  return (
    <div className="space-y-12">
      {/* Filter Tabs */}
      <div 
        ref={ref}
        className={`flex justify-center transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="glass-effect rounded-2xl p-2 flex flex-wrap gap-2 premium-shadow">
          <Button
            variant={activeTab === 'ongoing' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('ongoing')}
            className={`px-6 py-3 font-medium transition-all duration-300 ${
              activeTab === 'ongoing' 
                ? 'bg-gradient-to-r from-primary to-primary-600 text-white shadow-lg scale-105' 
                : 'hover:bg-primary/10 hover:text-primary'
            }`}
          >
            Ongoing 
            <span className="ml-2 text-xs bg-white/20 rounded-full px-2 py-0.5">
              {getProjectCount('ongoing')}
            </span>
          </Button>
          
          <Button
            variant={activeTab === 'completed' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('completed')}
            className={`px-6 py-3 font-medium transition-all duration-300 ${
              activeTab === 'completed' 
                ? 'bg-gradient-to-r from-primary to-primary-600 text-white shadow-lg scale-105' 
                : 'hover:bg-primary/10 hover:text-primary'
            }`}
          >
            Completed 
            <span className="ml-2 text-xs bg-white/20 rounded-full px-2 py-0.5">
              {getProjectCount('completed')}
            </span>
          </Button>
          
          {upcomingProjects.length > 0 && (
            <Button
              variant={activeTab === 'upcoming' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-3 font-medium transition-all duration-300 ${
                activeTab === 'upcoming' 
                  ? 'bg-gradient-to-r from-primary to-primary-600 text-white shadow-lg scale-105' 
                  : 'hover:bg-primary/10 hover:text-primary'
              }`}
            >
              Upcoming 
              <span className="ml-2 text-xs bg-white/20 rounded-full px-2 py-0.5">
                {getProjectCount('upcoming')}
              </span>
            </Button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {getCurrentProjects().map((project, index) => (
          <div 
            key={`${activeTab}-${project.slug}-${index}`} 
            className="animate-fade-in-up hover-lift"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProjectCard
              title={project.title}
              location={project.location}
              image={project.image}
              slug={project.slug}
              status={project.status}
            />
          </div>
        ))}
      </div>

      {/* No Projects Message */}
      {getCurrentProjects().length === 0 && (
        <div className="text-center py-20">
          <div className="w-24 h-24 mx-auto mb-6 bg-muted/50 rounded-full flex items-center justify-center">
            <div className="w-12 h-12 bg-muted rounded-full" />
          </div>
          <p className="text-muted-foreground text-lg">
            No {activeTab} projects available at the moment.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectFilter;