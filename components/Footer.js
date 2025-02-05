export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#75A56F] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <img src="/SAGE.png" alt="SAGE Logo" className="w-24 h-auto mb-4" />
            <p className="text-sm">
              Solusi teknologi inovatif untuk pertumbuhan bisnis Anda. Kami hadir untuk memberikan layanan IT terbaik dengan standar profesional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white/80 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white/80 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white/80 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-white/80 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: info@sagesolusi.id</li>
              <li>Phone: (021) 123-4567</li>
              <li>Address: Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm">
          <p>© {new Date().getFullYear()} SAGE Solution. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
