import React, { useState } from 'react';
import { HiEye, HiEyeOff, HiArrowLeft } from 'react-icons/hi';
import AuthLayout from '../components/logres/AuthLayout';
import InputField from '../components/logres/InputField';
import Button from '../components/logres/Button';
import axios from 'axios';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();

    // ubah key confirmPassword jadi password_confirmation
    const dataToSend = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.confirmPassword,
    };

    try {
        const response = await axios.post('http://127.0.0.1:8000/api/auth/register', dataToSend);
        console.log('Register berhasil:', response.data);
        alert('Akun berhasil dibuat 💙');
        window.location.href = '/login';
    } catch (error) {
        console.error('Gagal register:', error.response?.data || error.message);
        alert(error.response?.data?.message || 'Gagal register, coba lagi ya sayang 😔');
    }
  };

  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <AuthLayout imageSrc="/images/galeri4.jpg">
      {/* Tombol panah balik */}
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
      >
        <HiArrowLeft size={20} className="text-gray-700" />
      </button>

      {/* Header */}
      <div className="text-center mb-6 mt-8">
        <h2 className="text-lg font-semibold text-gray-800">Daftar Akun</h2>
        <h1 className="text-2xl font-bold text-blue-700">TK NEGERI 1 SANGATTA UTARA</h1>
        <p className="text-sm text-gray-500 mt-1">Terbaik, Mandiri, Berprestasi</p>
      </div>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Nama"
          type="text"
          name="name"
          placeholder="Masukkan nama Anda"
          value={formData.name}
          onChange={handleChange}
        />

        <InputField
          label="Email"
          type="email"
          name="email"
          placeholder="cth: ayicomel@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-600 focus:outline-none"
            >
              {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
            </button>
          </div>
        </div>

        {/* Konfirmasi Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Konfirmasi Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="********"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3 text-gray-600 focus:outline-none"
            >
              {showConfirmPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
            </button>
          </div>
        </div>

        {/* Tombol daftar */}
        <Button type="submit">Daftar</Button>
      </form>

      <div className="mt-4 text-center text-sm text-gray-600">
        Sudah memiliki akun?{' '}
        <a href="/login" className="text-blue-500 hover:underline">Masuk</a>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
