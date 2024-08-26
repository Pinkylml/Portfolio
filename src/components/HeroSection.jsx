import { Link } from 'react-router-dom';
import CameraIcon from './Icons/CameraIcon';

const HeroSection = () => (
  <section id="hero" className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">John Doe</h1>
            <h2 className="text-xl font-semibold text-muted-foreground">Artificial Intelligence Developer</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              I'm a skilled AI developer with a passion for creating innovative solutions that push the boundaries
              of what's possible. From machine learning to natural language processing, I've honed my expertise to
              deliver cutting-edge technology that transforms industries.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              to="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              View Projects
            </Link>
            <Link
              to="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        <img
          src="/placeholder.svg"
          width="550"
          height="550"
          alt="John Doe"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
