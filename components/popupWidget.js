import { useState } from "react";

export default function PopupWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Кнопка открытия */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        💬
      </button>

      {/* Попап */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-80 p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
            <h2 className="text-lg font-semibold mb-4">Свяжитесь с нами</h2>
            <p className="text-sm text-gray-600 mb-4">
              Оставьте заявку и администратор свяжется с вами.
            </p>
            <a
              href="https://wa.me/79273039977"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition mb-2"
            >
              WhatsApp
            </a>
            <a
              href="https://t.me/akulenok_tmz"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            >
              Telegram
            </a>
          </div>
        </div>
      )}
    </>
  );
}
