import { useTranslations } from 'next-intl'
import Button from './components/Button'

export default function DashboardPage() {
  const t = useTranslations('')

  return (
    <div>
      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center py-24 bg-cover bg-center' style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <h1 className='text-center text-7xl font-extrabold leading-tight'>
          {t('UCanPay')}{' '}
          <span className='bg-span-bg bg-clip-text text-transparent'>
            {t('AMS Project')}
          </span>
          <br />
          {t('Redefining Payment Solutions')}
        </h1>
        <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
          {t(
            'Unlock new revenue possibilities with UCanPay, a trusted platform for secure, fast, and reliable payment solutions.'
          )}
        </div>
        <div className='mt-4 flex flex-row gap-4'>
          <a href='/contact' target='_blank'>
            <Button rounded size='large'>
              {t('Contact Us')}
            </Button>
          </a>
          <a href='/learn-more' target='_blank'>
            <Button rounded size='large' variant='secondary'>
              {t('Learn More')}
            </Button>
          </a>
        </div>
      </section>

      {/* Key Features Section */}
      <section className='bg-background-secondary py-20 max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>{t('Secure Payments')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Ensure the highest levels of payment security with advanced encryption and fraud detection technologies.'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Global Reach')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Expand your business into 150+ currencies and accept payments from anywhere in the world with our global acquiring services.'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Flexible Integration')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Seamlessly integrate our payment solutions with your platform using our developer-friendly API and SDKs.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Why UCanPay Section */}
      <section className='py-20 bg-white'>
        <div className='mx-auto max-w-screen-lg text-center'>
          <h2 className='text-4xl font-bold mb-8'>{t('Why Choose UCanPay?')}</h2>
          <p className='text-xl mb-10'>
            {t(
              'UCanPay is designed to accelerate your business growth by offering a comprehensive suite of payment solutions that drive higher conversions, reduce costs, and open new revenue streams.'
            )}
          </p>
          <div className='flex flex-row gap-6 justify-center'>
            <a href='/solutions' target='_blank'>
              <Button rounded size='large' variant='primary'>
                {t('Explore Our Solutions')}
              </Button>
            </a>
            <a href='/case-studies' target='_blank'>
              <Button rounded size='large' variant='secondary'>
                {t('See Case Studies')}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-20 bg-gray-100'>
        <h2 className='text-center text-4xl font-bold mb-10'>{t('What Our Clients Say')}</h2>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <p className='italic'>
              "UCanPay helped us expand our business to 50+ markets globally. Their API integration was seamless."
            </p>
            <span className='block mt-2 font-semibold'>- Jane Doe, CEO of TechCorp</span>
          </div>
          <div className='text-center'>
            <p className='italic'>
              "We increased our approval rates by 15% after switching to UCanPay’s optimization tools!"
            </p>
            <span className='block mt-2 font-semibold'>- John Smith, CFO of FinBiz</span>
          </div>
          <div className='text-center'>
            <p className='italic'>
              "Their global reach and fraud prevention tools make UCanPay an essential part of our payment stack."
            </p>
            <span className='block mt-2 font-semibold'>- Emily Johnson, COO of RetailHub</span>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className='bg-blue-500 text-white py-20'>
        <h2 className='text-center text-4xl font-bold mb-6'>{t('Ready to Turbocharge Your Payments?')}</h2>
        <p className='text-center text-xl mb-10'>
          {t('Get started with UCanPay today and experience seamless, secure, and scalable payment solutions.')}
        </p>
        <div className='flex justify-center'>
          <a href='/contact' target='_blank'>
            <Button rounded size='large' variant='primary'>
              {t('Get Started')}
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
