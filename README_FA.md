# راهنمای فارسی سایت Portfolio

این پروژه سایت شخصی من در آدرس <https://saeidptzl.github.io/> است. سایت تک‌صفحه‌ای است، با React و Create React App ساخته شده و از طریق GitHub Actions روی GitHub Pages منتشر می‌شود. سایت هیچ backend ندارد.

## پیش‌نیازها

- Node.js نسخه 22 (همان نسخه‌ای که در انتشار خودکار استفاده می‌شود)
- npm

## اجرای سایت روی کامپیوتر

داخل پوشه پروژه:

```bash
npm ci
npm start
```

سایت در این آدرس باز می‌شود:

```text
http://localhost:3000
```

## بررسی قبل از انتشار

```bash
npm test
CI=true npm run build
```

## انتشار روی GitHub Pages

فایل `.github/workflows/deploy.yml` با هر Push روی شاخه `main` اجرا می‌شود و سایت را می‌سازد و منتشر می‌کند.

این تنظیم فقط یک بار لازم است:

`Settings → Pages → Source → GitHub Actions`

## تغییر متن‌ها

تمام متن‌ها، پروژه‌ها، مهارت‌ها و لینک‌ها در این فایل هستند:

```text
src/content_option.js
```

عنوان صفحه و توضیحات شبکه‌های اجتماعی در `public/index.html` هستند.

## تغییر عکس‌ها

عکس‌ها در این پوشه قرار دارند:

```text
src/assets/images/
```

## تغییر CV

فایل PDF جدید را با همین نام جایگزین کن:

```text
public/Saeid_Asgharian_Shirvan_CV.pdf
```

اگر نام فایل را عوض کردی، مقدار `cvFilename` را در `src/content_option.js` و لینک داخل بخش `<noscript>` را در `public/index.html` هم تغییر بده. همه دکمه‌های CV از همین تنظیم استفاده می‌کنند.

## مجوزها

- فایل `LICENSE` مجوز MIT قالبی است که این مخزن از آن شروع شده و باید حفظ شود.
- فونت‌های پوشه `public/fonts/` تحت مجوز SIL Open Font License هستند و متن مجوزها کنار آن‌ها قرار دارد.
