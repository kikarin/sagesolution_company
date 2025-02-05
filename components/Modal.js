export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop dengan blur */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-lg shadow-xl max-w-md w-full p-6">
          {children}
        </div>
      </div>
    </div>
  );
} 