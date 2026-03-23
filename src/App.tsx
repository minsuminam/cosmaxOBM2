/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  Beaker, 
  Palette, 
  Package, 
  Factory, 
  Lightbulb, 
  Target,
  ArrowRight,
  Globe,
  Award,
  Users
} from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold tracking-tighter text-cosmax-navy">COSMAX</span>
        <span className="text-xs font-semibold px-2 py-0.5 bg-cosmax-gold text-white rounded">OBM</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
        <a href="#about" className="hover:text-cosmax-navy transition-colors">About OBM</a>
        <a href="#process" className="hover:text-cosmax-navy transition-colors">Process</a>
        <a href="#services" className="hover:text-cosmax-navy transition-colors">Services</a>
        <a href="#stories" className="hover:text-cosmax-navy transition-colors">Success Stories</a>
      </div>
      <button className="bg-cosmax-navy text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all">
        Contact Us
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
    <div className="absolute inset-0 z-0">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="w-full h-full object-cover opacity-60"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-skin-care-routine-of-a-woman-44342-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
    </div>
    <div className="relative z-10 text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block text-cosmax-gold font-bold tracking-widest uppercase text-sm mb-4 drop-shadow-lg">
          Global No.1 Beauty Partner
        </span>
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-8 leading-[0.9] drop-shadow-2xl">
          COSMAX <br />
          <span className="text-cosmax-gold italic font-serif">OBM</span> SERVICE
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-zinc-200 mb-10 text-balance drop-shadow-md">
          브랜드 기획부터 제품 개발, 마케팅 전략까지. <br />
          코스맥스의 독보적인 기술력으로 당신의 뷰티 비즈니스를 완성합니다.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-cosmax-gold text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 group hover:scale-105 transition-transform shadow-lg">
            서비스 문의하기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors">
            포트폴리오 보기
          </button>
        </div>
      </motion.div>
    </div>
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-px h-12 bg-cosmax-gold" />
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cosmax-navy mb-8 leading-tight">
            What is <span className="text-cosmax-gold">OBM?</span>
          </h2>
          <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
            OBM(Original Brand Manufacturing)은 단순한 위탁 생산을 넘어, <br />
            <span className="font-bold text-zinc-900">브랜드 컨셉 기획부터 제품 개발, 마케팅 전략, 패키징</span>까지 <br />
            비즈니스의 전 과정을 고객과 함께하며 성공적인 시장 진입을 지원하는 <br />
            코스맥스만의 토탈 솔루션 서비스입니다.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="p-6 bg-zinc-50 rounded-2xl">
              <div className="text-3xl font-bold text-cosmax-navy mb-2">600+</div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Global Clients</div>
            </div>
            <div className="p-6 bg-zinc-50 rounded-2xl">
              <div className="text-3xl font-bold text-cosmax-navy mb-2">30+</div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">Years Experience</div>
            </div>
          </div>
        </motion.div>
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
              alt="Lab work" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cosmax-gold/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-cosmax-navy/5 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </div>
  </section>
);

