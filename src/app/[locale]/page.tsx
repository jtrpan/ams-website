import { useTranslations } from 'next-intl'
import Button from './components/Button'
import Image from 'next/image'

export default function DashboardPage() {
  const t = useTranslations('')

  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-24 bg-cover bg-center">
        <h1 className="text-center text-7xl font-extrabold leading-tight">
          {t('UCanPay')}{' '}
          <span className="bg-span-bg bg-clip-text text-transparent">
            {t('AMS_Project')}
          </span>
          <br />
          {t('Home_Title')}
        </h1>
        <div className="my-6 px-20 text-center text-2xl text-text-secondary">
          {t(
            'Home_Tagline'
          )}
        </div>
        <Image
          src="/images/card8.webp"
          alt="POS Terminal"
          width={900}
          height={400}
          className="my-8 rounded-lg shadow-lg"
        />
        <div className="mt-4 flex flex-row gap-4">
          <a href="/en/contact" target="_blank">
            <Button rounded size="large">
              {t('Contact_Us')}
            </Button>
          </a>
          <a href="/en/about/about-us" target="_blank">
            <Button rounded size="large" variant="secondary">
              {t('Learn_More')}
            </Button>
          </a>
        </div>
      </section>

      {/* Paragraph Section */}
      <section className="bg-selected py-20 max-lg:py-10">
        <div className="mx-auto max-w-screen-lg text-center">
          <h2 className="text-4xl font-bold mb-2 text-black dark:text-white">{t('Powering_the_future_of_payments')}</h2>
          <div className="flex justify-center py-8">
            <Image
              src="/images/future2.webp"
              alt="Future"
              width={900}
              height={400}
              className="rounded-xl"
            />
          </div>

          <p className="text-xl mb-10 text-gray-700 dark:text-gray-300">
            {t(
              'At_UCanPay_we_empower'
            )}
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-background-secondary py-20 max-lg:py-10">
        <div className="mx-auto max-w-screen-lg text-center">
          <h2 className="text-4xl font-bold mb-2 text-black dark:text-white">{t('Features')}</h2>
        </div>
        <div
          className="mx-auto grid max-w-screen-lg grid-cols-3 gap-14 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10">
          <div className="text-center">
            <h2 className="mb-3  text-xl font-semibold">{t('Secure_Payments')}</h2>
            <p className="text-text-secondary max-lg:max-w-[500px]">
              {t(
                'Ensure_highest_payment_security'
              )}
            </p>
          </div>
          <div className="text-center">
            <h2 className="mb-3 text-xl font-semibold">{t('Global_Reach')}</h2>
            <p className="text-text-secondary max-lg:max-w-[500px]">
              {t(
                'Expand_your_business_into_150_currencies'
              )}
            </p>
          </div>
          <div className="text-center">
            <h2 className="mb-3 text-xl font-semibold">{t('Flexible_Integration')}</h2>
            <p className="text-text-secondary max-lg:max-w-[500px]">
              {t(
                'Seamlessly_integrate_with_API_SDKs'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Why UCanPay Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-lg text-center">
          <h2 className="text-4xl font-bold mb-8 text-black dark:text-white">{t('Why_Choose_UCanPay')}</h2>
          <p className="text-xl mb-2 text-gray-700 dark:text-gray-300">
            {t(
              'UCanPay_designed_to_accelerate_growth'
            )}
          </p>
          <div className="flex justify-center py-8">
            <Image
              src="/images/office1.webp"
              alt="Office"
              width={800}
              height={400}
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-row gap-6 justify-center">
            <a href="/en/solutions/merchant-solutions" target="_blank">
              <Button rounded size="large" variant="primary">
                {t('Explore_Our_Solutions')}
              </Button>
            </a>
            <a href="/en/resources/case-studies" target="_blank">
              <Button rounded size="large" variant="secondary">
                {t('See_Case_Studies')}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-center text-4xl font-bold mb-10 text-black dark:text-white">
          {t('What_Our_Clients_Say')}
        </h2>
        <div
          className="mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10">
          <div className="text-center">
            <p className="italic text-gray-700 dark:text-gray-300">
              &quot;UCanPay made it simple to accept WeChat Pay and Alipay. It’s been a game changer for our Chinese
              customers.&quot;
            </p>
            <span className="block mt-2 font-semibold text-black dark:text-white">- Michelle Zhang, Owner of Golden Lotus Restaurant, Toronto</span>
          </div>
          <div className="text-center">
            <p className="italic text-gray-700 dark:text-gray-300">
              &quot;Switching to UCanPay reduced our settlement time and helped cut down processing fees by over
              20%&quot;
            </p>
            <span className="block mt-2 font-semibold text-black dark:text-white">- Eric Liu, Manager at New Era Mart, Vancouver</span>
          </div>
          <div className="text-center">
            <p className="italic text-gray-700 dark:text-gray-300">
              &quot;As a small business, I needed something fast, affordable, and trusted. UCanPay delivered.&quot;
            </p>
            <span
              className="block mt-2 font-semibold text-black dark:text-white">- Cindy Huang, Co-Founder of T-Time Bubble Tea</span>
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="bg-blue-500 text-white py-20">
        <h2 className="text-center text-4xl font-bold mb-6">{t('Ready_to_Turbocharge_Your_Payments')}</h2>
        <p className="text-center text-xl mb-10">
          {t('Get_started_with_UCanPay_today')}
        </p>
        <div className="flex justify-center">
          <a href="/en/contact" target="_blank">
            <Button rounded size="large" variant="primary">
              {t('Get_Started')}
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}
