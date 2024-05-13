"use client";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  return (
    <>
      <Navbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
      <HeroSection />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}
