// import { useState } from "react";
// import { Sidebar } from "@/components/Sidebar";
// import { ChapterContent } from "@/components/ChapterContent";
// import { ProgressBar } from "@/components/ProgressBar";
// import { chapters } from "@/data/chapters";

// const Index = () => {
//   const [activeChapter, setActiveChapter] = useState(chapters[0].id);

//   const currentChapter = chapters.find(c => c.id === activeChapter)!;
//   const currentIndex = chapters.findIndex(c => c.id === activeChapter);

//   const handleNextChapter = () => {
//     if (currentIndex < chapters.length - 1) {
//       setActiveChapter(chapters[currentIndex + 1].id);
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   };

//   const handlePrevChapter = () => {
//     if (currentIndex > 0) {
//       setActiveChapter(chapters[currentIndex - 1].id);
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   };

//   const handleChapterChange = (chapterId: string) => {
//     setActiveChapter(chapterId);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <ProgressBar activeChapter={activeChapter} />
//       <Sidebar activeChapter={activeChapter} onChapterChange={handleChapterChange} />

//       {/* Main Content */}
//       <main className="lg:ml-[280px] min-h-screen">
//         <div className="max-w-4xl mx-auto px-6 py-16 lg:px-12">
//           <ChapterContent
//             chapter={currentChapter}
//             onNextChapter={handleNextChapter}
//             onPrevChapter={handlePrevChapter}
//             hasNext={currentIndex < chapters.length - 1}
//             hasPrev={currentIndex > 0}
//           />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Index;
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { ChapterContent } from "@/components/ChapterContent";
import { ProgressBar } from "@/components/ProgressBar";
import { chapters } from "@/data/chapters";
import TeamPage from "./Team";
import CompleteVideoPage from "./video";

const Index = () => {
  // 👉 activeChapter peut être un chapitre OU une vue spéciale ("team")
  // const [activeChapter, setActiveChapter] = useState<string>(chapters[0].id);
  const [activeChapter, setActiveChapter] = useState<string>("team");

  // ⚠️ Peut être undefined si activeChapter === "team"
  const currentChapter = chapters.find((c) => c.id === activeChapter);
  const currentIndex = chapters.findIndex((c) => c.id === activeChapter);

  const handleNextChapter = () => {
    if (currentIndex >= 0 && currentIndex < chapters.length - 1) {
      setActiveChapter(chapters[currentIndex + 1].id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevChapter = () => {
    if (currentIndex > 0) {
      setActiveChapter(chapters[currentIndex - 1].id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleChapterChange = (chapterId: string) => {
    setActiveChapter(chapterId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <ProgressBar activeChapter={activeChapter} />

      <Sidebar
        activeChapter={activeChapter}
        onChapterChange={handleChapterChange}
      />

      {/* Main Content */}
      <main className="lg:ml-[280px] min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-16 lg:px-12">
          {/* 👥 Vue spéciale : Team */}
          {activeChapter === "team" ? (
            <TeamPage
              onStartTutorial={() => setActiveChapter(chapters[0].id)}
            />
          ) : (
            currentChapter && (
              <ChapterContent
                chapter={currentChapter}
                onNextChapter={handleNextChapter}
                onPrevChapter={handlePrevChapter}
                hasNext={currentIndex < chapters.length - 1}
                hasPrev={currentIndex > 0}
              />
            )
          )}

          {activeChapter === "video" && <CompleteVideoPage />}
        </div>
      </main>
    </div>
  );
};

export default Index;
