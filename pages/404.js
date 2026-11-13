import Head from "next/head";
import Link from "next/link";
import Container from "../components/Container";

export default function Custom404() {
  const pageTitle = "Страница не найдена (404) - Акулёнок";
  const pageDescription =
    "Запрашиваемая страница не существует или была перемещена. Семейный аквацентр «Акулёнок» в г. Туймазы.";

  return (
    <>
      <Head>
        <title key="title">{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <div className="min-h-screen bg-[#F6FBFF] flex items-center justify-center py-20 px-4">
        <Container className="text-center max-w-lg">
          <div className="text-8xl font-black bg-gradient-to-r from-sky-500 to-rose-500 bg-clip-text text-transparent mb-4">
            404
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0C1A2E] mb-4">
            Страница не найдена
          </h1>
          <p className="text-slate-600 mb-8 font-medium">
            Возможно, страница устарела или была перемещена по другому адресу.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-bold py-3 px-6 rounded-2xl shadow-md transition-all active:scale-95"
          >
            Вернуться на главную
          </Link>
        </Container>
      </div>
    </>
  );
}
