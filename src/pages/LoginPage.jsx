import React, { useState } from 'react';
import { HiEye, HiEyeOff, HiArrowLeft } from 'react-icons/hi';
import AuthLayout from '../components/logres/AuthLayout';
import InputField from '../components/logres/InputField';
import Button from '../components/logres/Button';
import axios from 'axios';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login', formData);

      // simpan token dan user
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      const roleResponse = await axios.get('http://127.0.0.1:8000/api/user', {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${response.data.token}`
        }
      });

      if (roleResponse.data.role === 'admin') {
        window.location.href = '/admin/dashboard';
      } else {
        window.location.href = '/dashboard';
      }
    } catch (error) {
      console.error('Login gagal:', error.response?.data || error.message);
      alert('Email atau password salah, coba lagi ya 💛');
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
        <h2 className="text-lg font-semibold text-gray-800">Selamat Datang</h2>
        <h1 className="text-2xl font-bold text-blue-700">TK NEGERI 1 SANGATTA UTARA</h1>
        <p className="text-sm text-gray-500 mt-1">Terbaik, Mandiri, Berprestasi</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <InputField
          label="Email"
          type="email"
          name="email"
          placeholder="cth: ayicomel@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />

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

        <div className="text-right text-sm mb-4">
          <a href="#" className="text-blue-500 hover:underline">Lupa Password?</a>
        </div>

        <Button type="submit">Masuk</Button>
      </form>

      <div className="mt-4 text-center text-sm text-gray-600">
        Tidak memiliki akun?{' '}
        <a href="/register" className="text-blue-500 hover:underline">Daftar</a>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
