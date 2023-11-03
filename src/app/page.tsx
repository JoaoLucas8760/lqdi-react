"use client";

import Image from "next/image";
import { useState } from "react";
import axios from "axios";

import LqdiLogo from "../assets/lqdi.png";
import LqdiNeonLogo from "../assets/lqdi-neon.png";

import Rectangle1 from "../assets/rectangle-1.png";
import Rectangle2 from "../assets/rectangle-2.png";
import Rectangle3 from "../assets/rectangle-3.png";
import Rectangle4 from "../assets/rectangle-4.png";
import Rectangle5 from "../assets/rectangle-5.png";
import Rectangle6 from "../assets/rectangle-6.png";

export default function Home() {
  const [errorFields, setErrorFields] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function onSubmitForm(e: any) {
    e.preventDefault();
    console.log("Executado");
    setError(null);
    setErrorFields(false);
    setSuccess(false);

    try {
      setError(null);
      setErrorFields(false);
      setSuccess(false);
      const response = await axios.post(
        "http://localhost:8000/api/newsletter",
        {
          name: name,
          email: email,
        }
      );

      setSuccess(true);
      console.log("success");
    } catch (error: any) {
      console.log("ERROR", error.response);
      setError(error?.response.data.message);
    }
  }

  function isValidEmail(email: string) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailRegex.test(email);
  }
  return (
    <>
      <main className="max-w-screen h-screen bg-[#E3EAF3] flex flex-col">
        <header className="w-full flex flex-col gap-3 lg:gap-0 lg:flex-row justify-between p-[3.125rem] py-4 lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:z-50 bg-[#E3EAF3]">
          <Image
            src={LqdiLogo}
            alt="LOGO DA LQDI"
            className="justify-self-start self-center"
          />
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-2">
            <h3 className="text-[#48494B] font-semibold text-base">
              Agende uma reunião conosco
            </h3>

            <button className="text-white bg-black py-3 px-9 rounded-[40px] font-extrabold w-full lg:w-fit self-start">
              Começar
            </button>
          </div>
        </header>

        <div className="flex flex-col justify-center p-[1.7rem] lg:p-[3.125rem] lg:mt-24">
          <section className="flex flex-col lg:flex-row justify-center gap-8">
            <div className="flex flex-col">
              <div className="flex flex-col gap-4 h-full">
                <h2 className="text-[#08111e] text-[2rem] font-semibold text-left">
                  Construímos estratégias, <br />
                  design e tecnologia de ponta <br />
                  para o seu negócio
                </h2>
                <p className="text-[#08111e] text-xl font-medium">
                  Converse com nossa equipe sobre o seu projeto
                </p>

                <button className="bg-[#0AB2B7] text-white font-bold py-3 px-9 rounded-full w-full lg:w-fit self-start">
                  Começar
                </button>
              </div>
              <Image
                src={Rectangle1}
                alt="Imagem 1"
                className="self-end w-[280px] h-[268px] justify-self-end mt-4 lg:mt-0"
              />
            </div>

            <div className="flex flex-col items-center">
              <Image
                src={Rectangle2}
                alt="Imagem 2"
                className="mb-4 w-[280px] h-[268px]"
              />
              <Image src={Rectangle3} alt="Imagem 3" />
            </div>

            <div className="self-center">
              <Image
                src={Rectangle4}
                alt="Imagem 4"
                className="w-[280px] h-[347px]"
              />
            </div>
          </section>

          <section className="mt-32 flex flex-wrap flex-col items-center lg:flex-row md:justify-center gap-16 lg:gap4 lg:items-start">
            <article className="w-[20rem] h-[37rem]">
              <div className="flex flex-col justify-center h-full">
                <div>
                  <Image
                    src={Rectangle5}
                    alt=""
                    className="w-[317px] h-[260px]"
                  />
                  <h2 className="text-[#08111E] font-bold text-2xl mt-9">
                    Por que é importante ter um site de qualidade?
                  </h2>
                  <p className="text-[#08111E] font-normal text-base mt-5">
                    Um site de qualidade passou a ser um dos meios de exposição
                    de marca mais eficientes no ambiente online. Ele funciona
                    como uma espécie de cartão...
                  </p>
                </div>

                <a
                  href=""
                  className="font-bold flex items-center gap-2 justify-self-start"
                >
                  Ir para o artigo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#101113"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path>
                  </svg>
                </a>
              </div>
            </article>

            <article className="flex flex-col w-[20rem] h-[37rem]">
              <div className="flex flex-col justify-center h-full">
                <Image
                  src={Rectangle6}
                  alt=""
                  className="w-[317px] h-[260px]"
                />
                <h2 className="text-[#08111E] font-bold text-2xl mt-9">
                  6 dicas para trabalhar com marketing digital com verba
                  limitada
                </h2>
                <p className="text-[#08111E] font-normal text-base mt-5">
                  Um site de qualidade passou a ser um dos meios de exposição de
                  marca mais eficientes no ambiente online. Ele funciona como
                  uma espécie de cartão...
                </p>
                <a
                  href=""
                  className="font-bold flex items-center gap-2 justify-self-start"
                >
                  Ir para o artigo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#101113"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path>
                  </svg>
                </a>
              </div>
            </article>

            <div className="w-full lg:w-[30rem] bg-black p-8 rounded-2xl flex flex-col gap-16">
              <h2 className="text-white font-semibold text-start text-3xl">
                Receba os nossos <br />
                artigo de interesse <br />
                na sua caixa de <br />
                entrada.
              </h2>

              <form>
                <input
                  type="email"
                  placeholder="Seu e-mail..."
                  className="w-full p-3 py-4 rounded-full border-2 border-white text-center outline-none text-[#fff] placeholder:text-white placeholder:text-[1.1rem] text-[1.1rem] bg-[#000] focus:bg-white focus:text-[#000]"
                />
              </form>

              <div className="flex flex-col gap-8">
                <p className="text-white">
                  Siga-nos em <br />
                  nossas mídias <br />
                  sociais
                </p>
                <div className="flex gap-4">
                  <a href="" className="p-2 rounded-full bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#080808"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM176,20H80A60.07,60.07,0,0,0,20,80v96a60.07,60.07,0,0,0,60,60h96a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,176,20Zm36,156a36,36,0,0,1-36,36H80a36,36,0,0,1-36-36V80A36,36,0,0,1,80,44h96a36,36,0,0,1,36,36ZM196,76a16,16,0,1,1-16-16A16,16,0,0,1,196,76Z"></path>
                    </svg>
                  </a>

                  <a href="" className="p-2 rounded-full bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#080808"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm12,191.13V156h20a12,12,0,0,0,0-24H140V112a12,12,0,0,1,12-12h16a12,12,0,0,0,0-24H152a36,36,0,0,0-36,36v20H96a12,12,0,0,0,0,24h20v55.13a84,84,0,1,1,24,0Z"></path>
                    </svg>
                  </a>

                  <a href="" className="p-2 rounded-full bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#080808"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V124a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,152v24a12,12,0,0,1-24,0V152a16,16,0,0,0-32,0v24a12,12,0,0,1-24,0ZM96,124v52a12,12,0,0,1-24,0V124a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col lg:flex-row justify-center gap-32 mt-32">
            <div className="flex flex-col gap-4">
              <h2 className="text-[#080808] font-semibold text-3xl text-left">
                Viva uma nova experiência <br />
                de comunicação integrada <br />
                com foco nos resultados.
              </h2>

              <p className="text-xl text-[#080808]">
                Escreva-nos sobre o seu projeto
              </p>
            </div>

            <form
              onSubmit={onSubmitForm}
              className="flex flex-col gap-8 w-full lg:w-fit"
            >
              <div className="w-full">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Seu nome (requerido)
                </label>
                <input
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="bg-[#F1F4F9] p-3 w-full lg:w-[30rem] rounded-full outline-none focus:ring focus:ring-[#0999BA]"
                  id="name"
                  type="text"
                />
              </div>
              <div className="w-full">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="namemaile"
                >
                  Seu email (requerido)
                </label>
                <input
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#F1F4F9] p-3 w-full lg:w-[30rem] rounded-full outline-none focus:ring focus:ring-[#0999BA]"
                  id="email"
                  type="text"
                />
              </div>
              <div className="w-full">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Assunto
                </label>
                <input
                  className="bg-[#F1F4F9] p-3 w-full lg:w-[30rem] rounded-full outline-none focus:ring focus:ring-[#0999BA]"
                  id="name"
                  type="text"
                />
              </div>
              <div className="w-full">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Mensagem
                </label>

                <textarea
                  id="message"
                  rows={4}
                  className="resize-none bg-[#F1F4F9] p-3 w-full lg:w-[30rem] block text-sm text-gray-900 outline-none rounded-lg border focus:border-blue-500 focus:ring focus:ring-[#0999BA]"
                ></textarea>
              </div>
              <div className="w-full">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900"
                  htmlFor="file_input"
                >
                  Anexe um documento explicando seu projeto
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                  id="file_input"
                  type="file"
                />
              </div>
              {errorFields && (
                <div
                  className="flex mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400"
                  role="alert"
                >
                  <svg
                    className="flex-shrink-0 inline w-4 h-4 mr-3 mt-[2px]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="sr-only">Danger</span>
                  <div>
                    <span className="font-medium">
                      Preencha todos os campos requeridos corretamente
                    </span>
                  </div>
                </div>
              )}
              {error && (
                <div
                  v-if="error"
                  className="flex mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400"
                  role="alert"
                >
                  <svg
                    className="flex-shrink-0 inline w-4 h-4 mr-3 mt-[2px]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="sr-only">Danger</span>
                  <div>
                    <span className="font-medium">{error}</span>
                  </div>
                </div>
              )}
              {success && (
                <div
                  v-if="success"
                  className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50"
                  role="alert"
                >
                  <svg
                    className="flex-shrink-0 inline w-4 h-4 mr-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="sr-only">Info</span>
                  <div>
                    <span className="font-medium">Sucesso!</span>
                  </div>
                </div>
              )}
              <button
                type="submit"
                className="text-white w-full lg:w-fit self-start bg-black py-3 px-9 rounded-[40px] font-extrabold"
              >
                Enviar
              </button>
            </form>
          </section>
        </div>

        <footer className="bg-black p-[3.125rem] flex flex-col gap-4 lg:gap-0 lg:flex-row lg:justify-between">
          <Image
            className="w-[80x] h-[46px] justify-self-start self-start"
            src={LqdiNeonLogo}
            alt="LOGO DA LQDI"
          />

          <div className="flex flex-col lg:flex-row lg:gap-16 mr-0 lg:mr-32">
            <div className="">
              <h4 className="text-xl text-[#fff] font-bold">Brasil</h4>
              <h4 className="text-[#fff]">
                Rua da Consolação, 4393º andar, <br />
                Consolação São Paulo
              </h4>
              <h4 className="mt-4 text-[#fff]">+55 11 3280-0283</h4>
            </div>

            <div className="mt-4 lg:mt-0">
              <div>
                <h4 className="text-xl text-[#fff] font-bold">Portugal</h4>
                <h4 className="text-[#fff]">
                  Av. República Nº6 - 1º Andar Lisboa
                </h4>
                <h4 className="mt-4 text-[#fff]">+351 916 029 443</h4>
              </div>

              <div className="mt-4">
                <h4 className="text-xl text-[#fff] font-bold">Holanda</h4>
                <h4 className="text-[#fff]">
                  Jasykoffstraat 631506AT ZaandamThe <br />
                  Netherlands
                </h4>
                <h4 className="mt-4 text-[#fff]">+31 622 333 744</h4>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
