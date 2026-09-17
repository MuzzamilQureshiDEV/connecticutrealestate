import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-display text-6xl font-bold text-bronze-500 sm:text-7xl">404</p>
        <h1 className="h2 mt-6">Page not found</h1>
        <p className="lead mt-4 max-w-md">
          That page has moved or never existed. The quickest route is straight to a person.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" icon="arrowRight">
            Back to home
          </Button>
          <Button href="/contact" variant="outline">
            Contact the team
          </Button>
        </div>
      </div>
    </Container>
  );
}
