// components/Footer.tsx
export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} AMS - All Rights Reserved.</p>
      </div>
    </footer>
  );
}
