import Navbar from '@/components/landing/Navbar'
import Hero from '@/components/landing/Hero'
import HowItWorks from '@/components/landing/HowItWorks'
import Features from '@/components/landing/Features'
import Pricing from '@/components/landing/Pricing'
import Footer from '@/components/landing/Footer'

export default function Home() {
    return (
        <main className="">
            <Navbar />
            <Hero />
            <HowItWorks />
            <Features />
            <Pricing />
            <Footer />
        </main>
    )
}
