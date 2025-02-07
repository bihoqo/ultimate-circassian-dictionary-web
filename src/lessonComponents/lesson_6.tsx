import LessonDialogBubble from "~/components/lessons/lessonDialogBubble";

export function Lesson_6_1() {
  return (
    <div className="flex flex-col gap-6">
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Тембот"
        originText="Сэ сцlэр Мэщбэшlэ Тембот. Сэ 40 синыбжь. Мыекъопэ къалэ сыщэпсэу. Мекъуапэ Адыгаем икъэлэ шъхьаl. Сэ сыпхъашl. унэхэр пхъэкlэ сшlынхэр сикlас."
        translationText={{
          En: "My name is Mashbashah Tembot. I am 40 years old. I live in the city of Maikop. Maikop is the capital of Adygea. I am a carpenter. I like building houses with wood.",
          Ar: "أنا اسمي مَشبَشّأه تيمبوت. أنا عمري 40. أعيش في مدينة مايكوب. مايكوب هي عاصمة الأديغي. أنا نجار. أحب بناء البيوت بالخشب.",
        }}
        inlineTranslations={[]}
      />
    </div>
  );
}

export function Lesson_6_2() {
  return (
    <div className="flex flex-col gap-6">
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Бибэрс"
        originText="Сэ сцlэр Хъут Бибэрс. Сэ Чэркескы сыщэпсэу. Черкеск республикэм Черкеск икъэлэ шъхьаl. 37 синыбжь. Сэ сытхакlу. усэхэр Адыгабзэкlэ стхынхэр сикlас. къэсщагъ. Бынэу кlэлэцlыкlуищ сиl."
        translationText={{
          En: "My name is Khuut Bibers. I live in Cherkessk. Cherkessk is the capital of the Circassian republic. I am 37 years old. I am a writer. I like writing poetry in Adyghe. I am married. I have three young children.",
          Ar: "أنا اسمي خُت بيبرس. أنا أعيش في تشركيسك. تشركيسك هي عاصمة جمهورية الشركس. عمري 37. أنا كاتب. أحب كتابة الأشعار بالأديغابزة. متزوج. لدي ثلاثة أولاد صغار.",
        }}
        inlineTranslations={[]}
      />
    </div>
  );
}

export function Lesson_6_3() {
  return (
    <div className="flex flex-col gap-6">
      <LessonDialogBubble
        leftOrRight="left"
        characterName="Синэмис"
        originText="Сэ сцlэр Цэй Синэмис . 25 синыбжь. Налчыкы сыдэс. Налчык Къэбэртаим икъэлэ шъхьаl. Сэ сыегъэджакlу. Адыгабзэ есэгъаджэх. Адыгабзэр сикlас. Джыри езгъэджэнхэр сикlас. Сэ сыдэкlуагъ. Пшъашъэ сиl, Синэ ыцlэр, илъэситlу ыныбжь."
        translationText={{
          En: "My name is Tzei Sinemis. I am 25 years old. I live in Nalchik. Nalchik is the capital of Kabardino-Balkaria. I am a teacher. I teach Adyghe. I love Adyghe. I also love teaching. I am married. I have a daughter, her name is Sina, she is two years old.",
          Ar: "أنا اسمي تزي سينميس. عمري 25. أسكن في نالتشيك. نالتشيك هي عاصمة القبرتاي. أنا معلمة. أعلم الأديغابزة. أحب الأديغابزة. وأيضا أحب التعليم. أنا متزوجة. لدي إبنة، اسمها سينا ، عمرها سنتين.",
        }}
        inlineTranslations={[]}
      />
    </div>
  );
}
