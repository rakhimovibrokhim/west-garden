import React from "react";

function App() {
  return (
    <>
      <header>
        <div className="container-2">
          <div className="flex justify-between">
            <div className="left flex items-center gap-5">
              <a href="#">
                <img src="logo.png" alt="Logo" />
              </a>
              <p>
                Официальный партнер <br /> АО «ИНТЕКО»
              </p>
            </div>
            <div className="right">
              <a href="tel:+7 495 845 19 34">+7 495 845 19 34</a>
              <p>работаем</p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="container-2">
            <div>
              <img src="wg-logo.svg" alt="West Garden" />
              <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
                Жизнь в зеленом оазисе <br /> в статусном районе Москвы
              </h2>
              <p className="text-xl sm:text-2xl descript underline underline-offset-8">
                Жилой комплекс бизнес-класса в 20 минутах от Кремля
              </p>
            </div>

            <div className="mt-14 relative award-winner">
              <img
                style={{ minHeight: "250px" }}
                className="w-full"
                src="hero-img.png"
                alt="award-winner"
              />
              <div className="award-content bg-white rounded-md px-3 py-4 flex flex-col  mt-3 static sm:absolute -top-8 right-10">
                <img src="hero-award.svg" alt="logo" />
                <p className="text-center mt-2">
                  Победитель <br /> федеральной премии <br /> Urban Awards 2019
                </p>
              </div>
              <div className="plans-creator absolute bottom-5 flex gap-3">
                <div className="plans hidden sm:flex gap-2">
                  <p className="order">1 очередь</p>
                  <p className="year">2022</p>
                </div>
                <div className="plans hidden sm:flex gap-2">
                  <p className="order">2 очередь</p>
                  <p className="year">2023</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="projects mt-20 grid sm:grid-cols-2 gap-5">
              <div className="project bg-center bg-[url('../public/hero-project1.png')]">
                <p className="project-size text-xl sm:text-2xl">20 гектаров</p>
                <br />
                <p className="project-location sm:text-xl">
                  территории ЖК — это как полтора Зарядья
                </p>
              </div>
              <div className="project bg-center bg-[url('../public/hero-project2.png')]">
                <p className="project-size text-xl sm:text-2xl">15 корпусов</p>
                <br />
                <p className="project-location sm:text-xl">
                  по 12-14 этажей, просторная застройка
                </p>
              </div>
              <div className="project bg-center bg-[url('../public/hero-project3.png')]">
                <p className="project-size text-xl sm:text-2xl">7 гектаров</p>
                <br />
                <p className="project-location sm:text-xl">
                  приватного парка для жителей ЖК
                </p>
              </div>
              <div className="project bg-center bg-[url('../public/hero-project4.png')]">
                <p className="project-size text-xl sm:text-2xl">2 километра</p>
                <br />
                <p className="project-location sm:text-xl">
                  набережной реки Раменка вдоль ЖК
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="location">
          <div className="container">
            <div className="mt-24 sm:mt-40">
              <h3>Престижное расположение</h3>
              <h2 className="text-3xl md:text-5xl">
                Один из самых зелёных <br /> районов столицы — Раменки
              </h2>
              <img
                className="mx-auto min-h-[200px] mt-10"
                src="location-map.png"
                alt="map"
              />
              <p>
                ЖК West Garden окружен Матвеевским лесом, набережной реки <br />{" "}
                Раменки и природным заказником «Долина реки Сетунь»
              </p>
              <a
                href="https://www.google.com/maps/search/west+garden/@47.1283746,35.5168795,4.01z?entry=ttu"
                target="_blank"
              >
                <span>
                  <img src="location-360degree.png" alt="Panorama" />
                  <p className="hover:text-white">Панорама района 360˚</p>
                </span>
              </a>
            </div>
          </div>
        </section>

        <section id="lobby">
          <div className="container">
            <div className="pt-24 sm:pt-40">
              <h2 className="text-3xl md:text-6xl">
                Современная эстетика лобби
              </h2>
              <div className="part-1 rounded-xl bg-white mt-12">
                <div className="head pt-5 px-5 md:pt-10 md:px-14">
                  <div className="description flex items-center gap-2">
                    <img src="lobby-door.png" alt="" />
                    <h3 className="text-2xl sm:text-4xl">
                      Центральные входные группы
                    </h3>
                  </div>
                  <div className="features gap-2 flex flex-wrap mt-5">
                    <span className="feature flex items-center gap-2 rounded-md px-4 py-2">
                      <img src="lobby-star.png" alt="star" />
                      <p>Зоны ожидания и встреч</p>
                    </span>
                    <span className="feature rounded-md px-4 py-2 flex items-center gap-2">
                      <img src="lobby-star.png" alt="star" />
                      <p>Пост охраны</p>
                    </span>
                    <span className="feature rounded-md flex items-center gap-2 px-4 py-2">
                      <img src="lobby-star.png" alt="star" />
                      <p>Переговорная комната</p>
                    </span>
                    <span className="feature rounded-md px-4 py-2 flex items-center gap-2">
                      <img src="lobby-star.png" alt="star" />
                      <p>Колясочная</p>
                    </span>
                  </div>
                </div>
                <div className="images flex justify-between mt-10 gap-3 px-5 pb-5">
                  <img
                    className="w-1/2"
                    src="lobby-part1-1.png"
                    alt="entrance-image"
                  />
                  <img
                    className="w-1/2"
                    src="lobby-part1-2.png"
                    alt="entrance-image"
                  />
                </div>
              </div>
              <div className="part-2 rounded-xl bg-white mt-3">
                <div className="head pt-5 px-5 md:pt-10 md:px-14">
                  <div className="description flex items-center gap-2">
                    <img src="lobby-elevator.png" alt="elevator-image" />
                    <h3 className="text-2xl sm:text-4xl">Лифтовый холл</h3>
                  </div>
                  <div className="features gap-2 flex flex-wrap mt-5">
                    <span className="feature flex items-center gap-2 rounded-md px-4 py-2">
                      <img src="lobby-star.png" alt="star" />
                      <p>2-4 лифта</p>
                    </span>
                    <span className="feature rounded-md px-4 py-2 flex items-center gap-2">
                      <img src="lobby-star.png" alt="star" />
                      <p>Грузовые и пассажирские</p>
                    </span>
                    <span className="feature rounded-md flex items-center gap-2 px-4 py-2">
                      <img src="lobby-star.png" alt="star" />
                      <p>Ведущие производители</p>
                    </span>
                  </div>
                </div>
                <div className="images gap-3 flex justify-between mt-10 px-5 pb-5">
                  <img
                    className="w-1/2"
                    src="lobby-part2-1.png"
                    alt="elevator-image"
                  />
                  <img
                    className="w-1/2"
                    src="lobby-part2-2.png"
                    alt="elevator-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="trim">
          <div className="container">
            <div className="mt-20 sm:mt-40">
              <h2 className="text-3xl md:text-6xl">Отделка от застройщика</h2>
              <h3 className="mt-5 underline underline-offset-8">
                Экономьте на стоимости ремонта, покупая квартиру с готовой
                отделкой
              </h3>
              <div className="boxes gap-5 mt-14 grid grid-cols-2 md:grid-cols-3">
                <div className="box rounded-xl bg-white">
                  <div className="head px-2 pt-2">
                    <img src="trim-box1.png" alt="design" />
                  </div>
                  <div className="body mt-5 px-3 lg:px-6 pb-6">
                    <h4 className="text-2xl lg:text-3xl">
                      Готовый дизайн-проект
                    </h4>
                    <p className="mt-3 text-lg lg:text-xl">
                      Воспользуйтесь возможностью сразу же заняться меблировкой
                      и благоустройством новой квартиры, как только получите
                      ключи
                    </p>
                  </div>
                </div>
                <div className="box rounded-xl bg-white">
                  <div className="head px-2 pt-2">
                    <img src="trim-box2.png" alt="design" />
                  </div>
                  <div className="body mt-5 px-3 lg:px-6 pb-6">
                    <h4 className="text-2xl lg:text-3xl">
                      Чистота и тишина, без шума и пыли
                    </h4>
                    <p className="mt-3 text-lg lg:text-xl">
                      Забудьте шум от «бесконечного ремонта» соседей и лифт,
                      декорированный защитными материалами
                    </p>
                  </div>
                </div>
                <div className="box place-self-center rounded-xl bg-white">
                  <div className="head px-2 pt-2">
                    <img src="trim-box3.png" alt="design" />
                  </div>
                  <div className="body mt-5 px-3 lg:px-6 pb-6">
                    <h4 className="text-2xl lg:text-3xl">
                      Выгода за счет оптовых закупок
                    </h4>
                    <p className="mt-3 text-lg lg:text-xl">
                      Copy Благодаря оптовым закупкам застройщика, вы получаете
                      возможность сэкономитьна стоимости ремонта
                    </p>
                  </div>
                </div>
              </div>
              {/* 2nd example */}
              <h2 className="mt-20 sm:mt-40 text-3xl md:text-6xl">
                2 варианта отделки
              </h2>
              <div className="line w-full mt-10"></div>
              <div className="example light-ex mt-10 example-1">
                <div className="head flex flex-wrap gap-3 justify-between items-center">
                  <h4 className="text-2xl sm:text-4xl">Светлая отделка</h4>
                  <a
                    href="#"
                    className="rounded-xl px-3 sm:px-6 py-2 sm:py-4 text-white"
                    download={"logo.png"}
                  >
                    Скачать дизайн-буклет
                  </a>
                </div>
                <div className="mt-8 gap-4">
                  <div className="flex flex-wrap-reverse md:flex-nowrap gap-4">
                    <img
                      className="w-full md:w-1/2 lg:w-2/3"
                      src="trim-example1-1.png"
                      alt="room-photo"
                    />
                    <div className="description w-full md:w-1/2 lg:w-1/3 p-5 xl:p-10 bg-white">
                      <div className="flex">
                        <img src="trim-circle1.png" alt="deco" />
                        <img
                          className="-ml-6"
                          src="trim-circle2.png"
                          alt="deco"
                        />
                        <img
                          className="-ml-6"
                          src="trim-circle3.png"
                          alt="deco"
                        />
                      </div>
                      <h5 className="mt-8">ОСОБЕННОСТИ ИНТЕРЬЕРА</h5>
                      <p className="mt-2">
                        Сочетание белых стен и светлой напольной доски
                        с текстурой дерева расширяет пространство, формируя
                        гармоничную, наполненную светом атмосферу
                      </p>
                    </div>
                  </div>
                  <div className="flex image-examples mt-4 justify-between">
                    <img
                      className="img-1"
                      src="trim-example1-2.png"
                      alt="image"
                    />
                    <img
                      className="img-2"
                      src="trim-example1-3.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
              <div className="line w-full mt-20"></div>
              {/*  */}
              <div className="example dark-ex mt-10 example-2">
                <div className="head flex flex-wrap gap-3 justify-between items-center">
                  <h4 className="text-2xl sm:text-4xl">Тёмная отделка</h4>
                  <a
                    href="#"
                    className="rounded-xl px-3 sm:px-6 py-2 sm:py-4 text-white"
                    download={"logo.png"}
                  >
                    Скачать дизайн-буклет
                  </a>
                </div>
                <div className="mt-8 gap-4">
                  <div className="flex flex-wrap-reverse md:flex-nowrap gap-4">
                    <img
                      className="w-full md:w-1/2 lg:w-2/3"
                      src="trim-example2-1.png"
                      alt="room-photo"
                    />
                    <div className="description w-full md:1/2 lg:w-1/3 p-5 xl:p-10">
                      <div className="flex">
                        <img src="trim-circle4.png" alt="deco" />
                        <img
                          className="-ml-6"
                          src="trim-circle5.png"
                          alt="deco"
                        />
                        <img
                          className="-ml-6"
                          src="trim-circle6.png"
                          alt="deco"
                        />
                      </div>
                      <h5 className="mt-8">ОСОБЕННОСТИ ИНТЕРЬЕРА</h5>
                      <p className="mt-2 text-white">
                        Отделка в тёмном варианте формируется за счет
                        нейтральных оттенков стен, а также напольной доски,
                        выполненной в цвете темного дерева
                      </p>
                    </div>
                  </div>
                  <div className="image-examples flex mt-4 justify-between">
                    <img
                      className="img-1"
                      src="trim-example2-2.png"
                      alt="example-image"
                    />
                    <img
                      className="img-2"
                      src="trim-example2-3.png"
                      alt="example-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-40"></div>
      </main>

      <footer className="bg-white py-8 sm:py-16">
        <div className="container">
          <div className="top flex flex-wrap-reverse sm:flex-nowrap justify-center sm:justify-between items-center gap-3 sm:gap-0">
            <h3 className="text-center sm:text-start text-xl lg:text-4xl">
              Жилой комплекс «West Garden» — <br /> все преимущества жизни на
              природе
            </h3>
            <a href="#">
              <img src="footer-logo.svg" alt="logo" />
            </a>
          </div>
          <div className="divider mt-3 sm:mt-5"></div>
          <div className="information flex flex-col md:flex-row">
            <div className="left lg:w-1/2">
              <div className="first-floor justify-between flex items-center gap-5 py-5 md:py-10">
                <img
                  className="f-estes-logo"
                  src="footer-estes-logo.png"
                  alt="estes-logo"
                />
                <div className="sm-divider"></div>
                <p className="uppercase text-xs sm:text-base">
                  эксперты <br /> недвижемости
                </p>
              </div>
              <div className="divider"></div>
              <div className="second-floor flex justify-between pt-3 pb-10">
                <h6 className="text-base sm:text-2xl">Офис продаж</h6>
                <a
                  href="https://goo.gl/maps/yFL4Z3QUmjvRc2H8A"
                  className="text-base sm:text-xl"
                >
                  Москва, Лужнецкая наб. <br /> 2/4, строение 17, офис 308
                </a>
              </div>
              <div className="divider"></div>
              <div className="third-floor flex justify-between pt-3 pb-5">
                <h6 className="text-base sm:text-2xl">Телефон</h6>
                <a href="tel:+7 495 845 19 34" className="text-base sm:text-xl">
                  +7 495 845 19 34
                </a>
              </div>
            </div>
            <div className="right hidden  md:block  lg:w-1/2">
              <img className="w-full h-full" src="footer-map.png" alt="map" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
