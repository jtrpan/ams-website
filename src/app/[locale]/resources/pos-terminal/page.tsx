import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function POSTerminal() {
  const t = useTranslations('pos_terminal') // Use 'terminal' as the namespace

  return (
    <div className="px-10 lg:px-32 py-24 text-center">
      {/* Main Heading */}
      <h1 className="text-5xl font-bold leading-tight mb-12">{t('title')}</h1>
      <p className="mb-8 text-lg text-text-secondary">{t('desc')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="relative w-full aspect-[11/8] overflow-hidden rounded-xl">
          <Image
            src="/images/pos10.webp"
            alt="POS"
            fill
            className="rounded-xl"
          />
        </div>
        <div className="relative w-full aspect-[11/8] overflow-hidden rounded-xl">
          <Image
            src="/images/pos14.webp"
            alt="POS"
            fill
            className="rounded-xl"
          />
        </div>
      </div>

      {/* Section 1: terminal */}
      <div className="mb-24">
        <h2 className="text-4xl font-semibold mb-12">{t('subtitle1')}</h2>
        <p className="mb-8 text-lg text-text-secondary">{t('desc1')}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="relative w-full aspect-[11/8] overflow-hidden rounded-xl">
            <Image
              src="/images/pos_scanner.webp"
              alt="POS Scanner"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="relative w-full aspect-[11/8] overflow-hidden rounded-xl">
            <Image
              src="/images/pos_quickscan.webp"
              alt="POS Quickscan"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Card 1 */}

          <div className="p-6 bg-background-secondary rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="mb-4 text-primary">
              <span className="text-6xl">🏦</span>
            </div>
            <h3 className="text-3xl font-semibold mb-4">{t('point1')}</h3>
            <p className="text-lg text-text-secondary">{t('text1')}</p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="mb-4 text-primary">
              <span className="text-6xl">💳</span>
            </div>
            <h3 className="text-3xl font-semibold mb-4">{t('point2')}</h3>
            <p className="text-lg text-text-secondary">{t('text2')}</p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="mb-4 text-primary">
              <span className="text-6xl">🛡️</span>
            </div>
            <h3 className="text-3xl font-semibold mb-4">{t('point3')}</h3>
            <p className="text-lg text-text-secondary">{t('text3')}</p>
          </div>

          {/* Card 4 */}
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="mb-4 text-primary">
              <span className="text-6xl">💼</span>
            </div>
            <h3 className="text-3xl font-semibold mb-4">{t('point4')}</h3>
            <p className="text-lg text-text-secondary">{t('text4')}</p>
          </div>
        </div>
      </div>

      {/* Section 2: Certifications */}
      <div className="mb-24">
        <h2 className="text-4xl font-semibold mb-12">{t('subtitle2')}</h2>
        <p className="mb-8 text-lg text-text-secondary">{t('desc2')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="relative w-full aspect-[11/8] overflow-hidden rounded-xl">
            <Image
              src="/images/pos4.webp"
              alt="POS"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <div className="relative w-full aspect-[11/8] overflow-hidden rounded-xl">
            <Image
              src="/images/pos13.webp"
              alt="POS"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 5 */}
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="mb-4 text-primary">
              <span className="text-6xl">🔐</span>
            </div>
            <h3 className="text-3xl font-semibold mb-4">{t('point5')}</h3>
            <p className="text-lg text-text-secondary">{t('text5')}</p>
          </div>

          {/* Card 6 */}
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="mb-4 text-primary">
              <span className="text-6xl">📜</span>
            </div>
            <h3 className="text-3xl font-semibold mb-4">{t('point6')}</h3>
            <p className="text-lg text-text-secondary">{t('text6')}</p>
          </div>

          {/* Card 7 */}
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="mb-4 text-primary">
              <span className="text-6xl">🧑‍⚖️</span>
            </div>
            <h3 className="text-3xl font-semibold mb-4">{t('point7')}</h3>
            <p className="text-lg text-text-secondary">{t('text7')}</p>
          </div>

          {/* Card 8 */}
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="mb-4 text-primary">
              <span className="text-6xl">🏅</span>
            </div>
            <h3 className="text-3xl font-semibold mb-4">{t('point8')}</h3>
            <p className="text-lg text-text-secondary">{t('text8')}</p>
          </div>

          {/* Card 9 */}
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="mb-4 text-primary">
              <span className="text-6xl">💡</span>
            </div>
            <h3 className="text-3xl font-semibold mb-4">{t('point9')}</h3>
            <p className="text-lg text-text-secondary">{t('text9')}</p>
          </div>

          {/* Card 10 */}
          <div className="p-6 bg-background-secondary rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="mb-4 text-primary">
              <span className="text-6xl">🔍</span>
            </div>
            <h3 className="text-3xl font-semibold mb-4">{t('point10')}</h3>
            <p className="text-lg text-text-secondary">{t('text10')}</p>
          </div>
        </div>
      </div>

      {/* Section 3: Why Our Certifications Matter */}
      <div className="mb-10">
        <h2 className="text-4xl font-semibold mb-12">{t('subtitle3')}</h2>
        <p className="mb-1 text-lg text-text-secondary">{t('desc3')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-14">
        <div className="flex justify-center">
          <Image
            src="/images/pos8.webp"
            alt="POS"
            width={450}
            height={675} // 2:3 aspect ratio
            className="rounded-xl w-full max-w-[450px] h-auto"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/pos12.webp"
            alt="POS"
            width={450}
            height={675} // 2:3 aspect ratio
            className="rounded-xl w-full max-w-[450px] h-auto"
          />
        </div>
      </div>


      {/* Section 4: Building Trust */}
      <div className="mb-10">
        <h2 className="text-4xl font-semibold mb-12">{t('subtitle4')}</h2>
        <p className="text-lg text-text-secondary">{t('desc4')}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="relative w-full aspect-[11/8] overflow-hidden rounded-xl">
          <Image
            src="/images/pos5.webp"
            alt="POS"
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="relative w-full aspect-[11/8] overflow-hidden rounded-xl">
          <Image
            src="/images/pos9.webp"
            alt="POS"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}
