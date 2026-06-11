import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from "../components/Sidebar"

const Home = () => {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col overflow-x-hidden'>
      <Navbar />

      <div className='flex flex-1 min-h-0 w-full gap-4'>
        <Sidebar />

        <main className='flex-1 py-6 md:py-10 px-6 md:px-10 flex flex-col gap-8 min-w-0'>

          {/* Hero Section */}
          <section className='bg-gradient-to-r from-purple-700 to-indigo-800 text-white p-8 md:p-10 rounded-2xl shadow-xl w-full'>
            <div className='max-w-3xl'>
              <h1 className='text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight'>
                Take Control of Your Money with ExpenseFlow
              </h1>

              <p className='text-purple-100 text-base md:text-lg leading-relaxed'>
                Welcome to your ultimate central hub for tracking, analyzing,
                and optimizing your daily spending habits. Achieve financial
                clarity and reach your savings goals effortlessly.
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-center'>

            {/* Left Content */}
            <div className='lg:col-span-7 flex flex-col gap-6'>
              <div>
                <h2 className='text-3xl font-bold text-gray-800 mb-3'>
                  Smart Tracking, Better Habits
                </h2>

                <p className='text-gray-600 leading-relaxed text-base'>
                  Monitoring your expenses shouldn't feel like a chore.
                  ExpenseFlow categorizes your personal transactions
                  dynamically, allowing you to instantly visualize where your
                  cash goes each month.
                </p>
              </div>

              <div className='border-l-4 border-purple-600 pl-4 py-2 bg-purple-50 rounded-r-xl'>
                <h3 className='font-bold text-gray-800 text-lg'>
                  Real-time Analysis
                </h3>

                <p className='text-gray-600 mt-1 leading-relaxed'>
                  Review balance summaries and track historical trends
                  instantly to ensure you always stay safely within your
                  targeted budgets.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className='lg:col-span-5'>
              <div className='bg-white rounded-2xl p-3 shadow-md overflow-hidden hover:shadow-lg transition-all duration-300'>
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop"
                  alt="Expense Tracker"
                  className='w-full h-72 object-cover rounded-xl'
                />
              </div>
            </div>

          </section>

          {/* Footer Stats */}
          <section className='grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-gray-200 pt-8'>

            <div className='flex items-center justify-center gap-2 py-3 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-600 font-semibold uppercase text-sm'>
              🔒 Fully Secure Data
            </div>

            <div className='flex items-center justify-center gap-2 py-3 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-600 font-semibold uppercase text-sm'>
              ⚡ Fast Entry
            </div>

          </section>

        </main>
      </div>
    </div>
  )
}

export default Home