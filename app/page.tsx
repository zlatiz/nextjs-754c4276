import React from "react";
import Image from "next/image";
import Button from "../components/ui/button";
import Card from "../components/ui/card";
import Input from "../components/ui/input";

interface ImageItem {
  url: string;
  alt: string;
}

const IMAGES: ImageItem[] = [
  { url: "https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png", alt: "Garber Bros logo" },
  { url: "https://garberbrosinc.com/websites/garberbrosinc/images/home-vessels.jpg", alt: "Our Vessels" },
  { url: "https://garberbrosinc.com/websites/garberbrosinc/images/home-employment.jpg", alt: "Employment" },
  { url: "https://garberbrosinc.com/websites/garberbrosinc/images/home-contact.jpg", alt: "Contact Us" },
  { url: "https://garberbrosinc.com/Images/Transparent.html", alt: "Transparent Slide Background" },
  { url: "https://garberbrosinc.com/;%20%20%20%20%20%20%20%20//if%20we%20have%20the%20properties%20from%20the%20settings%20we%20pass%20them%20in%20and%20set%20up%20the%20resizer%20%20%20%20%20%20%20%20%20%20%20%20%20content%20=%20content%20+", alt: "Slide helper 1" },
  { url: "https://garberbrosinc.com/;%20%20%20%20%20%20%20%20//if%20we%20have%20the%20properties%20from%20the%20settings%20we%20pass%20them%20in%20and%20set%20up%20the%20resizer%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20content%20=%20content%20+", alt: "Slide helper 2" }
];

export default function Page(): React.ReactElement {
  const images = Array.isArray(IMAGES) ? IMAGES : [];

  return (
    <div className="container py-8">
      {/* Hero */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-8">
        <div className="md:col-span-1">
          <h1 className="text-3xl font-bold">Garber Bros Inc</h1>
          <p className="mt-4">For over 55 years, Garber Bros Inc., based in Morgan City, LA, has been a leading provider of marine transportation services for the offshore oil and gas industry. We pride ourselves on supplying the absolute best marine services to all types of industries. Contact Garber Bros Inc. for all your marine transportation and service needs.</p>
          <div className="mt-6">
            <a href="/vessels"><Button>View Our Fleet of Vessels</Button></a>
          </div>
        </div>
        <div className="md:col-span-2">
          {/* Large hero image (use second image if available) */}
          {images.length > 1 && (
            <div className="rounded-lg overflow-hidden shadow-sm">
              {(() => {
                const item = images[1];
                const safeSrc = encodeURI(item.url);
                return (
                  <Image src={safeSrc} alt={item.alt} unoptimized width={1200} height={560} style={{ width: '100%', height: 'auto' }} />
                );
              })()}
            </div>
          )}
        </div>
      </section>

      {/* Slider controls (non-functional anchors preserved) */}
      <div className="flex gap-4 mb-8">
        <a href="javascript:previousSlide6347994()" className="text-sm underline">Prev</a>
        <a href="javascript:nextSlide6347994()" className="text-sm underline">Next</a>
      </div>

      {/* Three tiles (Vessels / Employment / Contact) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <h2 className="text-lg font-semibold">Our Vessels</h2>
          <div className="mt-3">
            {images.length > 2 && (
              (() => {
                const item = images[1];
                const safeSrc = encodeURI(item.url);
                return <Image src={safeSrc} alt={item.alt} unoptimized width={400} height={200} />;
              })()
            )}
          </div>
          <p className="mt-3">Garber Bros Inc has an elite fleet of vessels of use in all types of projects.</p>
          <p className="mt-3"><a href="/vessels" className="text-blue-600 underline">View Our Vessels »</a></p>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold">Employment</h2>
          <div className="mt-3">
            {images.length > 2 && (
              (() => {
                const item = images[2];
                const safeSrc = encodeURI(item.url);
                return <Image src={safeSrc} alt={item.alt} unoptimized width={400} height={200} />;
              })()
            )}
          </div>
          <p className="mt-3">Interested in working at Garber Bros? Download our employment application.</p>
          <p className="mt-3"><a href="/websites/garberbrosinc/images/application.pdf" className="text-blue-600 underline">View Our Employment Application »</a></p>
          <p className="mt-2 text-sm"><a href="http://www.goodhiring.com/garberbrosinc/apply/open" className="text-blue-600 underline">External Application</a></p>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <div className="mt-3">
            {images.length > 3 && (
              (() => {
                const item = images[3];
                const safeSrc = encodeURI(item.url);
                return <Image src={safeSrc} alt={item.alt} unoptimized width={400} height={200} />;
              })()
            )}
          </div>
          <p className="mt-3">To contact Garber Bros Inc regarding vessel availability, click here.</p>
          <p className="mt-3"><a href="/contact" className="text-blue-600 underline">Contact Garber Bros Inc »</a></p>
          <p className="mt-2 text-sm"><a href="contact.aspx" className="text-blue-600 underline">contact.aspx</a></p>
        </Card>
      </section>

      {/* Secondary image grid / strip */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images && images.slice(0, 6).map((img, idx) => {
            const safeSrc = encodeURI(img.url);
            return (
              <div key={idx} className="card">
                <Image src={safeSrc} alt={img.alt} unoptimized width={320} height={180} />
              </div>
            );
          })}
        </div>
      </section>

      {/* Remaining images in gallery list */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-3">More Images</h2>
        <div className="flex flex-wrap gap-3">
          {images && images.slice(6).map((img, idx) => {
            const safeSrc = encodeURI(img.url);
            return (
              <div key={idx} className="w-40 card">
                <Image src={safeSrc} alt={img.alt} unoptimized width={160} height={90} />
              </div>
            );
          })}
        </div>
      </section>

      {/* Small contact input strip (visual only) */}
      <section className="card">
        <h2 className="text-lg font-semibold">Get in touch</h2>
        <p className="mt-2">For vessel availability and service inquiries, contact us.</p>
        <div className="mt-4 flex flex-col md:flex-row gap-3">
          <Input placeholder="Email or phone" />
          <Button>Contact Us</Button>
          <a href="#" className="self-start md:self-center text-sm text-blue-600 underline">Back to top</a>
        </div>
      </section>

    </div>
  );
}
