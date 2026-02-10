"use client"

import { LanguageProvider, useLanguage } from "@/lib/language-context"
import { Navigation } from "@/components/navigation"
import { CursorFollower } from "@/components/cursor-follower"
import { HeroSection } from "@/components/hero-section"
import { JapaneseBreak } from "@/components/japanese-break"
import { PracticeSection } from "@/components/practice-section"
import { AboutSection } from "@/components/about-section"
import { WorkSection } from "@/components/work-section"
import { Footer } from "@/components/footer"

function PageContent() {
  const { dir, lang } = useLanguage()

  return (
    <div dir={dir} lang={lang} className="overflow-x-hidden">
      <CursorFollower />
      <Navigation />

      <main>
        <HeroSection />

        {/* Japanese break: Musashi */}
        <JapaneseBreak
          characters={"\u5BAE \u672C \u6B66 \u8535"}
          dark={false}
          subtitle="Miyamoto Musashi"
        />

        <AboutSection />

        {/* Japanese break: Today I defeat the me of yesterday */}
        <JapaneseBreak
          characters={"\u4ECA \u65E5 \u306F \u6628 \u65E5 \u306E \u6211 \u306B \u52DD \u3064"}
          dark={false}
          subtitle="Today I defeat the me of yesterday"
        />

        <PracticeSection />

        {/* Japanese break: Mushin */}
        <JapaneseBreak
          characters={"\u7121 \u5FC3"}
          dark={true}
          subtitle="Mushin \u2014 No Mind"
        />

        <WorkSection />

        {/* Japanese break: Fudoshin */}
        <JapaneseBreak
          characters={"\u4E0D \u52D5 \u5FC3"}
          dark={false}
          subtitle="Fudoshin \u2014 Immovable Mind"
        />
      </main>

      <Footer />
    </div>
  )
}

export default function Page() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  )
}
