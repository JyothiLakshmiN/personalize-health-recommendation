
import React from 'react';
import { Link } from 'react-router-dom';
import NutrigoLogo from '@/components/NutrigoLogo';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4 py-12">
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center">
            <Link to="/">
              <NutrigoLogo size="lg" />
            </Link>
          </div>
          
          <nav className="flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <Button asChild>
              <Link to="/">View Dashboard</Link>
            </Button>
          </nav>
        </header>

        <main>
          <section className="flex flex-col items-center text-center mb-24">
            <h1 className="text-5xl font-bold mb-6">
              Nutrition & Diet Admin Dashboard
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mb-8">
              The comprehensive solution for managing nutrition plans, tracking expenses, and monitoring health metrics in one place.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <Link to="/">View Dashboard</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#features">Learn more</a>
              </Button>
            </div>
          </section>

          <section id="features" className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-nutrigo-light-green rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-nutrigo-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expense Tracking</h3>
                <p className="text-gray-600">Monitor your grocery expenses and nutrition costs with detailed breakdowns and historical data.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-nutrigo-light-yellow rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-nutrigo-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Health Monitoring</h3>
                <p className="text-gray-600">Track your weight, caloric intake, and other health metrics with intuitive visualizations.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-nutrigo-light-orange rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-nutrigo-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Grocery Management</h3>
                <p className="text-gray-600">Organize your grocery list, track purchases, and categorize items for efficient shopping.</p>
              </div>
            </div>
          </section>

          <section className="mb-24">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/f6ba484a-7336-4cb4-b0d8-22146144989a.png" 
                alt="Nutrigo Dashboard Preview" 
                className="w-full h-auto"
              />
            </div>
          </section>
        </main>

        <footer className="text-center text-gray-500 mt-24">
          <p>© 2025 Nutrigo. All rights reserved.</p>
          <p className="text-sm mt-2">Design inspired by Peterdraw</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
