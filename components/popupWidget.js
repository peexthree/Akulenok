import { Disclosure } from "@headlessui/react";
// ... (начало файла без изменений) ...
export default function PopupWidget() {
  // ... (логика хуков без изменений) ...

  const onSubmit = async (data, e) => {
    // ... (функция отправки без изменений) ...
  };

  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            {/* ... (кнопка виджета без изменений) ... */}
            <Transition
              className="fixed z-50 bottom-[100px] top-0 right-0 left-0 sm:top-auto sm:right-5 sm:left-auto"
              enter="transition duration-200 transform ease"
              enterFrom="opacity-0 translate-y-5"
              leave="transition duration-200 transform ease"
              leaveTo="opacity-0 translate-y-5">
              <Disclosure.Panel className="flex flex-col overflow-hidden left-0 h-full w-full sm:w-[350px] min-h-[250px] sm:h-[600px] border border-gray-300 dark:border-gray-800 bg-white shadow-2xl rounded-md sm:max-h-[calc(100vh-120px)]">
                <div className="flex flex-col items-center justify-center h-32 p-5 bg-indigo-600">
                  <h3 className="text-lg text-white">Чем мы можем помочь?</h3>
                  <p className="text-white opacity-50">
                    Обычно отвечаем в течение часа
                  </p>
                </div>
                <div className="flex-grow h-full p-6 overflow-auto bg-gray-50 ">
                  {!isSubmitSuccessful && (
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                      {/* TODO: КРИТИЧЕСКИ ВАЖНО!
                        Замените "YOUR_ACCESS_KEY_HERE" на ваш реальный ключ с сайта web3forms.com
                        Без этого форма работать НЕ БУДЕТ.
                      */}
                      <input
                        type="hidden"
                        value="YOUR_ACCESS_KEY_HERE"
                        {...register("apikey")}
                      />
                      {/* ... (остальная форма без изменений) ... */}
                    </form>
                  )}
                  {/* ... (остальной код отображения успеха/ошибки без изменений) ... */}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}