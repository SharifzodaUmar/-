import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import bg from "./assets/bg.png";
import s1 from "./assets/s1.png";
import s2 from "./assets/s2.png";
import s3 from "./assets/s3.png";
import s4 from "./assets/s4.png";
import s5 from "./assets/s5.png";
import s6 from "./assets/s6.png";
import s7 from "./assets/s7.png";
import s8 from "./assets/s8.png";
import s9 from "./assets/s9.png";
import s10 from "./assets/s10.png";
import p1 from "./assets/p1.png";
import p2 from "./assets/p2.png";
function App() {
function  deleteUser(id) {
  users=users.filter((e)=>e.id!=id)
  setUsers(users)
}
let [users,setUsers]=useState([
  {
    image:`${p1}`,
    des:"Частный дом 400 м²",
    job:'Монтаж оборудования',
    id:1

  },
  {
    image:`${p2}`,
    des:" Частный дом 200 м²",
    job:'Под ключ',
    id:2
  },
  {
    image:`${p1}`,
    des:" Частный дом 200 м²",
    job:'Под ключ',
    id:3
  },
  {
    image:`${p2}`,
    des:" Частный дом 200 м²",
    job:'Под ключ',
    id:4
  }
])



  return (
    <div>
      <header className="w-full h-[72px] bg-[#4F4F4F] flex items-center justify-between px-[60px] text-white font-[500] text-[18px]">
        <ul className="flex items-center gap-[30px]">
          <p>О компании</p>
          <p>Услуги</p>
          <p>Оборудование</p>
          <p>Статьи</p>
          <p>Наши работы</p>
        </ul>
        <p>Контакты</p>
      </header>
      <section className="w-full h-[265px] flex items-center justify-between">
        <article className="w-full h-[265px] relative flex p-[10px] flex-col gap-[5px] items-start ">
          <img src={s1} alt="" />
          <p>Монтаж отопления и водоснабжения</p>
          <p>+7 (495) 369 00 50</p>
          <p>
            Понедельник – пятница <br />
            09:00 – 18:00
          </p>
          <p>mail@termoproect.ru</p>
          <img className="absolute z-10 bottom-0 right-0" src={s2} alt="" />
        </article>

        <img className="w-[1260px]" src={bg} alt="" />
      </section>
      <section className="w-[1400px] m-auto h-[250px] my-[100px]">
        <p className="text-[#475569]">Главная / Монтаж систем отопления</p>
        <p className="text-[56px] font-[800] ">Монтаж систем отопления</p>
        <p className="text-[24px]">
          Больше 15 лет «Термопроект» профессионально выполняет монтаж отопления
          «под ключ». На  основе приобретенного опыта и теоретических знаний мы
          готовы поделиться полезной информацией с нашими клиентами. Выбирайте
          те или иные <br /> отопительные системы у нас с учетом типов
          применяемого топлива, функциональных возможностей техники, источников
          <br /> получения энергии. 
        </p>
      </section>
      <p className="text-[48px] font-[800] text-center">
        Наши специалисты помогут вам
      </p>
      <br />
      <p className="text-center text-[#475569] text-[20px]">
        Вы можете доверить нам обустройство системы отопления под ключ или
        отдельные этапы
      </p>
      <section className="w-[1280px] h-[450px] flex items-center justify-between flex-wrap  m-auto gap-[40px]">
        <article className="w-[394px] h-[206px] flex flex-col  items-start justify-between ">
          <img src={s3} alt="" />
          <p className="text-[24px] font-[700]">
            Проектирование систем <br /> отопления
          </p>
          <p className="text-[#475569] text-[18px]">
            Viverra netus odio nunc ac nibh lorem iaculis. Orci facilisis
            habitasse cursus tempor et.
          </p>
        </article>
        <article className="w-[394px] h-[206px] flex flex-col  items-start justify-between ">
          <img src={s4} alt="" />
          <p className="text-[24px] font-[700]">
            Проектирование систем <br /> отопления
          </p>
          <p className="text-[#475569] text-[18px]">
            Viverra netus odio nunc ac nibh lorem iaculis. Orci facilisis
            habitasse cursus tempor et.
          </p>
        </article>
        <article className="w-[394px] h-[206px] flex flex-col  items-start justify-between ">
          <img src={s5} alt="" />
          <p className="text-[24px] font-[700]">
            Проектирование систем <br /> отопления
          </p>
          <p className="text-[#475569] text-[18px]">
            Viverra netus odio nunc ac nibh lorem iaculis. Orci facilisis
            habitasse cursus tempor et.
          </p>
        </article>
        <article className="w-[394px] h-[206px] flex flex-col  items-start justify-between ">
          <img src={s6} alt="" />
          <p className="text-[24px] font-[700]">
            Проектирование систем <br /> отопления
          </p>
          <p className="text-[#475569] text-[18px]">
            Viverra netus odio nunc ac nibh lorem iaculis. Orci facilisis
            habitasse cursus tempor et.
          </p>
        </article>
        <article className="w-[394px] h-[206px] flex flex-col  items-start justify-between ">
          <img src={s7} alt="" />
          <p className="text-[24px] font-[700]">
            Проектирование систем <br /> отопления
          </p>
          <p className="text-[#475569] text-[18px]">
            Viverra netus odio nunc ac nibh lorem iaculis. Orci facilisis
            habitasse cursus tempor et.
          </p>
        </article>
        <article className="w-[394px] h-[206px] flex flex-col  items-start justify-between ">
          <img src={s8} alt="" />
          <p className="text-[24px] font-[700]">
            Проектирование систем <br /> отопления
          </p>
          <p className="text-[#475569] text-[18px]">
            Viverra netus odio nunc ac nibh lorem iaculis. Orci facilisis
            habitasse cursus tempor et.
          </p>
        </article>
      </section>
      <section className="relative w-[1440px] h-[434px] bg-gradient-to-r from-[#1B749C] to-[#FE5033] m-auto rounded-2xl mt-[200px]">
        <img src={s9} className="absolute bottom-0  left-[100px]" alt="" />
        <div className="w-[830px]  text-white absolute right-[100px] flex flex-col items-start justify-between top-[50px]">
          <p className=" font-[800] text-[56px]">
            Удалённое GSM-управление <br /> в подарок при заказе <br /> от 700
            000 ₽
          </p>
          <button className="w-[249px] h-[64px] text-black rounded-xl text-[24px] font-[700] bg-white">
            Подробнее ➡️
          </button>
        </div>
      </section>



<section className="w-[1440px] h-[528px] m-auto flex items-center justify-between my-[100px]">
<img src={s10} alt="" />
<article className="w-[864px] h-[528px] flex flex-col items-start justify-between"> 
  <p>Что входит:</p>
  <p>•проектирование <br />
•монтаж  <br />
•обслуживание <br />
•обслуживание <br />
•обслуживание <br /> 
•обслуживание</p>
<p className="text-[18px] font-[500]">Примерная стоимость:</p>
<p className="text-[32px] font-[700]">от 80 000 ₽ *</p>
<p className="text-[18px] text-[#475569]">*Предложение не является публичной офертой</p>
<p className="text-[18px] text-[#475569]">Для дома другой площади, вы можете самостоятельно рассчитать стоимость отопления на нашем <br /> калькуляторе.</p>
<button className="w-[362px] bg-[#EA580C] h-[48px] rounded-xl flex items-center text-[14px] text-white font-[600] justify-center">Посчитать точнее на калькуляторе
Заказать бесплатную оценку</button>
</article>
</section>
  

<section className="w-[90%] flex flex-col items-start justify-between h-[450px] m-auto">
  <p className="font-[800] text-[48px]">Примеры работ</p>
  <div className="w-[1400px]  flex items-center justify-between">

{users.map((e)=>{
  return (
    <div key={e.id} className="w-[300px] bg  h-[294px] rounded-xl flex flex-col items-center gap-[5px] ">
      <img className="rounded-t-xl" src={e.image} alt="" />
      <p>{e.des}</p>
      <p>{e.job}</p>
      <button onClick={()=>deleteUser(e.id)}>🗑️</button>
      
    </div>
  )
})}




  </div>
</section>



    </div>
  );
}

export default App;
