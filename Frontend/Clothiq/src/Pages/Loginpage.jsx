
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState,useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LoginPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  const loginRef = useRef([]);
 
   useEffect(() => {
    loginRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.email === '' && data.password === '') {
      toast.error('Invalid email or password');
    }else{
      toast.success("Login Sucessfully...")
    }
    console.log(data)
  };

  return (
    <div ref={(el) => (loginRef.current[0] = el)}  className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Login
          </button>
        </form>

        <ToastContainer position="top-center" />
      </div>
    </div>
  );
};

export default LoginPage;

