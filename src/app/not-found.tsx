import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="eyebrow mb-4">404</p>
      <h1 className="display text-4xl md:text-6xl">This page wandered off.</h1>
      <Link href="/" className="link-underline mt-8 text-base">
        Back home ↗
      </Link>
    </div>
  );
}
