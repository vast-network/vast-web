import type { HeadFC, PageProps } from "gatsby"
import React, { useState } from 'react'
import { ArrowRight, Code, Shield, Zap, Puzzle, Rocket, ChevronDown } from 'lucide-react'
import vImg from "../images/v.svg";
import vLogo from "../images/vast.svg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const IndexPage: React.FC<PageProps> = () => {

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "What makes VAST different from other blockchain frameworks?",
      answer: "VAST stands out with its minimal, modular design that allows developers to customize their blockchain stack. Unlike other frameworks that come with a fixed set of features, VAST lets you choose and combine different modules for networking, consensus, storage, and runtime, tailoring the blockchain to your specific needs."
    },
    {
      question: "What virtual machines does VAST support?",
      answer: "VAST supports multiple virtual machines, including SVM, MoveVM, WebAssembly, and EVM. This flexibility allows developers to choose the best VM for their specific project needs and enables cross-VM interactions."
    },
    {
      question: "How does VAST ensure security?",
      answer: "VAST employs a robust, modular architecture designed for secure decentralized applications. Additionally, its transparent contract system, where smart contracts are uploaded as source code and compiled by 'compiler' nodes, enhances verifiability and auditing, mitigating potential attack vectors."
    },
    {
      question: "Can I upgrade my blockchain's functionality after deployment?",
      answer: "Yes, VAST is designed with future-proofing in mind. Core functionality is provided by upgradeable system contracts, not locked into binary installs. This allows for continuous evolution and improvement of your blockchain without compromising its integrity or requiring complex migration processes."
    },
    {
      question: "Is VAST suitable for enterprise use?",
      answer: "Absolutely. VAST's scalability, security features, and future-proof design make it an excellent choice for enterprises seeking a robust blockchain solution. Its modularity allows for customization to meet specific enterprise requirements."
    },
    {
      question: "Will the VAST ecosystem rely on a single client?",
      answer: "VAST aims to foster a broad and diverse collection of clients. Client diversity is critical for ensuring stability and resilience, avoiding downtime when a single implementation has a bug. While it will initially launch with Rust support, the roadmap includes expanding to languages like V, Go, and Zig."
    },
    {
      question: "How does VAST integrate with Celestia?",
      answer: "Every VAST chain is natively Celestia compatible, allowing for the pushing of blob data to the Celestia modular blockchain network. This integration further encourages and supports modular expansion of VAST-based projects."
    },
    {
      question: "How can I get started with VAST?",
      answer: "To get started with VAST, visit our documentation page for comprehensive guides and tutorials. You can also join our developer community for support and collaboration opportunities. Don't forget to check out our GitHub repository for the latest updates and to contribute to the project."
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
        <div className="w-full max-w-7xl flex justify-between items-center">
          <a className="flex items-center justify-center" href="#">
            <img src={vImg} className="h-12 w-12 mr-2" alt="VAST logo" />
            <span className="font-bold text-xl">VAST</span>
          </a>
          <nav className="flex gap-4 sm:gap-6">
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#features">
              Features
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#about">
              About
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#faq">
              FAQ
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <img src={vLogo} alt="VAST logo" />
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  The Future of Blockchain Development
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Redefine how you build decentralized applications with our minimal, modular blockchain framework.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Why VAST?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Speed</h3>
                <p className="text-gray-600">Faster transaction speeds and reduced latency.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Security</h3>
                <p className="text-gray-600">Robust, modular architecture for secure dApps.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Puzzle className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Flexibility</h3>
                <p className="text-gray-600">Multiple VM support tailored to your needs.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Code className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Succinctness</h3>
                <p className="text-gray-600">Clean, efficient codebase for faster development.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Rocket className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Future Proof</h3>
                <p className="text-gray-600">Upgradeable system contracts for continuous evolution.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <ChevronDown className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Transparent Contracts</h3>
                <p className="text-gray-600">Smart contracts uploaded as source for better auditing.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">The difference is VAST</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl text-center mx-auto mb-12">
              While other frameworks have become weighed down by unnecessary features, VAST focuses on delivering a streamlined, modular framework. With pluggable components for Networking, Consensus, Storage, Runtime, and Interoperability, VAST empowers you to build a blockchain that meets your project's unique requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Modular Design</li>
                  <li>Multi-VM Support</li>
                  <li>Core Contracts</li>
                  <li>Smart Contract Extensibility</li>
                  <li>Client Diversity</li>
                  <li>Celestia Compatibility</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Who Is VAST For?</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Developers seeking faster, more efficient blockchain development</li>
                  <li>Projects requiring modularity and flexibility</li>
                  <li>Enterprises looking for scalable, secure, and future-proof blockchain solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join the VAST Ecosystem
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Be part of the next evolution in blockchain technology. With VAST, you're not just building on a blockchain – you're building a custom, flexible, and future-proof decentralized network.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-xs text-gray-500">© 2024 VAST. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            {/* Footer navigation links can be added here if needed */}
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Something VAST is coming...</title>