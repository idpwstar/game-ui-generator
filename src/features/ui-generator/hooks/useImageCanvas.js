// hooks/useImageCanvas.js (modern-screenshot 버전)
import { domToPng } from 'modern-screenshot';

export function useImageCanvas(uiRef, userName) {
  const downloadToImage = async () => {
    if (!uiRef.current) return;

    try {
      // html2canvas의 고질적인 배경 누락, 글자 밀림, 이모지 깨짐을 완벽히 해결합니다.
      const dataUrl = await domToPng(uiRef.current, {
        quality: 1,
        scale: 2, // 고해상도 유지
      });

      const link = document.createElement('a');
      link.download = `${userName}_game_ui.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('이미지 변환 중 오류 발생:', error);
    }
  };

  return { downloadToImage };
}