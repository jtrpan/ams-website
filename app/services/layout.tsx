import PageIllustration from '@/components/page-illustration'
import Footer from "@/components/ui/footer";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <main className="grow">

      <PageIllustration />

      {children}

      <Footer />

    </main>
  )
}
