import { BookOpen, Palette, Dumbbell, Calendar, Speaker, FileText, Camera, MoreHorizontal } from 'lucide-react';

const categories = [
  {
    icon: BookOpen,
    title: "Assignments & Academic Work",
    description: "Research, writing, presentations"
  },
  {
    icon: Palette,
    title: "Design & Creative Tasks",
    description: "Graphics, logos, creative projects"
  },
  {
    icon: Dumbbell,
    title: "Fitness & Nutrition",
    description: "Workout partners, diet planning"
  },
  {
    icon: Calendar,
    title: "Event Support",
    description: "Planning, coordination, setup"
  },
  {
    icon: Speaker,
    title: "Borrowing/Lending",
    description: "Speakers, lights, lab coats, books"
  },
  {
    icon: FileText,
    title: "MS Office / Presentations",
    description: "PPTs, Excel, document formatting"
  },
  {
    icon: Camera,
    title: "Photography / Videography",
    description: "Events, portraits, content creation"
  },
  {
    icon: MoreHorizontal,
    title: "...and more",
    description: "New categories added every week"
  }
];

const Categories = () => {
  return (
    <section className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Explore Categories Tailored to <span className="text-primary">Student Life</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Multiple categories to choose from, crafted for your needs.
          </p>
        </div>

        {/* Placeholder for uploaded creative */}
        <div className="mb-12">
          <div className="bg-card border border-border rounded-2xl p-12 text-center max-w-4xl mx-auto">
            <div className="text-muted-foreground">
              <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Category Grid/Carousel Creative Placeholder</p>
              <p className="text-sm mt-2">Upload your custom category visualization here</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              
              return (
                <div
                  key={index}
                  className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <h3 className="font-semibold font-poppins mb-2 text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;