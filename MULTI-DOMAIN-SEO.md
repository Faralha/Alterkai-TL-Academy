# Multi-Domain SEO Strategy untuk Alterkai TL Academy

## 🌐 **Domain Setup:**

- **Primary Domain:** `academy.alterkaiscans.com` (International/Main)
- **Secondary Domain:** `academy.alterkaiscans.my.id` (Indonesia Regional)

## 📋 **SEO Configuration untuk Dual Domain:**

### 🎯 **1. Canonical URL Strategy**

#### **Option A: Primary Domain (.com) sebagai Canonical**

```html
<!-- Semua pages point ke .com sebagai canonical -->
<link rel="canonical" href="https://academy.alterkaiscans.com/[path]" />
```

#### **Option B: Dynamic Canonical (Recommended)**

```javascript
// Di config.mts - canonical berdasarkan domain yang diakses
transformPageData(pageData) {
  const canonicalBase = pageData.params?.domain === 'myid'
    ? 'https://academy.alterkaiscans.my.id'
    : 'https://academy.alterkaiscans.com'

  pageData.frontmatter.head ??= []
  pageData.frontmatter.head.push([
    'link',
    { rel: 'canonical', href: `${canonicalBase}${pageData.relativePath.replace(/\.md$/, '.html')}` }
  ])
}
```

### 🔗 **2. Cross-Domain Linking Strategy**

#### **Hreflang Implementation:**

```html
<!-- Untuk international audience -->
<link rel="alternate" hreflang="en" href="https://academy.alterkaiscans.com/" />
<!-- Untuk Indonesia audience -->
<link
  rel="alternate"
  hreflang="id-ID"
  href="https://academy.alterkaiscans.my.id/"
/>
<link
  rel="alternate"
  hreflang="x-default"
  href="https://academy.alterkaiscans.com/"
/>
```

### 📊 **3. Domain-Specific SEO Settings**

#### **.com Domain (International Focus):**

```yaml
# Untuk global audience
title: 'Alterkai TL Academy - Learn Manga Translation & Scanlation'
description: 'Complete manga translation and scanlation learning platform. Learn translator, typesetter, cleaner, redraw, and quality control techniques.'
keywords: 'manga translation, scanlation tutorial, manga typesetter, manga cleaner, manga redraw'
lang: 'en'
```

#### **.my.id Domain (Indonesia Focus):**

```yaml
# Untuk audience Indonesia
title: 'Alterkai TL Academy - Belajar Manga Translation & Scanlation'
description: 'Platform pembelajaran manga translation terlengkap dalam bahasa Indonesia. Pelajari translator, typesetter, cleaner, redraw, dan quality control.'
keywords: 'manga translation indonesia, tutorial scanlation, belajar typeset manga'
lang: 'id-ID'
```

## ⚙️ **Implementation Recommendations:**

### 🚀 **Phase 1: Immediate Setup**

1. **Choose Primary Domain:**

   ```bash
   # Set environment variable untuk deployment
   # .com deployment:
   VITE_DOMAIN=com

   # .my.id deployment:
   VITE_DOMAIN=myid
   ```

2. **Update Structured Data:**
   ```json
   {
     "@context": "https://schema.org",
     "@type": "EducationalOrganization",
     "name": "Alterkai TL Academy",
     "url": [
       "https://academy.alterkaiscans.com",
       "https://academy.alterkaiscans.my.id"
     ],
     "sameAs": [
       "https://academy.alterkaiscans.com",
       "https://academy.alterkaiscans.my.id"
     ]
   }
   ```

### 🎯 **Phase 2: Advanced Multi-Domain**

1. **Conditional Content Loading:**

   ```vue
   <!-- components/DomainSpecificContent.vue -->
   <template>
     <div v-if="isDotCom">
       <!-- International content -->
     </div>
     <div v-else>
       <!-- Indonesia-specific content -->
     </div>
   </template>
   ```

2. **Geo-targeting Headers:**
   ```javascript
   // Server headers untuk .my.id domain
   headers: {
     'X-Robots-Tag': 'index, follow',
     'Content-Language': 'id-ID',
     'Vary': 'Accept-Language'
   }
   ```

## 🔍 **SEO Monitoring untuk Dual Domain:**

### 📈 **Google Search Console Setup:**

1. **Tambah kedua domain** sebagai separate properties
2. **Submit sitemap** untuk masing-masing domain
3. **Monitor performance** secara terpisah
4. **Cross-reference data** untuk insights

### 📊 **Analytics Configuration:**

```javascript
// Google Analytics 4 - track both domains
gtag('config', 'GA_MEASUREMENT_ID', {
  custom_map: {
    custom_parameter_1: 'domain_type',
  },
});

// Track domain visits
gtag('event', 'page_view', {
  domain_type: window.location.hostname.includes('.com')
    ? 'international'
    : 'indonesia',
});
```

## ⚠️ **Potential Issues & Solutions:**

### 🚨 **Duplicate Content Prevention:**

```html
<!-- Solution: Canonical tags pointing to preferred domain -->
<link rel="canonical" href="https://academy.alterkaiscans.com/translator" />

<!-- Alternative: rel=alternate -->
<link rel="alternate" href="https://academy.alterkaiscans.my.id/translator" />
```

### 🎯 **Link Equity Distribution:**

- **Internal links:** Prefer primary domain (.com)
- **External backlinks:** Focus pada building ke .com domain
- **Social sharing:** Default ke .com URLs

### 📱 **User Experience:**

```javascript
// Auto-redirect berdasarkan browser language (optional)
const userLang = navigator.language || navigator.userLanguage;
if (userLang.startsWith('id') && window.location.hostname.includes('.com')) {
  // Suggest .my.id version
  showLanguageToggle();
}
```

## 🎯 **Recommended Primary Strategy:**

### 🏆 **Option 1: .com as Primary (Recommended)**

- All canonicals point to `.com`
- `.my.id` serves same content dengan Indonesia-specific meta
- Cross-promote both domains dalam content
- Focus SEO efforts pada `.com` untuk international reach

### 🌏 **Option 2: Geographic Segmentation**

- `.com` untuk global audience (English interface)
- `.my.id` untuk Indonesia audience (Bahasa Indonesia interface)
- Separate content strategies
- Hreflang implementation untuk proper geo-targeting

## 📋 **Action Items:**

1. **Decide primary domain strategy** (.com recommended)
2. **Update canonical URLs** dalam all content files
3. **Implement hreflang tags** untuk proper geo-targeting
4. **Setup separate Search Console properties**
5. **Monitor both domains** untuk SEO performance
6. **Create domain-specific sitemaps**
7. **Update structured data** dengan both URLs

**Recommendation:** Start dengan Option 1 (unified content, .com primary) untuk simplicity, then evolve ke geo-segmentation jika needed.
