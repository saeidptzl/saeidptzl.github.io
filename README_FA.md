# راهنمای فارسی سایت Portfolio

## اجرای سایت روی کامپیوتر

داخل پوشه پروژه:

```bash
npm install --legacy-peer-deps
npm start
```

سپس آدرس زیر را باز کن:

```text
http://localhost:3000
```

## فایل اصلی اطلاعات شخصی

برای تغییر متن‌ها، مهارت‌ها، سابقه کار، پروژه‌ها و لینک‌ها این فایل را ویرایش کن:

```text
src/content_option.js
```

## تغییر عکس

عکس جدید را با همین نام جایگزین کن:

```text
src/assets/images/saeid-profile.jpg
```

## تغییر CV

فایل PDF جدید را با همین نام داخل پوشه `public` قرار بده:

```text
public/Saeid_Asgharian_CV.pdf
```

## انتشار روی GitHub Pages

این پروژه دارای GitHub Actions آماده است.

1. فایل‌ها را داخل Repository به نام `saeidptzl.github.io` قرار بده.
2. تغییرات را Commit و Push کن.
3. در GitHub وارد `Settings → Pages` شو.
4. قسمت `Source` را روی `GitHub Actions` قرار بده.
5. در تب `Actions` منتظر سبز شدن Workflow بمان.
6. سایت را باز کن:

```text
https://saeidptzl.github.io/
```
