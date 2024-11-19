import Image from "next/image";
import BrandPen from '../app/assets/Brand-Pen.svg'

export default function Home() {
  return (
    <div className="h-screen py-16">
      <div className="flex flex-col gap-12 px-4">
        <section className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-[#111827] text-3xl leading-8 tracking-tight font-extrabold">Engage with your audience</h2>
          <p className="text-xl leading-7 font-normal text-[#6B7280]">With Along With, you can invite your community to join you in real-time, cooking along with you and sharing the joy of culinary creation.</p>
        </section>
        
      </div>
    </div>
  );
}
