import Image from "next/image";

export default function FacesPage() {
  const faceIndexes = Array.from({ length: 17 }, (_, i) => i);

  return (
    <main className="bg-white p-8">
      <h1 className="mb-6 text-2xl font-bold">Character Faces</h1>
      <div className="grid grid-cols-4 gap-6">
        {faceIndexes.map((index) => (
          <div key={index} className="text-center">
            <div className="relative mx-auto h-32 w-32">
              <Image
                src={`/theLangPath/faces/${index}.png`}
                alt={`Face ${index}`}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="mt-2 text-lg font-medium">{index}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
