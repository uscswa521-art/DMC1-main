# DMC Visual Stack — 組件命名對照表

> 用於跨頁面搬移時的統一溝通語言。

---

## Layer 1 · 頁面級組件（整塊可搬移）

| 名稱 | 檔案 / 組件 | 說明 |
|------|------------|------|
| **CyberBoot** | `src/components/IntroScreen.tsx` | 開機加載動畫：線框SVG繪入 → 故障閃爍 → HUD定格 → 淡出進入主頁 |
| **SplitHero** | `src/components/sections/Hero.tsx` | 左文右卡雙欄 Hero：左側標題/副題/正文，右側 OrbitalCard |
| **OrbitalCard** | `PartnershipVisual` function in Hero.tsx | DMC × BITUNIX 動態卡片：雙軌道環旋轉 + 網絡節點SVG + 霓虹文字 + 掃描線 |

---

## Layer 2 · 可複用動效組件（獨立封裝）

| 名稱 | 檔案 / 組件 | 說明 |
|------|------------|------|
| **GreenWipe** | `src/components/SectionReveal.tsx` | 滾動觸發綠幕轉場：dark curtain 從左掃右 + 亮綠前沿光柱 + WireTriangle + ChromaSettle |
| **WireTriangle** | 內嵌於 SectionReveal.tsx | 線框三角形SVG，含紅/青色差偏移層，GreenWipe 執行時在中央短暫閃現 |
| **ChromaSettle** | `chromaSettle` keyframe in globals.css | 模糊+色相偏移 → 逐步清晰定焦，附在 section 內容 div 的 animation 屬性 |

---

## Layer 3 · CSS 工具類（全局風格，globals.css）

| 名稱 | CSS class / keyframe | 說明 |
|------|---------------------|------|
| **NeonGlow** | `dmcGlowPulse` keyframe + `.neon-glow` class | 綠色霓虹文字多層光暈，呼吸式脈衝 |
| **XBurst** | `xBurst` keyframe | 黃綠色(#C8E052)爆閃 + 微縮放，用於 × 號等強調符號 |
| **ScanLine** | `.scanline-bg` utility class | 橫向半透明掃描線背景紋理（repeating gradient） |
| **ParallaxGrid** | `.parallax-wireframe` utility class | 細格線網格背景，用於 section 底層裝飾 |

---

## 使用範例

```
「把 GreenWipe 加到新頁面的每個 section」
→ 用 <SectionReveal> 包住每個 section，keyframes 在 globals.css 已定義

「新頁面要有 CyberBoot」
→ 複製 IntroScreen.tsx，在 page.tsx 用 dynamic import (ssr: false) 引入

「OrbitalCard 獨立用在 about 頁」
→ 把 PartnershipVisual function 抽出為獨立組件，keyframes 已在 globals.css
```

---

*最後更新：2026-04-24*
