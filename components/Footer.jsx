import { Container } from "./Container";

export function Footer() {
  return (
    <Container size="full" className="mt-12">
      <footer className="bg-gradient-to-r from-emerald-200 via-cyan-100 to-fuchsia-200">
        <Container>
          <div className="py-12 flex flex-col items-center justify-center">
            © Michele Riva {new Date().getFullYear()}
          </div>
        </Container>
      </footer>
    </Container>
  );
}
