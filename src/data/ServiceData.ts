import { StaticImageData } from "next/image";

import service_Icon1 from "@/assets/img/service/icon.svg";
import service_Icon2 from "@/assets/img/service/icon-2.svg";
import service_Icon3 from "@/assets/img/service/icon-3.svg";
import service_Icon4 from "@/assets/img/service/icon-4.svg";
import service_Icon5 from "@/assets/img/service/icon-5.svg";
import service_Icon6 from "@/assets/img/service/icon-6.svg";

import service_thumb1 from "@/assets/img/service/05.jpg";
import service_thumb2 from "@/assets/img/service/06.jpg";
import service_thumb3 from "@/assets/img/service/07.jpg";
import service_thumb4 from "@/assets/img/service/08.jpg";
import service_thumb5 from "@/assets/img/service/09.jpg";
import service_thumb6 from "@/assets/img/service/10.jpg";

interface DataType {
  id: number;
  page: string;
  icon: StaticImageData;
  title: string;
  desc: string;
  data_wow_delay?: string;
}
[];

const service_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    data_wow_delay: "0.3s",
    icon: service_Icon4,
    title: "Vocals Department",
    desc: `<ol type="1">
            <li>Hindustani Classical Vocals (Beginner) – Learn Swara, Alankars & Raagas</li>
            <li>Advanced Hindustani Vocals – Master Raag development & Bandish</li>
            <li>Tabla for Live
Accompaniment – Master the art of playing alongside vocals</li>
            <li>Fusion & Experimental
Tabla – Blend traditional beats with modern styles
</li>
          </ol>`,
  },
  {
    id: 2,
    page: "home_1",
    data_wow_delay: "0.5s",
    icon: service_Icon5,
    title: "Harmonium Department",
    desc: `<ol type="1">
            <li>Harmonium Basics – Learn keys, notes & playing techniques</li>
            <li>Raag-Based
Harmonium – Explore classical & semi-classical playing styles</li>
            <li>Live Performance
Harmonium – Techniques for accompanying singers & instrumentalists</li>
            <li>Ghazal &
Bhajan Harmonium – Specialize in expressive playing for devotional music
</li>
          </ol>`,
  },
  {
    id: 3,
    page: "home_1",
    data_wow_delay: "0.7s",
    icon: service_Icon6,
    title: "Live Music & Performance Training",
    desc: `<ol type="1">
            <li>Stage Performance Mastery – Overcome stage fear & build confidence</li>
            <li>Sound &
Microphone Handling – Learn technical aspects of live shows</li>
            <li>Fusion &
Contemporary Music – Blend Indian classical with modern music</li>
            <li>Professional Artist
Development – Get trained for concerts & industry gigs
</li>
          </ol>`,
  },
  {
    id: 4,
    page: "home_1",
    data_wow_delay: "0.3s",
    icon: service_Icon4,
    title: "Tabla Department",
    desc: `<ol type="1">
              <li>Basic Tabla Techniques – Understanding Taal, Theka & hand positioning</li>
              <li>Advanced
Tabla Training – Learn Kayda, Rela & complex rhythms</li>
              <li>Tabla for Live
Accompaniment – Master the art of playing alongside vocals</li>
              <li>Fusion & Experimental
Tabla – Blend traditional beats with modern styles

  </li>
            </ol>`,
  },
  //   {
  //     id: 5,
  //     page: "home_1",
  //     data_wow_delay: "0.5s",
  //     icon: service_Icon5,
  //     title: "House Renovation",
  //     desc: "We have facility to produce advance work various industrial applications based on specially developed technol-ogy.",
  //   },
  //   {
  //     id: 6,
  //     page: "home_1",
  //     data_wow_delay: "0.7s",
  //     icon: service_Icon6,
  //     title: "Green Building",
  //     desc: "We have facility to produce advance work various industrial applications based on specially developed technol-ogy.",
  //   },

  // home_3

  {
    id: 1,
    page: "inner_page",
    data_wow_delay: ".3s",
    icon: service_thumb1,
    title: "Personal Growth Mastery",
    desc: "Transform your mindset and unlock your full potential with powerful strategies for self-improvement and success.",
  },
  {
    id: 2,
    page: "inner_page",
    data_wow_delay: ".5s",
    icon: service_thumb2,
    title: "Confidence & Leadership",
    desc: "Develop unshakable confidence, enhance leadership skills, and learn to influence and inspire those around you.",
  },
  {
    id: 3,
    page: "inner_page",
    data_wow_delay: ".7s",
    icon: service_thumb3,
    title: "Overcoming Limiting Beliefs",
    desc: "Break free from self-doubt and limiting beliefs that hold you back, and step into a life of purpose and abundance.",
  },
  {
    id: 4,
    page: "inner_page",
    data_wow_delay: ".3s",
    icon: service_thumb4,
    title: "Peak Performance Coaching",
    desc: "Achieve peak performance in your personal and professional life with proven techniques for focus, discipline, and motivation.",
  },
  {
    id: 5,
    page: "inner_page",
    data_wow_delay: ".5s",
    icon: service_thumb5,
    title: "Mindfulness & Stress Management",
    desc: "Learn powerful mindfulness techniques to manage stress, enhance mental clarity, and cultivate a peaceful, balanced life.",
  },
  {
    id: 6,
    page: "inner_page",
    data_wow_delay: ".7s",
    icon: service_thumb6,
    title: "Success & Goal Setting",
    desc: "Design a roadmap to success with actionable goal-setting strategies that turn dreams into reality.",
  },
];

export default service_data;
