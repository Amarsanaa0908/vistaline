import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Terms of Service | VISTALINE",
  description: "VISTALINE terms of service - the rules and regulations for using our website and services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Terms of Service</span>
          </nav>

          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: December 2, 2025</p>

          <div className="prose prose-slate max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the VISTALINE website (Site), you agree to be bound by these Terms of Service and
                  all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited
                  from using or accessing this site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use License</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Permission is granted to temporarily access the materials on VISTALINEs website for personal,
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and
                  under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to reverse engineer any software contained on the Site</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or mirror the materials on any other server</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Products and Pricing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All products displayed on the Site are subject to availability. We reserve the right to discontinue
                  any product at any time. Prices are subject to change without notice.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We make every effort to display accurate colors and images of our products. However, we cannot
                  guarantee that your computer monitors display will accurately reflect the actual colors of our
                  products.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Orders and Payment</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">By placing an order, you warrant that:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>You are legally capable of entering into binding contracts</li>
                  <li>All information you provide is true, accurate, and complete</li>
                  <li>You will pay for all products ordered through your account</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We reserve the right to refuse or cancel any order for any reason, including but not limited to
                  product availability, errors in pricing or product information, or suspected fraud.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Shipping and Delivery</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Shipping times are estimates only and are not guaranteed. We are not responsible for delays caused by
                  shipping carriers, customs, or circumstances beyond our control.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier. You
                  are responsible for filing any claims with carriers for damaged or lost shipments.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Returns and Refunds</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We offer a 30-day return policy for unworn items in original condition with all tags attached. To
                  initiate a return:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Contact our customer service team within 30 days of delivery</li>
                  <li>Items must be unworn, unwashed, and in original packaging</li>
                  <li>Refunds will be processed to the original payment method within 5-10 business days</li>
                  <li>Sale items may be final sale and not eligible for return</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this Site, including text, graphics, logos, images, and software, is the property of
                  VISTALINE or its content suppliers and is protected by international copyright laws. The compilation of all
                  content on this Site is the exclusive property of VISTALINE.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall VISTALINE or its suppliers be liable for any damages (including, without limitation,
                  damages for loss of data or profit, or due to business interruption) arising out of the use or
                  inability to use the materials on VISTALINEs website, even if VISTALINE or an authorized representative has
                  been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of the State of
                  New York, and you irrevocably submit to the exclusive jurisdiction of the courts in that State.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to revise these terms at any time without notice. By using this Site, you agree
                  to be bound by the current version of these terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Questions about the Terms of Service should be sent to us at:
                </p>
                <div className="mt-4 p-4 rounded-lg bg-muted/50">
                  <p className="text-foreground font-medium">VISTALINE Legal Department</p>
                  <p className="text-muted-foreground">123 Fashion Ave, New York, NY 10001</p>
                  <p className="text-muted-foreground">Email: legal@VISTALINE.com</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
