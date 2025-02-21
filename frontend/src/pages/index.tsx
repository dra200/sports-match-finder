import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"

/**
 * الصفحة الرئيسية للتطبيق
 * تعرض رسالة ترحيب وأزرار للبحث عن المباريات أو إنشاء مباراة جديدة
 * إذا كان المستخدم غير مسجل الدخول، تعرض أزرار تسجيل الدخول والتسجيل
 */
export default function Home() {
  const { user } = useAuth()

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">مرحبًا بك في Sports Match Finder</h1>
      <p className="mb-8">ابحث عن المباريات الرياضية وانضم إليها في منطقتك</p>
      <div className="space-x-4">
        {user ? (
          <>
            <Link href="/matches" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              البحث عن المباريات
            </Link>
            <Link
              href="/matches/create"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              إنشاء مباراة
            </Link>
          </>
        ) : (
          <>
            <Link href="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              تسجيل الدخول
            </Link>
            <Link href="/register" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              التسجيل
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

