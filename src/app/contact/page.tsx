'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'validating'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basit doğrulama
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    // E-posta kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      return;
    }

    setStatus('validating');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (_error) {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-white text-center">İletişim</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Adınız"
          className="w-full p-3 rounded bg-gray-800 text-white"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-posta adresiniz"
          className="w-full p-3 rounded bg-gray-800 text-white"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Mesajınız"
          rows={5}
          className="w-full p-3 rounded bg-gray-800 text-white"
        />

        <button
          type="submit"
          disabled={status === 'validating'}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition w-full"
        >
          Gönder
        </button>

        {status === 'success' && (
          <p className="text-green-400 text-sm text-center">Mesaj başarıyla gönderildi!</p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-sm text-center">Lütfen tüm alanları doğru doldurun.</p>
        )}
      </form>
    </div>
  );
}
