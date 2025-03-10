import React from "react";

export default function TheLangPathAlphabetTable() {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b px-4 py-2">А</th>
            <th className="border-b px-4 py-2">Б</th>
            <th className="border-b px-4 py-2">В</th>
            <th className="border-b px-4 py-2">Г</th>
            <th className="border-b px-4 py-2">ГЪ</th>
            <th className="border-b px-4 py-2">Д</th>
            <th className="border-b px-4 py-2">ДЖ</th>
            <th className="border-b px-4 py-2">ДЗ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b px-4 py-2">Е</td>
            <td className="border-b px-4 py-2">Ж</td>
            <td className="border-b px-4 py-2">ЖЪ</td>
            <td className="border-b px-4 py-2">ЖЬ</td>
            <td className="border-b px-4 py-2">З</td>
            <td className="border-b px-4 py-2">И</td>
            <td className="border-b px-4 py-2">Й</td>
            <td className="border-b px-4 py-2">К</td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2">КЪ</td>
            <td className="border-b px-4 py-2">Л</td>
            <td className="border-b px-4 py-2">ЛЪ</td>
            <td className="border-b px-4 py-2">М</td>
            <td className="border-b px-4 py-2">Н</td>
            <td className="border-b px-4 py-2">О</td>
            <td className="border-b px-4 py-2">П</td>
            <td className="border-b px-4 py-2">Р</td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2">С</td>
            <td className="border-b px-4 py-2">Т</td>
            <td className="border-b px-4 py-2">У</td>
            <td className="border-b px-4 py-2">Ф</td>
            <td className="border-b px-4 py-2">Х</td>
            <td className="border-b px-4 py-2">ХЪ</td>
            <td className="border-b px-4 py-2">ХЬ</td>
            <td className="border-b px-4 py-2">Ц</td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2">Ч</td>
            <td className="border-b px-4 py-2">ЧЪ</td>
            <td className="border-b px-4 py-2">Ш</td>
            <td className="border-b px-4 py-2">ШЪ</td>
            <td className="border-b px-4 py-2">Щ</td>
            <td className="border-b px-4 py-2">Ы</td>
            <td className="border-b px-4 py-2">Э</td>
            <td className="border-b px-4 py-2">Я</td>
          </tr>
          <tr>
            <td className="border-b px-4 py-2" colSpan={8}>
              I
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
