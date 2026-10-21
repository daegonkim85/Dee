import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="section-label mb-4">404</p>
      <h1 className="display text-3xl md:text-4xl">This page wandered off.</h1>
      <Link href="/" className="link-subtle mt-8 inline-flex text-base">
        Back home →
      </Link>
    </div>
  );
}
