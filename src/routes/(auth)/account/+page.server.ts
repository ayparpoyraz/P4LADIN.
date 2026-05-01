import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

// ── Test kullanıcıları  ──────────────────
// TODO: Gerçek kullanıcıları veritabanından çek (örn: Prisma, Drizzle)
const TEST_USERS = [
  { email: "admin@admin.com", password: "admin", role: "admin" },
];

export const actions: Actions = {
  // ── Giriş ──────────────────────────────────────────────
  login: async ({ request, cookies }) => {
    const data     = await request.formData();
    const email    = data.get("email")    as string;
    const password = data.get("password") as string;

    if (!email || !password) {
      return fail(400, { error: "E-posta ve şifre zorunludur.", action: "login" });
    }

    const user = TEST_USERS.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      return fail(401, { error: "E-posta veya şifre hatalı.", action: "login" });
    }

    // TODO: Şifreyi hash'le ve veritabanıyla karşılaştır (örn: bcrypt.compare)
    // TODO: JWT veya session token üret
    // TODO: Cookie'ye token set et → cookies.set("session", token, { path: "/", httpOnly: true })
    // TODO: Giriş sonrası yönlendirme → redirect(303, "/dashboard")

    if (user.role === "admin") {
      return { success: true, message: "Giriş başarılı! Adminnn.", action: "login" };
    }

    return { success: true, message: "Giriş başarılı! Hoşgeldiniz.", action: "login" };
  },

  // ── Kayıt ───────────────────────────────────────────────
  register: async ({ request }) => {
    const data     = await request.formData();
    const email    = data.get("email")    as string;
    const password = data.get("password") as string;
    const confirm  = data.get("confirm")  as string;

    if (!email || !password || !confirm) {
      return fail(400, { error: "Tüm alanlar zorunludur.", action: "register" });
    }

    if (password !== confirm) {
      return fail(400, { error: "Şifreler eşleşmiyor.", action: "register" });
    }

    if (password.length < 6) {
      return fail(400, { error: "Şifre en az 6 karakter olmalıdır.", action: "register" });
    }

    const exists = TEST_USERS.find((u) => u.email === email);
    if (exists) {
      return fail(409, { error: "Bu e-posta zaten kayıtlı.", action: "register" });
    }

    // TODO: Şifreyi hash'le (örn: bcrypt.hash(password, 10))
    // TODO: Kullanıcıyı veritabanına kaydet → db.user.create({ email, hash, role: "user" })
    // TODO: Kayıt sonrası otomatik giriş yaptır veya /account'a yönlendir
    // TODO: E-posta doğrulama sistemi ekle (verification token)

    return { success: true, message: "Kayıt başarılı! Giriş yapabilirsiniz.", action: "register" };
  },
};