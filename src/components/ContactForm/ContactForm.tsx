import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { WEB3FORMS_ACCESS_KEY } from '../../constants';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          ...formData
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-dark-800/70 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-light border border-dark-900/10 text-dark-900 placeholder-dark-800/30 focus:outline-none focus:border-tealer transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold text-dark-800/70 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-light border border-dark-900/10 text-dark-900 placeholder-dark-800/30 focus:outline-none focus:border-tealer transition-all"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-bold text-dark-800/70 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-light border border-dark-900/10 text-dark-900 placeholder-dark-800/30 focus:outline-none focus:border-tealer transition-all resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4 px-6 rounded-xl bg-brand-primary text-white font-bold text-lg shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 hover:-translate-y-1 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Sending...
          </>
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </button>

      {status === 'success' && (
        <div className="p-4 rounded-xl bg-brand-green/20 border border-brand-green/30 text-brand-green text-center font-medium">
          Message sent successfully! I'll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 text-center font-medium">
          Something went wrong. Please try again later.
        </div>
      )}
    </form>
  );
};
