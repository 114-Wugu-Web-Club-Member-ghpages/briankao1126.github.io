import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, ArrowLeft } from "lucide-react";

export default function DiaryDetail() {
  const [, params] = useRoute("/diary/:id");

  const diary = {
    id: params?.id,
    title: "秋天的第一杯奶茶",
    date: "2025-11-07",
    content: `今天天氣好冷，終於喝到了期待已久的秋天第一杯奶茶！

溫暖的奶茶握在手裡，感覺整個人都暖和起來了。我選了經典的珍珠奶茶，甜度適中，珍珠Q彈有嚼勁，真的太好喝了。

坐在窗邊，看著外面的落葉慢慢飄落，金黃色的葉子在陽光下閃閃發光。這個季節真的太美好了，涼涼的天氣配上溫暖的飲品，還有美麗的秋景，讓人感到無比幸福。

和朋友聊天的時候，我們討論了很多關於秋天的回憶。每個人都有自己喜歡秋天的理由，而我最喜歡的就是這種舒適的溫度和浪漫的氛圍。

希望能好好珍惜這個秋天的每一天，記錄下更多美好的瞬間。`,
    mood: "happy",
  };


  return (
    <div className="min-h-screen">
      <section className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/diaries">
          <Button variant="ghost" className="mb-6 gap-2 rounded-full" data-testid="button-back">
            <ArrowLeft className="w-4 h-4" />
            返回
          </Button>
        </Link>

        <Card className="p-8">
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <Calendar className="w-4 h-4" />
            <span data-testid="text-diary-date">{diary.date}</span>
          </div>

          <h1 className="text-4xl font-bold mb-6 text-foreground" data-testid="text-diary-title">
            {diary.title}
          </h1>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-foreground leading-relaxed whitespace-pre-wrap" data-testid="text-diary-content">
              {diary.content}
            </p>
          </div>

        </Card>
      </section>
    </div>
  );
}