const Process = () => {
  const steps = [
    { icon: Target, title: "Strategy", desc: "시장 분석 및 타겟 설정" },
    { icon: Lightbulb, title: "Brand Concept", desc: "브랜드 아이덴티티 수립" },
    { icon: Palette, title: "Design", desc: "비주얼 및 패키지 디자인" },
    { icon: Beaker, title: "Formulation", desc: "독자적 제형 개발" },
    { icon: Package, title: "Packaging", desc: "최적의 부자재 매칭" },
    { icon: Factory, title: "Manufacturing", desc: "글로벌 표준 생산" },
  ];

  return (
    <section id="process" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cosmax-navy mb-4">Beauty from Start to Finish</h2>
          <p className="text-zinc-500">코스맥스 OBM 서비스의 체계적인 프로세스</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-zinc-100 flex flex-col items-center text-center group hover:border-cosmax-gold transition-colors"
            >
              <div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-cosmax-gold/10 transition-colors">
                <step.icon className="w-6 h-6 text-cosmax-navy group-hover:text-cosmax-gold transition-colors" />
              </div>
              <h3 className="font-bold text-zinc-900 mb-2">{step.title}</h3>
              <p className="text-xs text-zinc-500 leading-tight">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Beyond Product Development",
      desc: "단순한 제품 개발을 넘어 디자인과 상표권 확보까지 아우르는 브랜드 구축 역량을 보유하고 있습니다.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "The Future of Beauty",
      desc: "연구와 혁신이 핵심입니다. 제품의 90%가 자체 R&I 센터에서 개발되었으며 지속적으로 최적화됩니다.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Your Vision, Our Tech",
      desc: "코스맥스에서만 독점적으로 제공하는 업계 최고의 포뮬러와 상표 기술로 경쟁 우위를 선점하세요.",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-cosmax-navy mb-4">What We Do</h2>
            <p className="text-lg text-zinc-600">코스맥스는 고객의 아이디어를 현실로 만드는 가장 강력한 기술 파트너입니다.</p>
          </div>
          <button className="text-cosmax-navy font-bold flex items-center gap-2 hover:gap-3 transition-all">
            전체 서비스 보기 <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3">{service.title}</h3>
              <p className="text-zinc-500 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SuccessStories = () => {
  const stories = [
    {
      brand: "florevida",
      title: "삼성물산 에버랜드의 뷰티 브랜드",
      desc: "에버로즈의 향기와 생명력을 담은 라이프스타일 프래그런스 브랜드",
      image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=800"
    },
    {
      brand: "PURCELL",
      title: "마이크로바이옴 독점 원료 개발",
      desc: "프로바이오틱스가 선사하는 장벽 초월 PIXCELL BIOM™ 원료 메인 소구",
      image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&q=80&w=800"
    },
    {
      brand: "EMISSARY.73",
      title: "국내 최대 호텔그룹 어메니티",
      desc: "브랜드 완성도, 시그니처 향, 프리미엄 사용감 및 패키지 혁신성 제고",
      image: "https://images.unsplash.com/photo-1563125287-17914cd1e87c?auto=format&fit=crop&q=80&w=800"
    },
    {
      brand: "단미르",
      title: "궁궐의 향을 복원한 브랜드",
      desc: "조선시대 왕실의 향기를 복원하여 국가유산청과 공동 개발",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="stories" className="py-24 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Real Success Stories</h2>
          <p className="text-zinc-400">코스맥스 OBM과 함께 탄생한 성공적인 브랜드들</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={story.image} 
                  alt={story.brand} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-cosmax-gold font-bold text-xl mb-1">{story.brand}</div>
              <h3 className="font-bold text-sm mb-2 text-zinc-300">{story.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">{story.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 bg-white border-t border-zinc-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl font-bold tracking-tighter text-cosmax-navy">COSMAX</span>
            <span className="text-xs font-semibold px-2 py-0.5 bg-cosmax-gold text-white rounded">OBM</span>
          </div>
          <p className="text-zinc-500 max-w-sm leading-relaxed">
            코스맥스는 전 세계 600여 개 브랜드에 제품을 공급하는 글로벌 No.1 화장품 연구·개발·생산 기업입니다.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-zinc-900 mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><a href="#" className="hover:text-cosmax-navy">Company</a></li>
            <li><a href="#" className="hover:text-cosmax-navy">Sustainability</a></li>
            <li><a href="#" className="hover:text-cosmax-navy">R&I Center</a></li>
            <li><a href="#" className="hover:text-cosmax-navy">Global Network</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-zinc-900 mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li>obm_service@cosmax.com</li>
            <li>+82 31-789-3000</li>
            <li>경기도 성남시 분당구 판교로 255</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
        <p>© 2026 COSMAX. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-zinc-600">Privacy Policy</a>
          <a href="#" className="hover:text-zinc-600">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Process />
        <Services />
        <SuccessStories />
      </main>
      <Footer />
    </div>
  );
}
