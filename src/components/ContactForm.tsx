import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Validación en tiempo real para cada campo
  const validateName = (value: string) => {
    const regex = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/; // Nombre con mayúscula inicial, permite nombres compuestos
    return regex.test(value) ? '' : 'Name must start with a capital letter and be properly formatted.';
  };

  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email básico
    return regex.test(value) ? '' : 'Please enter a valid email address.';
  };

  const validateMessage = (value: string) => {
    return value.length >= 20 ? '' : 'Message must be at least 20 characters.';
  };

  // Manejo de cambios en los campos
  const handleInputChange = (field: string, value: string) => {
    switch (field) {
      case 'name':
        setName(value);
        setErrors((prev) => ({ ...prev, name: validateName(value) }));
        break;
      case 'email':
        setEmail(value);
        setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
        break;
      case 'message':
        setMessage(value);
        setErrors((prev) => ({ ...prev, message: validateMessage(value) }));
        break;
    }
  };

  // Manejo del envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!errors.name && !errors.email && !errors.message) {
      console.log('Form submitted:', { name, email, message });
      alert('Thank you for contacting us!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Please correct the errors in the form.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto bg-[#0B5E4F] p-8 rounded-lg shadow-lg space-y-4"
    >
      {/* Nombre */}
      <div>
        <label className="block text-[#e8e5d7] font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          className={`w-full p-2 border ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } rounded-md`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-[#e8e5d7] font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className={`w-full p-2 border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } rounded-md`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* Mensaje */}
      <div>
        <label className="block text-[#e8e5d7] font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          className={`w-full p-2 border ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          } rounded-md`}
          rows={5}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message}</p>
        )}
      </div>

      {/* Botón de envío */}
      <button
        type="submit"
        disabled={!!errors.name || !!errors.email || !!errors.message}
        className="w-full bg-[#71867F] text-[#333333]  py-2 rounded-md hover:bg-[#537469] disabled:bg-gray-400 transition-all"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
