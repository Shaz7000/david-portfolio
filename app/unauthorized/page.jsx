import Link from "next/link";

export default function Unauthorized() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-muted">403</p>
        <h1 className="mt-2 text-4xl font-semibold">Not your role.</h1>
        <p className="mt-3 text-muted max-w-md">
          This area is restricted by RBAC. Sign in with an account that has the right role.
        </p>
        <Link
          href="/login"
          className="inline-block mt-6 px-6 py-3 rounded-full bg-white text-black font-semibold"
        >
          Sign in
        </Link>
      </div>
    </main>
  );
}
